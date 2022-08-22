import productDataService from "../services/productData.service";

const productDataController = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productDataService(id);

    if (product === undefined) {
      return res.status(400).json({
        message: "Category id not found",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default productDataController;
