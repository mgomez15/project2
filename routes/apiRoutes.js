const api = require('../controllers/api.js');

module.exports = function(app) {
  app.get('/api/users', api.allUsers);
  app.get('/api/projects', api.allProjects);
  app.get('/api/tasks', api.allTasks);
};