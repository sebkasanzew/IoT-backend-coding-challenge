require('dotenv').config()

const pg = require('pg')
pg.defaults.ssl = false

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
