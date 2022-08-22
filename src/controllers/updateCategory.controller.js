import updateCategoryService from "../services/updateCategory.service";

const updateCategoryController = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = { ...req.body };

    const updatedCategory = await updateCategoryService(id, updatedData);

    return res.status(200).json({
      message: "Category updated",
      category: updatedCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateCategoryController;
