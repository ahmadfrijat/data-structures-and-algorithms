'use strict';
const Node = require('../linkedList/node.js');


class LinkedList {
  constructor() {
    this.head = null;
  }
  // insert() method
  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  // includes() method
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  // toSrting() method
  toSrting() {
    let currentNode = this.head;
    let listOfString;
    while (currentNode) {
      listOfString.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listOfString.join(' ');
  }
  // append() method
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
    return this;
  }
  // insertBefore() method
  insertBefore(value, newVal) {
    if (!this.head) {
      this.head = new Node(newVal);
    } else {
      let currentNode = this.head;
      let afterNode = null;
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          afterNode = currentNode.next;
          let newNode = new Node(newVal);
          newNode.next = afterNode;
          currentNode.next = newNode;
          return;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }
  // insertAfter() method
  insertAfter(value, newVal) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    let currentNode = this.head;
    let afterNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        afterNode = currentNode.next;
        let newNode = new Node(newVal);
        newNode.next = afterNode;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
    return this;
  }
  // llkthFromEnd() method
  llkthFromEnd(k) {
    let counter = this.head;
    let nodeContent = null;
    let nodeContentExist = false;
    let countdown = k;

    if (k < 0) return 'Exception';

    while (counter) {
      if (countdown === 0) {
        countdown--;
        nodeContent = this.head;
        nodeContentExist = true;
      }
      if (nodeContentExist && counter.next !== null) {
        counter = counter.next;
        nodeContent = nodeContent.next;
      } else {
        counter = counter.next;
      }

      if (countdown > 0) countdown--;
    }
    return nodeContentExist ? nodeContent.value : 'Exception';
  }
}

module.exports = LinkedList;
