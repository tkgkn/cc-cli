const fs = require('fs')

// 只检查文件或文件夹存不存在，不去创建
function checkFileDirExist(path) {
	if (!path) {
		return false
	}
	return new Promise(resolve => {
		fs.stat(path, (err, stats) => {
			if (err) {
				resolve(false)
			} else {
				resolve(stats)
			}
		})
	})
}

module.exports = {
	checkFileDirExist
}
