
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contents', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('content_type').notNullable();
    table.text('image').notNullable();
    table.text('category').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contents')
};
