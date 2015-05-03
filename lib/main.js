'use strict';

var readBitmap = require('./read-bitmap');
var getHeader = require('./get-header');
var transforms = require('./transforms');
var writeBitmap = require('./write-bitmap');

var data = readBitmap('./bitmap1.bmp');
var header = getHeader(data);
var transformedData = transforms.random(data, header);
writeBitmap(transformedData.data, transformedData.newFileName);
