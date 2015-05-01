var fs = require("fs");
var bitmap = {};

function readBitmap(file) {
  fs.readFile(file, function(err, data) {

    if (err) {
      throw new Error(err);
    } else {
      getHeader(data);
    }
  });
}

function getBitmapData(data) {
  bitmap.head = data.toString("utf-8", 0, 2);
  bitmap.paletteStart = 54;
  bitmap.paletteSize = data.readUInt32LE(46);
}
