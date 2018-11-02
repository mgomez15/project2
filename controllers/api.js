const db = require("../models");

module.exports = {
	allUsers: function (req, res) {
		db.user.findAll({})
			.then(function (users) {
				res.json(users);
			});
	}
};