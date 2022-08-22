import { v4 as uuidv4 } from "uuid";
import { products } from "../database";

const createProductService = async (name, price) => {
  const newProduct = {
    name,
    price,
    id: uuidv4(),
  };

  products.push(newProduct);

  const response = {
    message: "Product created",
    product: newProduct,
  };

  return response;
};

export default createProductService;
