const ora = require('ora')

const spinnerLoading = ora().start('Loading unicorns')
spinnerLoading.color = 'blue'

const spinnerWarn = ora().warn('warning you')
spinnerWarn.color = 'yellow'

const spinnerFail = ora().fail('sorry fail')
spinnerFail.color = 'red'

const spinnerSucc = ora().succeed('yes successful')
spinnerFail.color = 'green'
