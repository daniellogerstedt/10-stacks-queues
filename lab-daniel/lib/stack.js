'use strict';

let Nd = require('./nd');

module.exports = class {
  constructor(maxSize=1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
    return this; // BigO: O(1) Normal Operation (all cases)
  }

  push(val) {
    if (this.size === this.maxSize) throw new Error('Exceeded Maximum Stack Size'); // BigO: O(1) Invalid Operation (all cases)
    let node = new Nd(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this; // BigO: O(1) Normal Operation (all cases)
  }

  pop() {
    let item = this.top;
    this.top = item.next;
    item.next = null;
    this.size--;
    return item; // BigO: O(1) Normal Operation (all cases)
  }

  peek() {
    return this.top; // BigO: O(1) Normal Operation (all cases)
  }
};