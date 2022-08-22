import listProductsService from "../services/listProducts.service";

const listProductsController = (req, res) => {
  const productsList = listProductsService();

  return res.json(productsList);
};

export default listProductsController;
