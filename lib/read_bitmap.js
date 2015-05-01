var fs = require("fs");
var header = {};

function readBitmap(file) {
  fs.readFile(file, function(err, data) {
    if (err) {
      throw new Error(err);
    } else {
      getHeader(data);
    }
  });
}

function getHeader(data) {
  header.head = data.toString("utf-8", 0, 2);
  header.size = data.readUInt32LE(2);
  header.pixelArrayStart = data.readUInt32LE(10);
  header.paletteSize = data.readUInt32LE(46);
  header.width = data.readUInt32LE(18);
  header.height = data.readUInt32LE(22);
}
