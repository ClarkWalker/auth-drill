var knex = require('./knex');

module.exports = {
  signIn: function(agentName) {
    return knex('my_user')
    .where('agentName', agentName);
  },

  signUp: function(agentName) {
    return knex('my_user')
    .where('agentName', agentName);
  },
};
