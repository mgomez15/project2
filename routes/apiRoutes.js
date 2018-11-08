const api = require('../controllers/api.js');

module.exports = function(app) {
  app.get('/api/users', api.allUsers);
  app.get('/api/projects', api.allProjects);
  app.get('/api/tasks', api.allTasks);
  
  // Create project by accessing URL
  app.post('/project', api.newProject);
};