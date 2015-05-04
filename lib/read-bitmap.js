'use strict';

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

exports.emitter = emitter;
exports.readBitmap = readBitmap;

function readBitmap(file) {
  console.log('Reading ' + file + '...');
  fs.readFile(file, function(err, data) {

    if (err) {
      console.log('Could not read ' + file + '\n\nAborting\n');
      return;
    }

    emitter.emit('done', data);
  });
}
