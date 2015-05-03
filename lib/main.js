'use strict';

var readBitmap = require('./read-bitmap').readBitmap;
var emitter = require('./read-bitmap').emitter;
var getHeader = require('./get-header');
var transforms = require('./transforms');
var writeBitmap = require('./write-bitmap');

module.exports = function runTransform(file, transform) {
  if (!transforms[transform]) {
    console.log('Transform ' + transform + ' does not exist\nAborting');
    return;
  }

  var data = readBitmap(file);

  emitter.on('done', function(data) {
    var header = getHeader(data);
    var transformedData = transforms[transform](data, header);
    writeBitmap(transformedData.data, transformedData.newFileName);
  });
};
