'use strict';

var blueTint = require('../lib/transforms').blueTint;
var randomize = require('../lib/transforms').randomize;
var expect = require('chai').expect;
var fs = require('fs');

describe('transforms', function() {
  var bitmap;
  var colorPalette = new Buffer(1024);
  var header = {
    paletteSize: 256,
    paletteStart: 0
  };

  beforeEach(function(done) {
    fs.readFile('./bitmap1.bmp', function(err, data) {
      bitmap = data;
      data.copy(colorPalette, 0, 54, 1078);
      done();
    });
  });

  it('should increase blue values by 30', function() {
    blueTint(colorPalette, header, 30);

    for(var i = 0; i < 1024; i += 4) {
      if ((bitmap[i + 54] + 30) > 255) {
        expect(colorPalette[i]).to.eql(255);
      } else {
        expect(colorPalette[i]).to.eql((bitmap[i + 54] + 30));
      }
    }
  });

  it('should increase blue values by 30', function() {
    blueTint(colorPalette, header, -30);

    for(var i = 0; i < 1024; i += 4) {
      if ((bitmap[i + 54] + 30) > 255) {
        expect(colorPalette[i]).to.eql(255);
      } else {
        expect(colorPalette[i]).to.eql((bitmap[i + 54] + 30));
      }
    }
  });

  it('should increase blue values by 0', function() {
    blueTint(colorPalette, header);

    for(var i = 0; i < 1024; i += 4) {
      expect(colorPalette[i]).to.eql((bitmap[i + 54]));
    }
  });

  it('should increase blue values by 255', function() {
    blueTint(colorPalette, header, 1000);

    for(var i = 0; i < 1024; i += 4) {
      expect(colorPalette[i]).to.eql(255);
    }
  });

  it('should have a value between 0 and 255', function() {
    randomize(colorPalette, header);

    for(var i = 0; i < 1024; i ++) {
      expect(colorPalette[i]).to.be.within(0, 255);
    }
  });
});
