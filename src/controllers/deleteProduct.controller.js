import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = (req, res) => {
  const id = req.params.id;

  const deletedProduct = deleteProductService(id);

  if (deletedProduct === 1) {
    return res.json();
  }

  return res.json(deletedProduct);
};

export default deleteProductController;
