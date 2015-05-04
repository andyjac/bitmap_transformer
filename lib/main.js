'use strict';

var readBitmap = require('./read-bitmap').readBitmap;
var emitter = require('./read-bitmap').emitter;
var getHeader = require('./get-header');
var transforms = require('./transforms');
var writeBitmap = require('./write-bitmap');

module.exports = function runTransform(options) {
  var file = options.file;
  var transform = options.transform;
  var amount = options.amount || null;

  if (!transforms[transform]) {
    console.log('Transform ' + "'" + transform + "'" + ' does not exist');
    console.log('Available transforms include:\n- randomize\n- blueTint [amount]');
    console.log('\nAborting\n');
    return;
  }

  var data = readBitmap(file);

  emitter.on('done', function(data) {
    var header = getHeader(data);
    var transformedData = transforms[transform](data, header, amount);
    writeBitmap(transformedData.data, transformedData.newFileName);
  });
};
