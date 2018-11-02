const htmlController = require('../controllers/html');

module.exports = function(app) {
  app.get('/', htmlController.renderHome);
};
