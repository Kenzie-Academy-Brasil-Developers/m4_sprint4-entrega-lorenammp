import updateProductService from "../services/updateProduct.service";

const updateProductController = (req, res) => {
  const id = req.params.id;
  const updatedData = { ...req.body };

  const updatedProduct = updateProductService(id, updatedData);

  return res.json(updatedProduct);
};

export default updateProductController;
