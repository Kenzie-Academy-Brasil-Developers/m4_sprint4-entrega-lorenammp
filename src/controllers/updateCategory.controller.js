import updateCategoryService from "../services/updateCategory.service";

const updateCategoryController = (req, res) => {
  const id = req.params.id;
  const updatedData = { ...req.body };

  const updatedCategory = updateCategoryService(id, updatedData);

  return res.json(updatedCategory);
};

export default updateCategoryController;
