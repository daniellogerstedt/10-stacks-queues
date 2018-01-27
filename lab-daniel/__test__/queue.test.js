'use strict';

const Queue = require('../lib/queue');
const Node = require('../lib/nd');
require('jest');

describe('Queue Module', () => {
  beforeEach(() => this.queue = new Queue());

  describe('#constructor', () => {
    it('Should return an instance of a Queue', () => {
      
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('Should instantiate the Queue with a front of null', () => {
      expect(this.queue.front).toBeNull();
    });
    it('Should instantiate the Queue with a length of zero', () => {
      expect(this.queue.size).toEqual(0);
    });
  });
  describe('#enqueue', () => {
    it('Should add a valid node object to the Queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.front).toBeInstanceOf(Node);
    });
    it('Should add the nodes to the back of the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.front.next.val).toEqual(2);
    });
    it('Should add length to the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.size).toEqual(2);
    });
  });
  describe('#dequeue', () => {
    it('Should return an instance of a desociated Node', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      let desociated = this.queue.dequeue();
      expect(desociated).toBeInstanceOf(Node);
    });
    it('Should move the queue up placing the next Node at front', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.dequeue();
      expect(this.queue.front.val).toEqual(2);
    });
    it('Should remove length from the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(1);
    });
  });
});
