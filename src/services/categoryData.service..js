import { categories } from "../database";

const categoryDataService = (id) => {
  const categoryIndex = categories.findIndex((category) => category.id === id);

  if (categoryIndex === -1) {
    return "Category not found";
  }

  return categories[categoryIndex];
};

export default categoryDataService;
