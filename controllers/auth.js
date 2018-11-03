module.exports = {
   signup: (req, res) => {
      res.render('signup');
   },
   signin: (req, res) => {
      res.render('signin');
   },
   dashboard: (req, res) => {
      res.render('dashboard', {
         firstname: req.user.firstname,
         lastname: req.user.lastname
      });
   },
   logout: (req, res) => {
      req.session.destroy(function (err) {
         res.redirect('/');
      });
   }
}