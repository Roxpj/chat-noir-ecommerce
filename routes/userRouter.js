import { router } from "express";
import userController from "../controllers/userController";

const userRouter = router();

userRouter.router("/").get(userController.getUsers);
userRouter.router("/:id").get(userController.getUser);
userRouter.router("/:id").delete(userController.deleteUser);
userRouter.router("/").post(userController.createUser);
userRouter.router("/:id").patch(userController.modifyUser);

export default userRouter;
