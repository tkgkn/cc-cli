const program = require('commander')

program
	.command('build')
	.alias('b')
	.description('打包工程项目代码')
	.action(() => {
		// 判断下是否在cc-cli创建的项目，如果是且在项目根目录，则运行 npm run build
	})
	.on('-h', () => {
		console.log(' ')
		console.log('Examples:')
		console.log('  $ cc build')
	})
