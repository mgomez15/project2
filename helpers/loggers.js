const fs = require('fs');
const util = require('util');

module.exports = {
   userLogger: (req, res, next) => {
      let data = JSON.stringify(req.user);
      fs.writeFile('./helpers/log/userLog.txt', data, (err) => {
         if (err) throw err;
      });
      next();
   },
   reqLogger: (req, res, next) => {
      let data = util.inspect(req);
      fs.writeFile('./helpers/log/requestLog.txt', data, (err) => {
         if (err) throw err;
      });
      next();
   },
   resLogger: (req, res, next) => {
      let data = util.inspect(res);
      fs.writeFile('./helpers/log/responseLog.txt', data, (err) => {
         if (err) throw err;
      });
      next();
   }
}