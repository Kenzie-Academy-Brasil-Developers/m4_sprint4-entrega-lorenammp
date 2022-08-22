import productsByCategoryService from "../services/productsByCategory.service";

const productsByCategoryController = async (req, res) => {
  try {
    const id = req.params.category_id;

    const productCategory = await productsByCategoryService(id);

    if (productCategory.length === 0) {
      return res.status(400).json({
        message: "Category id not found",
      });
    }

    return res.status(200).json(productCategory);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default productsByCategoryController;
