'use strict';

var blueTint = require('../lib/transforms').blueTint;
var expect = require('chai').expect;
var fs = require('fs');

describe('blueTint', function() {
  var bitmap;
  var colorPalette = new Buffer(1024);
  var header = {
    paletteSize: 256,
    paletteStart: 0
  };

  before(function(done) {
    fs.readFile('./bitmap1.bmp', function(err, data) {
      bitmap = data;
      data.copy(colorPalette, 0, 54, 1078);
      done();
    });
  });

  it('should change only every fourth value', function() {
    blueTint(colorPalette, header);

    for(var k = 0; k < 1024; k += 4) {
      if ((bitmap[k + 54] + 250) > 255) {
      expect(colorPalette[k]).to.eql(255);
      } else {
      expect(colorPalette[k]).to.eql((bitmap[k + 54] + 250));
      }
    }
  });
});
