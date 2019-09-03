'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

chai.should();

describe('number tests', () => {
  function isEven(num) {
    return num % 2 === 0;
  }
  
  describe('unit tests', () => {
    it('should return true when number is even', () => {
      isEven(4).should.be.true;
    });
  
    it('should return false when number is odd', () => {
      isEven(5).should.be.false;
    });
  });
  
  function add(num1, num2) {
    return num1 + num2;
  }
  
  describe('add without setup/teardown', () => {
    var num;
  
    beforeEach(() => {
      num = 5;
    })
  
    afterEach(() => {});

    it('should be 10 when adding 5 to 5', () => {
      num = add(num, 5);
      num.should.equal(10);
    });
  
    it('should be 12 when adding 7 to 5', () => {
      num = add(num, 7);
      num.should.equal(12);
    });
  });
});
