'use strict';
const Node = require('../linkedList/node.js');


class LinkedList {
    constructor() {
        this.head = null;

    }
    insert(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
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

    toSrting() {
        let currentNode = this.head;
        let listOfString = [];
        while (currentNode) {
            listOfString.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listOfString.join(' ');
    }
}

module.exports = LinkedList;