const questions = [
	{
		type: 'input',
		name: 'projectName',
		message: '请输入项目名称',
		validate(val) {
			const reg = /[\w]/g;
			if (reg.test(val)) {
				return true;
			}
			return '请输入英文字母，0-9，_组成的文件名';
		}
	},
	{
		type: 'list',
		name: 'technologyStack',
		message: '选择使用的技术栈',
		choices: ['React', 'Vue'],
		filter(val) {
			return val.toLowerCase();
		}
	},
	{
		type: 'list',
		name: 'store',
		message: '选择使用的状态管理库',
		choices: ['Redux', 'Dva', 'Mobx', '不使用'],
		when(answers) {
			return answers.technologyStack === 'react';
		},
		filter(val) {
			if (val !== '不使用') {
				return val.toLowerCase();
			}
			return false;
		}
	},
	{
		type: 'confirm',
		name: 'router',
		message: '是否使用React-Router',
		default: true,
		when(answers) {
			return answers.technologyStack === 'react';
		}
	},
	{
		type: 'confirm',
		name: 'store',
		message: '是否使用状态管理库Vux',
		default: true,
		when(answers) {
			return answers.technologyStack === 'vue';
		}
	},
	{
		type: 'confirm',
		name: 'router',
		message: '是否使用Vue-Router',
		default: true,
		when(answers) {
			return answers.technologyStack === 'vue';
		}
	},
	{
		type: 'confirm',
		name: 'isTypeScript',
		message: '是否使用TypeScript开发',
		default: false
	},
	{
		type: 'list',
		name: 'postcss',
		message: '选择CSS预处理语言',
		choices: ['LESS', 'SASS'],
		filter(val) {
			return val.toLowerCase();
		}
	}
];

module.exports = questions;
