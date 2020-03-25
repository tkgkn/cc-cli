const pkg = require('../package.json')
const program = require('commander')
const questions = require('../questions/index')
const chalk = require('chalk')
const ora = require('ora')
const downloadGitRepo = require('download-git-repo')

const download = config => {
	const { url, projectName } = config
	const spinner = ora().start('downloading, please wait...')
	const timer = colorChange(['blue', 'yellow', 'green'], spinner)

	return new Promise((resolve, reject) => {
		downloadGitRepo(url, projectName, { clone: true }, err => {
			clearInterval(timer)
			if (err) {
				spinner.color = 'red'
				spinner.fail(`${chalk.bgRed('download error')}`)
				reject(err)
			} else {
				spinner.color = 'green'
				spinner.succeed(`${chalk.bgGreen('download success')}`)
				resolve(true)
			}
		})
	})
}

// 注册版本号
program.version(pkg.version, '-v --version')

// 注册init命令
program
	.command('init')
	.alias('i')
	.description('init a project')
	.option('-t, --temp <git path>', 'custom template path of git repository')
	.action(opts => {
		const { temp } = opts
		if (temp) {
			// 下载用户指定的模板
			return
		}
		questions().then(answers => {
			const { projectName } = answers
			download({ projectName, url: 'c690554125/cc-template#test' })
				.then(() => {
					console.log('')
					console.log('')
					console.log(
						` Then ${chalk.yellow.bold(
							`cd ${projectName}`
						)} then ${chalk.yellow.bold(
							'npm install or yarn'
						)} to install dependencies`
					)
					console.log(' ')
					console.log(
						` Run project by ${chalk.yellow.bold(
							'npm run start'
						)}  or ${chalk.yellow.bold('yarn start')}`
					)
					console.log('')
					console.log(' Now you can enjoy coding (￣▽￣)~*')
				})
				.catch(() => {
					console.log('err')
				})
		})
	})
	.on('-h', () => {
		console.log(' ')
		console.log('Examples:')
		console.log(' ')
		console.log('  $ cc init|i')
	})

function colorChange(
	colors = ['blue', 'yellow', 'green'],
	oraIns,
	interval = 2000
) {
	if (!oraIns) {
		return
	}
	let colorTimer = null
	let colorIndex = 0
	clearInterval(colorTimer)
	colorTimer = setInterval(() => {
		if (colorIndex < colors.length) {
			colorIndex += 1
		} else {
			colorIndex = 0
		}
		oraIns.color = colors[colorIndex]
	}, interval)

	return colorTimer
}
