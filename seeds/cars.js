exports.seed = function (knex, Promise) {
    return knex('cars').del().then(() => {
      return knex('cars').insert([
          {creator: 'Ali', idea: 'A To Do List app!'},
          {creator: 'Ali', idea: 'A Blog!'},
          {creator: 'Ali', idea: 'A calculator'}
      ])
    })
  }
