const inquirer = require('inquirer');
const questions = require('./questions');

function doQa() {
	return inquirer.prompt(questions);
}

module.exports = doQa;
