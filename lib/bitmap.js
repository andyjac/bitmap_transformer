var fs = require("fs");
var bitmapData = {};

function readBitmap(file) {
  fs.readFile(file, function(err, data) {

    if (err) {
      throw new Error(err);
    } else {
      getBitmapData(data);
    }
  });
}

function getBitmapData(data) {
  bitmapData.head = data.toString("utf-8", 0, 2);
  bitmapData.paletteStart = 54;
  bitmapData.paletteSize = data.readUInt32LE(46);
  buildPalette(data);
}


function buildPalette(data) {
  // found snippet at:
  // https://github.com/kevintechie/bitmap-transform/blob/master/lib/bitmap.js
  var palette = [];

  for (var i = 0; i < bitmapData.paletteSize; i++) {
    var offset = bitmapData.paletteStart + (i * 4);
    var pixel = [];
    for (var j = 0; j < 4; j++) {
      pixel.push(data.readUInt8(offset + j));
    }
    palette.push(pixel);
  }
  bitmapData.palette = palette;
}
