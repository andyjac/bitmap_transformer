'use strict';

exports.randomize = function randomize(data, header) {
  var newFileName = 'random-transform';

  for (var i = header.paletteStart; i < header.paletteSize; i++) {
      data[i] = Math.floor(Math.random() * 256);
  }

  return {
    data: data,
    newFileName: newFileName
  };
};
