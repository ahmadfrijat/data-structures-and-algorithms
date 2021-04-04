'use strict';
const Node = require('../linkedList/node.js');


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
      }
    
      insert(data) {
        this.head = new Node(data, this.head);
        this.length++;
      }
      includes(data) {
        let current = this.head;
    
        while (current) {
          if (current.head === data) return true;
          current = current.next;
        }
        return false;
      }
      append(data) {
        let node = new Node(data);
        let current;
    
        if (!this.head) {
          this.head = node;
        } else {
          current = this.head;
    
          while (current.next) {
            current = current.next;
          }
          current.next = node;
        }
    
        this.length++;
      }
      insertBefore(data, newData) {
        if (!data) return;
        let node = new Node(newData);
        let current, previous;
    
        if (!this.head) {
          this.head = node;
        } else {
          current = this.head;
    
          while (current.head !== data) {
            previous = current;
            current = current.next;
          }
    
          if (current === this.head) {
            previous = current;
            node.next = previous;
            this.head = node;
          } else {
            node.next = current;
            previous.next = node;
          }
        }
    
        this.size++;
      }
      insertAfter(data, newData) {
        if (!data) return;
        let node = new Node(newData);
        let current, previous;
    
        if (!this.head) {
          this.head = node;
        } else {
          current = this.head;
    
          while (current.head !== data) {
            previous = current;
            current = current.next;
          }
    
          if (current === this.head) {
            previous = current;
            current = current.next;
            node.next = current;
            previous.next = node;
          } else {
            previous = current;
            current = current.next;
            node.next = current;
            previous.next = node;
          }
        }
    
        this.length++;
      }
      toString() {
        let current = this.head;
        let list;
    
        while (current) {
          if (!list) {
            list = current.head;
            current = current.next;
          } else {
            list += ` -> ${current.head}`;
            current = current.next;
          }
        }
    
        list += ` -> ${current}`;
        return list;
      }
}

module.exports = LinkedList;