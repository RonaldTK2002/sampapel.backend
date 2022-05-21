/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('produtos', function(table) {
    table.string('produtos_id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('valor').notNullable();
    table.string('imagem').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
