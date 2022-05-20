/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('favoritos', function(table) {
    table.string('favoritos_id').primary().notNullable();
    table.string('user_id').primary().notNullable();
    table.string('produtos_id').primary().notNullable();

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
