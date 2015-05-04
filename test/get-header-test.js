'use strict';

var readBitmap = require('../lib/read-bitmap').readBitmap;
var getHeader = require('../lib/get-header');
var expect = require('chai').expect;
var fs = require('fs');

describe('getHeader', function () {
  var bitmap;

  before(function(done) {
    fs.readFile('./bitmap1.bmp', function(err, data) {
      bitmap = data;
      done();
    });
  });

  it('should return the header', function() {
    expect(getHeader(bitmap)).to.eql({
      head: 'BM',
      pixelArrayStart: 1078,
      paletteStart: 54,
      paletteSize: 256
    });
  });
});
