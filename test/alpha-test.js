'use strict';

var bitmapper = require('../lib/bitmap');
var expect = require('chai').expect;
var bitmap = {};
var data;

describe('randomTransform', function() {

  before(function(done) {
    bitmapper.readBitmap('../bitmap1.bmp', bitmapper.randomTransform)
  })

  it('should return a value between 0 and 255, inclusive', function() {
    data = new Buffer(11078);
    bitmap.paletteStart = 54;
    bitmap.paletteSize = 256;
    randomTransform(data, bitmap);
    for(var j = 57; j <= bitmap.paletteSize; j += 4) {
      expect(data[j]).to.eql(0);
    }
  });
});
