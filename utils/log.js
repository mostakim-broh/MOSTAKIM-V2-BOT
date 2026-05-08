const chalk = require('chalk');

module.exports = (data, option = "LOG") => {
	switch (option) {

		case "warn":
			console.log(chalk.yellow('[ WARNING ] » ') + data);
			break;

		case "error":
			console.log(chalk.red('[ ERROR ] » ') + data);
			break;

		case "success":
			console.log(chalk.green('[ SUCCESS ] » ') + data);
			break;

		default:
			console.log(chalk.magenta(`[ ${option.toUpperCase()} ] » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {

	switch (option) {

		case "warn":
			console.log(chalk.yellow('[ LOADER WARNING ] » ') + data);
			break;

		case "error":
			console.log(chalk.red('[ LOADER ERROR ] » ') + data);
			break;

		default:
			console.log(chalk.green('[ MOSTAKIM V2 BOT LOAD ] » ') + data);
			break;
	}
}