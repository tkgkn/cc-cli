const program = require('commander')

require('./init')
require('./start')
require('./build')

program.parse(process.argv)
