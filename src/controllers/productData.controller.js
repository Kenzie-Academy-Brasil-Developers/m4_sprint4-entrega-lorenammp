import productDataService from "../services/productData.service";

const productDataController = (req, res) => {
  const id = req.params.id;

  const product = productDataService(id);

  return res.json(product);
};

export default productDataController;
