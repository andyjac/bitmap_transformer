'use strict';

exports.randomize = randomize;
exports.blueTint = blueTint;

function randomize(data, header) {
  console.log('Running randomize transform...');

  for (var i = header.paletteStart; i < header.pixelArrayStart; i++) {
      data[i] = Math.floor(Math.random() * 256);
  }

  return {
    data: data,
    newFileName: 'randomize'
  };
}

function blueTint(data, header, amount) {
  var colorSkew;
  var offset;
  var skewAmount = Number(Math.abs(amount)) || 0;

  if (skewAmount > 255) {
    skewAmount = 255;
  }

  console.log('Running blue tint transform with amount: ' + skewAmount);

  for (var i = 0; i < header.paletteSize; i++) {
    offset = header.paletteStart + (i * 4);
    for (var j = 0; j < 4; j++) {
      colorSkew = data[offset + j] + skewAmount;
      if (j === 0) {
        data[offset + j] = colorSkew > 255 ? 255 : colorSkew;
      }
    }
  }

  return {
    data: data,
    newFileName: 'blue-tint' + '-' + skewAmount
  };
}
