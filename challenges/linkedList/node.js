'use stricts';

class Node {
  constructor(data, next = null) {
    this.head = data;
    this.next = next;
  }
}

module.exports = Node;