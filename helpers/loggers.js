const fs = require('fs');
const util = require('util');

module.exports = {
   userLogger: (req, res, next) => {
      let enable = process.env.USER_LOGGING;
      if (enable === 'true') {
         console.log('--- User logging enabled.');
         let data = JSON.stringify(req.user);
         if (req.user) {
            fs.writeFile('./helpers/log/user.txt', data, (err) => {
               if (err) throw err;
            });
         } else {
            fs.writeFile('./helpers/log/user.txt', 'User not logged in.', (err) => {
               if (err) throw err;
            });
         }
      } else if (enable === 'false') {
         console.log('--- User logging disabled.')
      } else {
         console.log('--- Logging error. Update environment variables to enable logging.')
      }
      next();
   },
   reqLogger: (req, res, next) => {
      let enable = process.env.REQ_LOGGING;
      if (enable === 'true') {
         console.log('--- Request logging enabled.');
         let data = util.inspect(req);
         fs.writeFile('./helpers/log/request.txt', data, (err) => {
            if (err) throw err;
         });
      } else if (enable === 'false') {
         console.log('--- Request logging disabled.')
      } else {
         console.log('--- Logging error. Update environment variables to enable logging.')
      }
      next();
   },
   resLogger: (req, res, next) => {
      let enable = process.env.RES_LOGGING;
      if (enable === 'true') {
         console.log('--- Response logging enabled.');
         let data = util.inspect(res);
         fs.writeFile('./helpers/log/response.txt', data, (err) => {
            if (err) throw err;
         });
      } else if (enable === 'false') {
         console.log('--- Response logging disabled.')
      } else {
         console.log('--- Logging error. Update environment variables to enable logging.')
      }
      next();
   }
}