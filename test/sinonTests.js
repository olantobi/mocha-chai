'use strict';
// jshint expr:true
const sinon = require('sinon');
var chai = require('chai'),
  expect = chai.expect;
chai.should();

var student;
var schedule;

beforeEach(() => {
  student = {
    dropClass: (classId, cb) => {
      // do stuff
      if (!!cb.dropClass) {
        cb.dropClass();
      } else {
        cb();
      }      
    },
    addClass: (schedule) => {
      if (!schedule.classIsFull()) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  schedule = {
    dropClass: () => {
      console.log('Class dropped');
    },
    classIsFull: function() {
      return true;
    }
  }
});

describe('sinon tests', () => {  

  describe('student.dropClass', () => {
    it('should call the callback', () => {
      let spy = sinon.spy();

      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it('should call the callback and log to console', () => {
      function onClassDropped() {
        console.log('onClassDropped was called');
      }

      let spy = sinon.spy(onClassDropped);

      student.dropClass(1, spy);
      spy.called.should.be.true;
    });  
  });

  describe('Student with stubs', () => {
    it('should call a student method', () => {
      var stub = sinon.stub(schedule);

      student.dropClass(1, stub);
      stub.dropClass.called.should.be.true;
    });

    it('should return true when the class is not full', () => {
      let stub = sinon.stub(schedule);
      stub.classIsFull.returns(false);
      
      let returnVal = student.addClass(stub);
      returnVal.should.be.true;
    });    
  })

  describe('student with mocks', () => {
    it('mocks schedule', () => {
      let mockObj = sinon.mock(schedule);
      let expectation = mockObj.expects('classIsFull').once();

      student.addClass(schedule);
    })
  })
});