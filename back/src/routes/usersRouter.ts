import { Router } from "express";
import { getAllUsers, getUserById, login, register } from "../controllers/UserControllers";
import userValidate from "../middlewares/userValidateMiddlewear";
import credentialValidate from "../middlewares/credentialValidateMiddleware";

const usersRouter: Router = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register",userValidate, register);
usersRouter.post("/login", credentialValidate, login)

export default usersRouter;