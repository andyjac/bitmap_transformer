var options = {
  file: process.argv[2],
  transform: process.argv[3],
  amount: process.argv[4]
};

module.exports = require('./lib/main')(options);
