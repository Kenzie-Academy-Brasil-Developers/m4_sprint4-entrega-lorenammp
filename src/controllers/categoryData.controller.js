import categoryDataService from "../services/categoryData.service.";

const categoryDataController = (req, res) => {
  const id = req.params.id;

  const category = categoryDataService(id);

  return res.json(category);
};

export default categoryDataController;
