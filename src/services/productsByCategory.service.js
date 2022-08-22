import database from "../database";

const productsByCategoryService = async (categoryId) => {
  try {
    const res = await database.query(
      `SELECT
        p.name,
        p.price,
        c.name AS category
      FROM
        products p
        JOIN categories c ON c.id = p.category_id
      WHERE p.category_id = $1`,
      [categoryId]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default productsByCategoryService;
