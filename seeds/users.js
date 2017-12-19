
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('my_user').del()
    .then(function() {
      // Inserts seed entries
      return knex('my_user').insert([
        {
          // id: 1,
          agentName: '303w',
          password: 'value1'
        },
        {
          // id: 2,
          agentName: 'xlarkle',
          password: 'value2'
        },
        {
          // id: 3,
          agentName: 'bob',
          password: 'value3'
        }
      ]);
    });
};
