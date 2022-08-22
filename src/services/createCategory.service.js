import { v4 as uuidv4 } from "uuid";
import { categories } from "../database";

const createCategoryService = async (name) => {
  const newCategory = {
    name,
    id: uuidv4(),
  };

  categories.push(newCategory);

  const response = {
    message: "Category created",
    category: newCategory,
  };

  return response;
};

export default createCategoryService;
