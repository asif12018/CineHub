import { Router } from "express";
import { NotificationController } from "./notification.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";









const router = Router();


router.post("/", checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),NotificationController.readNotification);
router.get("/",checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),NotificationController.getAllUserNotification);

export const NotificationRoutes = router;