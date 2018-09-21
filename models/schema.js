const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)


class Car extends Model {
    static get tableName() {
        return 'cars'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'cars.user_id',
                    to: 'user.id'
                }
            }
        }
    }
}

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            car: {
                relation: Model.HasOneRelation,
                modelClass: Car,
                join: {
                    from: 'user.id',
                    to: 'cars.user_id'
                }
            }
        }
    }
}

module.exports = { Car, User }
