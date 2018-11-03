// Dependencies
const express = require('express');
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

// Load models
const db = require('./models');

// Initialize express app
const app = express();

// Server port
const PORT = process.env.PORT || 3000;

// Method override for RESTFul form submissions
app.use(methodOverride('_method'));

// Parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// Passport config
app.use(session({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Use static files in /public
app.use(express.static('public'));

// Handlebars config
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main'
	})
);
app.set('view engine', 'handlebars');

// Utility functions

let logger = function (req, res, next) {
	console.log(req.user);
	console.log(req.body);
	next();
}

app.use(logger)

// Routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);
require('./routes/authRoutes.js')(app, passport);

// Passport strategies
require('./config/passport/passport.js')(passport, db.user);

// Starting the server, syncing our models
db.sequelize.sync({
		force: true, // disable in production
		logging: false // logging: console.log to enable logging
	})
	.then(function () {
		app.listen(PORT, function () {
			console.info(
				`View app: http://localhost:${PORT}/`
			);
		});
	})
	.catch(function (error) { // Error handling
		console.log(error);
	});