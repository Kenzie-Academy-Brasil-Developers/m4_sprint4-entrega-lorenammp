import { Router } from "express";

import createProductController from "../controllers/createProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import listProductsController from "../controllers/listProducts.controller";
import productDataController from "../controllers/productData.controller";
import updateProductController from "../controllers/updateProduct.controller";

const router = Router();

router.post("", createProductController);
router.get("", listProductsController);
router.get("/:id", productDataController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
