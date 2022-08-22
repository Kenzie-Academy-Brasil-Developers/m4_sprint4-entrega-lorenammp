import { products } from "../database";

const deleteProductService = (id) => {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return "Product not found";
  }

  products.splice(productIndex, 1);

  return 1;
};

export default deleteProductService;
