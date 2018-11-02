const db = require("../models");

module.exports = {
	renderHome: (req, res) => {
		db.project.findAll({
			include: ['tasks']
		}).then(projects => {
			res.render('index', {
				msg: 'This is data being passed into the render method.',
				projects: projects
			});
		})
	},
};