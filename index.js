var file = process.argv[2];
var transform = process.argv[3];

module.exports = require('./lib/main')(file, transform);
