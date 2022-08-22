import categoryDataService from "../services/categoryData.service.";

const categoryDataController = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await categoryDataService(id);

    if (category === undefined) {
      return res.status(400).json({
        message: "Category id not found",
      });
    }

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default categoryDataController;
