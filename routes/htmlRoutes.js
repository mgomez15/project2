const htmlController = require('../controllers/html');

module.exports = function(app) {
  app.get('/', htmlController.renderIndex);
  app.get('/home', htmlController.renderHome);
  app.get('/about', htmlController.renderAbout);
  app.get('/browse', htmlController.renderBrowse);
  app.get('/projects', htmlController.renderProjects);
  app.get('/create', htmlController.renderCreate);
  app.get('/users', htmlController.renderUsers);
};
