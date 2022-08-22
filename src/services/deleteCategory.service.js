import { categories } from "../database";

const deleteCategoryService = (id) => {
  const categoryIndex = categories.findIndex((category) => category.id === id);

  if (categoryIndex === -1) {
    return "Category not found";
  }

  categories.splice(categoryIndex, 1);

  return 1;
};

export default deleteCategoryService;
