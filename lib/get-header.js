module.exports = function getHeader(data) {
  var header = {};
  header.head = data.toString('utf-8', 0, 2);
  header.paletteStart = 54;
  header.paletteSize = data.readUInt32LE(46);

  return header;
};
