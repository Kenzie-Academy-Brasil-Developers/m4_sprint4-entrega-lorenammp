import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = (req, res) => {
  const categories = listCategoriesService();

  return res.json(categories);
};

export default listCategoriesController;
