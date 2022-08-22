import deleteCategoryService from "../services/deleteCategory.service";

const deleteCategoryController = (req, res) => {
  const id = req.params.id;

  const deleted = deleteCategoryService(id);

  if (deleted === 1) {
    return res.json();
  }

  return res.json(deleted);
};

export default deleteCategoryController;
