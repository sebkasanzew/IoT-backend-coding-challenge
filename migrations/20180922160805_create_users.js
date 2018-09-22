exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', table => {
            table.increments('id').primary()
            table.string('name')
            table.integer('cars_id').references('cars.id')
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};
