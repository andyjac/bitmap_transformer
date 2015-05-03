'use strict';

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
exports.emitter = new EventEmitter();

exports.readBitmap = function readBitmap (file) {
  console.log('Reading ' + "'" + file + "'" + '...');
  fs.readFile(file, function(err, data) {

    exports.emitter.emit('done', data);
  });
};
