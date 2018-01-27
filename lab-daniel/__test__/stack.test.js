'use strict';

const Stack = require('../lib/stack');
require('jest');

describe('Stack Module', () => {
  beforeEach(() => this.stack = new Stack());

  describe('#constructor', () => {
    it('should create a valid instance of Stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    it('should have a default val of null assigned to the top property', () => {
      expect(this.stack.top).toBeNull();
    });
    it('should have a size value of 0', () => {
      expect(this.stack.size).toEqual(0);
    });
    it('should have a maxSize of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });
  describe('#push', () => {
    it('Should correctly track stack size', () => {
      [...Array(15)].map((e, i) => this.stack.push(~~(Math.random() * i) + 1));
      expect(this.stack.size).toEqual(15);
    });
    it('Should add a new node with val of 1 to the top of the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toBe(1);
    });
    it('Throw an error when maxSize is exceeded', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.stack.push(~~(Math.random() * i) + 1));
      }).toThrow();
    });
  });
  describe('#pop', () => {
    it('should remove the top most node in the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
      expect(this.stack.pop().val).toEqual(1);
    });
  });
  describe('#peek', () => {
    it('should return the top of the stack', () => {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });
  });
});