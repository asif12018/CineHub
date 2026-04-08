import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./app/lib/auth";
import cookieParser from "cookie-parser";
import { IndexRoutes } from "./app/routes";

import { globalErrorHandler } from "./app/middlewares/globalErrorhandler";
import { notFount } from "./app/middlewares/notFountRoutes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: [config.BETTER_AUTH_URL, config.FRONTEND_URL] as string[],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api/auth", toNodeHandler(auth));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

//specify routes

app.use("/api/v1", IndexRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Apollo Gears World!");
});

app.use(notFount);
app.use(globalErrorHandler);

export default app;
