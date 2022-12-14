import database from "../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(`DELETE FROM categories WHERE id = $1`, [
      id,
    ]);

    return res.rowCount;
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryService;
