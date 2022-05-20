/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.string('user_id').primary().notNullable();
    table.string('email').primary().notNullable();
    table.string('senha').primary().notNullable();
    table.string('nome').primary().notNullable();
    table.string('CPF').primary().notNullable();
    table.string('CEP').primary().notNullable();
    table.string('endereco').primary().notNullable();
    table.string('cidade').primary().notNullable();
    table.string('estado').primary().notNullable();
    table.string('data_nasc').primary().notNullable();
    table.string('telefone').primary().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};