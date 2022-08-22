import { Router } from "express";

import createCategoryController from "../controllers/createCategory.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import categoryDataController from "../controllers/categoryData.controller";
import updateCategoryController from "../controllers/updateCategory.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";

const router = Router();

router.post("", createCategoryController);
router.get("", listCategoriesController);
router.get("/:id", categoryDataController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
