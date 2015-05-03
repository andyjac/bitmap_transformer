'use strict';

var readBitmap = require('./read-bitmap').readBitmap;
var emitter = require('./read-bitmap').emitter;
var getHeader = require('./get-header');
var transforms = require('./transforms');
var writeBitmap = require('./write-bitmap');

var data = readBitmap('./bitmap1.bmp');

emitter.on('done', function(data) {
  var header = getHeader(data);
  var transformedData = transforms.randomize(data, header);
  writeBitmap(transformedData.data, transformedData.newFileName);
});
