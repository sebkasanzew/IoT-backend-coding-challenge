exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('cars', table => {
          table.increments('id').primary()
          table.string('model')
          table.string('user')
        })
      ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('cars')
    ])
};
