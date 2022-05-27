/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('favoritos', function(table) {
        table.string('user_id').notNullable();
        table.foreign('user_id').references('user_id').inTable('user').onDelete('cascade');
        table.integer('produtos_id').notNullable();
        table.foreign('produtos_id').references('produtos_id').inTable('produtos').onDelete('cascade')
    
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('favoritos');
};
