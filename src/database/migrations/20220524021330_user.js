/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("user_id").primary().notNullable();
    table.string('firebase_id').notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.string("nome").notNullable();
    table.string("CPF").notNullable();
    table.string("CEP").notNullable();
    table.string("endereco").notNullable();
    table.string("cidade").notNullable();
    table.string("estado").notNullable();
    table.string("data_nasc").notNullable();
    table.string("telefone").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user');
};
