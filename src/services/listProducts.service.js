import { products } from "../database";

const listProductsService = () => {
  const productsList = products;

  return productsList;
};

export default listProductsService;
