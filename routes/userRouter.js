import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.route("/").get(userController.getUsers);
userRouter.route("/:id").get(userController.getUser);
userRouter.route("/:id").delete(userController.deleteUser);
userRouter.route("/").post(userController.createUser);
userRouter.route("/:id").patch(userController.modifyUser);

export default userRouter;
