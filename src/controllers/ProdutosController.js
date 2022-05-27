const { response } = require("express");
const ProdutosModel = require("../models/ProdutosModel");

module.exports = {
  async create(request, response) {
    try {
      const produto = request.body;

      const result = await ProdutosModel.create(produto);

      return response.status(200).json({ produtos_id: result[0] });
    } catch (error) {
      console.log("Produtos creation failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to create Produtos",
      });
    }
  },
  async getByFields(request, response) {
    try {
      const fields = request.query;

      const result = await ProdutosModel.getByFields(fields);

      return response.status(200).json(result);
    } catch (error) {
      console.log("Produtos get failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to get Produtos",
      });
    }
  },
  async getById(request, response) {
    try {
      const {produtos_id}= request.query

      const result = await ProdutosModel.getById(produtos_id);

      return response.status(200).json(result);
    } catch (error) {
      console.log("Produtos get failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to get Produtos",
      });
    }
  },

  async update(request, response) {
    try {
      const { produtos_id } = request.params;
      const produtos = request.body;

      const result = await ProdutosModel.updateById(produtos_id, produtos);
      if (result != 0)
        return response
          .status(200)
          .json({ notification: "Produtos updated succesfully" });
      else
        return response
          .status(400)
          .json({ notification: "Produtos_id not found" });
    } catch (error) {
      console.log("Produtos update failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to update Produtos",
      });
    }
  },
  async delete(request, response) {
    try {
      const { produtos_id } = request.params;
      const result = await ProdutosModel.deleteById(produtos_id);
      if (result != 0)
        return response
          .status(200)
          .json({ notification: "Produtos deleted succesfully" });
      else
        return response
          .status(404)
          .json({ notification: "Produtos_id not found" });
    } catch (error) {
      console.log("Produtos deletion failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to delete Produtos",
      });
    }
  },
};
