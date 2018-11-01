const dotenv = require('dotenv').config();

module.exports = {
	development: {
		database: process.env.DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		dialect: "mysql"
	},
	test: {
		username: "",
		password: null,
		database: "",
		host: "",
		dialect: "mysql"
	},
	production: {
		username: "",
		password: null,
		database: "",
		host: "127.0.0.1",
		dialect: "mysql"
	}
}