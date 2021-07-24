const Products = require("../models/products");

class ProductController {
  createProduct = async (req, res) => {
    try {
      let product = req.body;
      product.isPublished = false;

      const count = Products.count();
      const productId = parseInt(count) + 1;

      product.id = productId;

      const response = await Products.create(product);

      res.status(201).send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send({});
    }
  };

  getProducts = async (req, res) => {
    try {
      const products = await (await Products.findAll()).sort((a, b) => a.id < b.id);
      res.status(200).send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send({});
    }
  };

  deleteProductById = async (req, res) => {
    res.status(405).json({ message: "Not allowed" });
  };

  patchProductById = async (req, res) => {
    try {
      let { id } = req.params;

      let product = await Products.findOne({ where: { id } });
      const existProduct = !!product;

      if (!existProduct) {
        res.status(404).send();
        return;
      }

      const { mrp, price, stock } = product;

      const isMrpGreatherThanPrice = mrp >= price;
      const existStock = stock > 0;

      if (!isMrpGreatherThanPrice && !existStock) {
        res.status(422).send(["MRP should be less than equal to the Price", "Stock count is 0"]);
      } else if (!isMrpGreatherThanPrice) {
        res.status(422).send(["MRP should be less than equal to the Price"]);
      } else if (!existStock) {
        res.status(422).send(["Stock count is 0"]);
      } else {
        await Products.update({ isPublished: true }, { where: { id } });
        res.status(204).json();
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({});
    }
  };
}

module.exports = new ProductController();
