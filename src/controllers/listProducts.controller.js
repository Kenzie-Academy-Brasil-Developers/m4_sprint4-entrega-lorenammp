import listProductsService from "../services/listProducts.service";

const listProductsController = async (req, res) => {
  try {
    const productsList = await listProductsService();

    return res.status(200).json(productsList);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductsController;
