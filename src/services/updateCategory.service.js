import { categories } from "../database";

const updateCategoryService = (id, newData) => {
  const categoryIndex = categories.findIndex((category) => category.id === id);

  if (categoryIndex === -1) {
    return "Category not found";
  }

  categories[categoryIndex] = { ...categories[categoryIndex], ...newData };

  const updatedCategory = {
    message: "Category updated",
    name: categories[categoryIndex],
  };
  return updatedCategory;
};

export default updateCategoryService;
