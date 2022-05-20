/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('produtos', function(table) {
    table.string('produtos_id').primary().notNullable();
    table.string('nome').primary().notNullable();
    table.string('valor').primary().notNullable();
    table.string('imagem').primary().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
