var validate = require('./lib/validate');

var options = {
  file: process.argv[2],
  transform: process.argv[3],
  amount: process.argv[4]
};

var validatedOptions = validate(options);

module.exports = require('./lib/main')(validatedOptions);
