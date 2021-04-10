
// Node class

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// stack class

class Stack {
    constructor() {
        this.top = null;
    }
    push(value) {
        var node = new Node(value);
        node.next = this.top;
        this.top = node;
    }
    pop() {
        if (this.top !== null) {
            var topValue = this.top.value;
            this.top = this.top.next;
            return topValue;
        }
        return null;
    }
    peek() {
        if (this.top) {
            return this.top.value;
        }
        return null;
    }
    isEmpty() {
        return this.top === 0;
    }

}

// Queue class

class Queue {
    constructor() {
        this.back = null;
        this.front = null;
    }
    enqueue(value) {
        const node = new Node(value);

        node.next = this.back;

        this.back = node;

        if (!this.front) {
            this.front = node;
        }
    }
    dequeue() {

        if (!this.back) {

            return null;

        }

        if (!this.back.next) {
            let curr = this.back;
            this.back = null;
            this.front = null;
            return curr.value;

        }
        while (this.back.next && this.back.next.next) {

            this.back = this.back.next;

        }
        let curr2 = this.back.next;

        this.back.next = null;
        this.front = this.back;

        return curr2.value;
    }
    peek() {
        if (!this.front) {
            return null;
        }
        if (this.front) {
            return this.front.value;
        }
    }
    isEmpty() {
        return this.front === null;
    }
}


module.exports = { Node, Stack, Queue };
