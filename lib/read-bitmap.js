'use strict';

var fs = require('fs');

module.exports = function readBitmap (file) {
  var data = fs.readFileSync(file);
  return data;
};
