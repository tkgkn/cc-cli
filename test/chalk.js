const chalk = require('chalk')
const log = console.log

const error = chalk.bold.red
const warning = chalk.keyword('orange')

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'))

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'))

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))

// Nest styles of the same type even (color, underline, background)
log(
	chalk.green(
		'I am a green line ' +
			chalk.blue.underline.bold('with a blue substring') +
			' that becomes green again!'
	)
)

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`)

// ES2015 tagged template literal
log(chalk`
CPU: {red ${50}%}
RAM: {green ${(10 / 100) * 100}%}
DISK: {rgb(255,131,0) ${(10 / 100) * 100}%}
`)

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'))
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))
log(chalk.hex('#DEADED').bold('Bold gray!'))

console.log(error('Error!'))
console.log(warning('Warning!'))

const miles = 18
const calculateFeet = miles => miles * 5280

log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`)

log(chalk.hex('#DEADED').underline('Hello, world!'))
log(chalk.keyword('orange')('Some orange text'))
log(chalk.rgb(15, 100, 204).inverse('Hello!'))

log(chalk.bgHex('#DEADED').underline('Hello, world!'))
log(chalk.bgKeyword('orange')('Some orange text'))
log(chalk.bgRgb(15, 100, 204).inverse('Hello!'))
