'use strict';

var fs = require('fs');

module.exports = function writeBitmap(data, newFileName) {
  newFileName += '.bmp';

  console.log('Writing file...');

  fs.writeFile(newFileName, data, function(err) {
    if (err) {
      console.log('Could not write ' + newFileName + '\n\nAborting\n');
      return;
    }

    console.log(newFileName + ' written sucessfuly');
  });
};
