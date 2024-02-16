import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

productRouter.route("/").get(productController.getProducts);
productRouter.route("/:id").get(productController.getProduct);
productRouter.route("/:id").delete(productController.deleteProduct);
productRouter.route("/").post(productController.createProduct);
productRouter.route("/:id").patch(productController.modifyProduct);
productRouter.route("/:id").post(productController.modifyStock);

export default productRouter;