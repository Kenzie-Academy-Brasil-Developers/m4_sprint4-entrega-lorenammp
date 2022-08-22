import updateProductService from "../services/updateProduct.service";

const updateProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = { ...req.body };

    const updatedProduct = await updateProductService(id, updatedData);

    if (updatedProduct === undefined) {
      return res.status(400).json({
        message: "Product id not found",
      });
    }

    return res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
