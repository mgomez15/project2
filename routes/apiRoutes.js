const api = require('../controllers/api.js');

module.exports = function(app) {
  app.get('/api/users', api.allUsers);
};