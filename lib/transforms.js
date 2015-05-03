'use strict';

exports.randomize = function randomize(data, header) {
  var newFileName = 'random-transform';
  var offset;

  console.log('Running randomize transform...');

  for (var i = header.paletteStart; i < header.pixelArrayStart; i++) {
      data[i] = Math.floor(Math.random() * 256);
  }

  return {
    data: data,
    newFileName: newFileName
  };
};

exports.blueTint = function blueTint(data, header) {
  var newFileName = 'blue-tint';
  var colorSkew;
  var offset;

  console.log('Running blue tint transform...');

  for (var i = 0; i < header.paletteSize; i++) {
    offset = header.paletteStart + (i * 4);
    for (var j = 0; j < 4; j++) {
      colorSkew = data[offset + j] + 250;

      if (j === 0) {
        data[offset + j] = colorSkew > 255 ? 255 : colorSkew;
      }
    }
  }

  return {
    data: data,
    newFileName: newFileName
  };
};
