import {Router} from "express";
import {getUserById} from "../controller/UserController";

const router = Router();

router.get("/:id", getUserById);

export default router;
