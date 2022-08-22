import database from "../database";

const updateProductService = async (id, newData) => {
  try {
    let res;
    if (newData.name === undefined) {
      res = await database.query(
        `UPDATE products
      SET price = $1
      WHERE id = $2
      RETURNING *;`,
        [newData.price, id]
      );
    } else if (newData.price === undefined) {
      res = await database.query(
        `UPDATE products
      SET name = $1
      WHERE id = $2
      RETURNING *;`,
        [newData.name, id]
      );
    } else {
      res = await database.query(
        `UPDATE products
        SET name = $1, price = $2
        WHERE id = $3
        RETURNING *;`,
        [newData.name, newData.price, id]
      );
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
