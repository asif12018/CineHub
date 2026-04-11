import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";
import { GenreController } from "./genre.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { GenreValidation } from "./genre.validation";



const router = Router();


router.post("/",checkAuth(Role.ADMIN, Role.SUPER_ADMIN), validateRequest(GenreValidation.createGenre), GenreController.createGenre)
router.patch("/:id",checkAuth(Role.ADMIN, Role.SUPER_ADMIN), validateRequest(GenreValidation.updateGenre), GenreController.updateGenre)
router.delete("/:id",checkAuth(Role.ADMIN, Role.SUPER_ADMIN), GenreController.deleteGenre)
router.get("/", GenreController.getAllGenre)
router.get("/:id", GenreController.getGenreById)


export const GenreRoutes = router;