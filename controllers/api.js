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
				// include: ['tasks']
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
				description: req.body.description
			}
			Project.create(data).then(db => {
				db.createTask({
					name: 'My first task'
				}).then(() => {
					res.render('project', {
						name: req.body.name,
						description: req.body.description
					});
				});
			})
	},
	newTeam: (req, res) => {
		db.team.create({
			name: 'My First Team',
			user: {
				first_name: 'Mick',
				last_name: 'Broadstone',
				addresses: [{
					type: 'home',
					line_1: '100 Main St.',
					city: 'Austin',
					state: 'TX',
					zip: '78704'
				}]
			}
		}, {
			include: [{
				association: Product.User,
				include: [User.Addresses]
			}]
		})
	}
};