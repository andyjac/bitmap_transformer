'use strict';

var fs = require('fs');

module.exports = exports = {};

exports.readBitmap = function (file, transform) {
  fs.readFile(file, function(err, data) {
    if (err) throw new Error(err);

    var header = exports.getHeader(data);
    transform(data, header);
  });
}

exports.getHeader = function (data) {
  var header = {};

  header.head = data.toString('utf-8', 0, 2);
  header.paletteStart = 54;
  header.paletteSize = data.readUInt32LE(46);

  return header;
}

function randomTransform(data, header) {
  var fileName = 'random-transform';

  for (var i = header.paletteStart; i < header.paletteSize; i++) {
    data[i] = Math.floor(Math.random() * 255);
  }

  writeFile(data, fileName);
}

function writeFile(data, fileName) {
  fileName += '.bmp';

  fs.writeFile(fileName, data, function(err) {
    if (err) throw new Error(err);

    console.log('file written');
  });
}
