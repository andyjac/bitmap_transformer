var fs = require('fs');

module.exports = function writeBitmap(data, newFileName) {
  newFileName += '.bmp';

  fs.writeFile(newFileName, data, function(err) {
    if (err) throw new Error(err);

    console.log('File ' + "'" + newFileName + "'" + ' written sucessfuly');
  });
};
