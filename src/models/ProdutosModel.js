const connection = require("../database/connection");

module.exports = {
  async create(produto) {
    const result = await connection("produtos").insert(produto);

    return result;
  },
  async getByFields(fields) {
    const result = await connection("produtos").where(fields).select("*");

    return result;
  },

  async updateById(produtos_id, produto) {
    const result = await connection("produtos")
      .where({ produtos_id })
      .update(produto);

    return result;
  },
  async deleteById(produtos_id) {
    const result = await connection("produtos").where({ produtos_id }).delete();

    return result;
  },
};
