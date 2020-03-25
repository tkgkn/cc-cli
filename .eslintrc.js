module.exports = {
	parser: 'babel-eslint',
	extends: 'eslint:recommended',
	env: {
		// 支持node环境的一些变量比如process
		node: true,
		// 支持Promise等新的es全局变量
		es6: true
	},
	parserOptions: {
		// 支持es6的语法
		ecmaVersion: 2016
	},
	rules: {
		'no-unused-vars': 'warn'
	}
}
