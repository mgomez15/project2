const db = require("../models");
const Project = require('../models').project;
const User = require('../models').user;
const Task = require('../models').task;

module.exports = {
	allUsers: (req, res) => {
		db.user.findAll({
				// include: [{
				// 	all: 'true'
				// }]
			})
			.then(function (users) {
				res.json(users);
			});
	},
	allProjects: (req, res) => {
		db.project.findAll({
				include: ['tasks']
			})
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
			let data = {
				name: req.body.name,
				description: req.body.description,
				userId: req.user.id
			}
			Project.create(data).then(db => {
				db.createTask({
					name: 'My first task',
					userId: req.user.id
				}).then(() => {
					res.render('project', {
						name: req.body.name,
						description: req.body.description
					});
				});
			})
	}
};