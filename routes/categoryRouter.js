import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.route("/").get(categoryController.getCategories);
categoryRouter.route("/:id").get(categoryController.getCategory);
categoryRouter.route("/:id").delete(categoryController.deleteCategory);
categoryRouter.route("/").post(categoryController.createCategory);
categoryRouter.route("/:id").patch(categoryController.modifyCategory);

export default categoryRouter;