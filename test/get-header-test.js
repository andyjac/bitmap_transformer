'use strict';

var getHeader = require('../lib/get-header');
var expect = require('chai').expect;
var data;

describe('getHeader', function () {
  it('should return the header', function () {
    data = new Buffer(54);
    data.write('BM');
    expect(getHeader(data).head).to.eql('BM');
  });
});
