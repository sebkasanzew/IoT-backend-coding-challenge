exports.seed = function (knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([{
          id: 1,
          model: 'rowValue1',
          user: ''
        },
        {
          id: 2,
          model: 'rowValue2',
          user: ''
        },
        {
          id: 3,
          model: 'rowValue3',
          user: ''
        }
      ]);
    });
};
