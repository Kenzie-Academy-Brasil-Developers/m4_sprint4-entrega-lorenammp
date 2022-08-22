import { products } from "../database";

const productDataService = (id) => {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return "Product not found";
  }

  return products[productIndex];
};

export default productDataService;
