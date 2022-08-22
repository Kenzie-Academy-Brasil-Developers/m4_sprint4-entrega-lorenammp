import createProductService from "../services/createProduct.service";

const createProductController = async (req, res) => {
  try {
    const { name, price, category_id } = req.body;

    const product = await createProductService(name, price, category_id);

    return res.status(201).json({
      message: "Product created",
      product: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createProductController;
