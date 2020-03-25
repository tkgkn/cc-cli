const program = require('commander')

program
	.command('start')
	.alias('dev')
	.description('本地启动工程项目')
	.action(() => {
		// 判断下是否在cc-cli创建的项目，如果是且在项目根目录，则运行 npm run start
	})
	.on('-h', () => {
		console.log(' ')
		console.log('Examples:')
		console.log('  $ cc start')
	})
