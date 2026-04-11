import express from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";
import { AdminController } from "./adminStats.controller";


const router = express.Router();

// 🚨 Protect this route! Only admins should see this data.
router.get(
  "/analytics",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN), // Your JWT middleware verifying the role
  AdminController.getDashboardAnalytics
);

export const AdminRoutes = router;