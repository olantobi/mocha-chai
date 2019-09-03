'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

chai.should();

function isEven(num) {
  return num % 2 === 0;
}

describe('unit tests', () => {
  it('should return true when number is even', () => {
    isEven(4).should.be.true;
  })
})