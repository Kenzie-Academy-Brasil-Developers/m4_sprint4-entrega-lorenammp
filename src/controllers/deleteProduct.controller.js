import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedProduct = await deleteProductService(id);

    if (deletedProduct === 0) {
      return res.status(400).json({
        message: "Product id not found",
      });
    }

    return res.status(204).json(deletedProduct);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteProductController;
