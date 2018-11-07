const dotenv = require('dotenv').config();

module.exports = {
	"development": {
		"database": "process.env.DB_NAME",
		"username": "process.env.DB_USERNAME",
		"password": "process.env.DB_PASSWORD",
		"host": "process.env.DB_HOST",
		"dialect": "mysql",
		"operatorsAliases": "false"
	},
	"test": {
		"username": "",
		"password": "null",
		"database": "",
		"host": "",
		"dialect": "mysql"
	},
	"production": {
		"use_env_variable": "JAWSDB_URL",
		"dialect": "mysql"
	}
}