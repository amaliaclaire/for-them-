
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('image').notNullable();
    table.text('dedicated_to').notNullable();
    table.text('user_id').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
};
