module.exports = {
   signup: (req, res) => {
      res.render('signup');
   },
   signin: (req, res) => {
      res.render('signin');
   },
   dashboard: (req, res) => {
      res.render('dashboard', {
         username: req.user.username
      });
   },
   logout: (req, res) => {
      req.session.destroy(function (err) {
         res.redirect('/');
      });
   }
}