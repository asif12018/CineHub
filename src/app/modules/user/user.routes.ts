import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../../../../generated/prisma";
import { UserController } from "./user.controller";





const router = Router();


router.get("/", checkAuth(Role.ADMIN, Role.SUPER_ADMIN) , UserController.getAllUser);
router.patch("/ban/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN) , UserController.bannedAUser);
router.patch("/unban/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN) , UserController.unbannedAUser);


export const UserRoutes = router;