import createCategoryService from "../services/createCategory.service";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  const category = await createCategoryService(name);

  return res.status(201).json(category);
};

export default createCategoryController;
