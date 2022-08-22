import { products } from "../database";

const updateProductService = (id, newData) => {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return "Product not found";
  }

  products[productIndex] = { ...products[productIndex], ...newData };

  const updatedProduct = {
    message: "Product updated",
    name: products[productIndex],
  };

  return updatedProduct;
};

export default updateProductService;
