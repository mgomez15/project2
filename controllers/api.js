const db = require("../models");

module.exports = {
	allUsers: (req, res) => {
		db.user.findAll({})
			.then(function (users) {
				res.json(users);
			});
	},
	allProjects: (req, res) => {
		db.project.findAll({})
			.then(function (projects) {
				res.json(projects);
			});
	},
	allTasks: (req, res) => {
		db.task.findAll({})
			.then(function (tasks) {
				res.json(tasks)
			});
	},
	newProject: (req, res) => {
		db.project.create({
			slug: req.params.id,
			name: req.params.id
		}).then(db => {
			db.createTask({
				name: 'My first task'
			}).then(() => {
				res.json(db);
			});
		})
	}
};