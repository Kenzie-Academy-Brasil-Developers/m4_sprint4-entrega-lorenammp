import deleteCategoryService from "../services/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await deleteCategoryService(id);

    if (deleted === 0) {
      return res.status(400).json({
        message: "Category id not found",
      });
    }

    return res.status(204).json(deleted);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteCategoryController;
