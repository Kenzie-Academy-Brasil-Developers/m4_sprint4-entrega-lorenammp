import createProductService from "../services/createProduct.service";

const createProductController = async (req, res) => {
  const { name, price } = req.body;

  const product = await createProductService(name, price);

  return res.status(201).json(product);
};

export default createProductController;
