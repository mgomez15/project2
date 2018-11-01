module.exports = {
   signup: function (req, res) {
      res.render('signup');
   },
   signin: function (req, res) {
      res.render('signin');
   },
   dashboard: function (req, res) {
      res.render('dashboard', {
         firstname: req.user.firstname,
         lastname: req.user.lastname
      });
   },
   logout: function (req, res) {
      req.session.destroy(function (err) {
         res.redirect('/');
      });
   }
}