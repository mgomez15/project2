const db = require("../models");

module.exports = {
	renderIndex: (req, res) => {
		db.project.findAll({
			// include: ['tasks']
		}).then(projects => {
			res.render('index', {
				msg: 'This is data being passed into the render method.',
				projects: projects
			});
		})
	},
	renderHome: (req, res) => {
		res.render('home');
	},
	renderAbout: (req, res) => {
		res.render('about');
	},
	renderBrowse: (req, res) => {
		res.render('browse');
	},

	renderProjects: (req, res) => {
		res.render('projects');
	}
};