import { v4 as uuidv4 } from "uuid";
import database from "../database";

const createProductService = async (name, price, category_id) => {
  const newProduct = {
    name,
    price,
    category_id,
  };

  try {
    const res = await database.query(
      `
      INSERT INTO products
        (name, price, category_id)
      VALUES
        ($1, $2, $3)
      RETURNING *;
      `,
      [newProduct.name, newProduct.price, newProduct.category_id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
