const db = require("../models");

module.exports = {
	allUsers: function (req, res) {
		db.user.findAll({})
			.then(function (users) {
				res.json(users);
			});
	},
	allProjects: function (req, res) {
		db.project.findAll({})
			.then(function (projects) {
				res.json(projects);
			});
	},
	allTasks: function (req, res) {
		db.task.findAll({})
			.then(function (tasks) {
				res.json(tasks)
			});
	}
};