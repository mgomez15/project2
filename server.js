var express = require("express");
var passport = require('passport')
var session = require('express-session')
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

// Load models
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Method override for RESTFul form submissions
app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// Passport config
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Use static files in /public
app.use(express.static("public"));

// Handlebars config
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main"
	})
);
app.set("view engine", "handlebars");

// Route config 
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);
require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport,db.user);

// Starting the server, syncing our models
db.sequelize.sync().then(function () {
	app.listen(PORT, function () {
		console.info(
			`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
		);
	});
});