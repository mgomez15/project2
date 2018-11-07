const htmlController = require('../controllers/html');

module.exports = function(app) {
  app.get('/', htmlController.renderIndex);
  app.get('/home', htmlController.renderHome);
  app.get('/about', htmlController.renderAbout);
  app.get('/browse', htmlController.renderBrowse);
  
};
