const fs = require('fs');
const util = require('util');

module.exports = {
   userLogger: (req, res, next) => {
      let data = JSON.stringify(req.user);
      if (req.user) {
         console.log(`--- User logged in as ${req.user.email}`);
         fs.writeFile('./helpers/log/user.txt', data, (err) => {
            if (err) throw err;
         });
      } else {
         console.log('--- User not logged in.');
         fs.writeFile('./helpers/log/user.txt', 'User not logged in.', (err) => {
            if (err) throw err;
         });
      }
      
      next();
   },
   reqLogger: (req, res, next) => {
      let data = util.inspect(req);
      fs.writeFile('./helpers/log/request.txt', data, (err) => {
         if (err) throw err;
      });
      next();
   },
   resLogger: (req, res, next) => {
      let data = util.inspect(res);
      fs.writeFile('./helpers/log/response.txt', data, (err) => {
         if (err) throw err;
      });
      next();
   }
}