
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
}


// PseudoQueue class

class PseudoQueue {
    constructor() {
        this.firstStack = new Stack();
        this.secoundStack = new Stack();
    }

    // enqueue ()
    enqueue(value) {


        while (this.firstStack.top) {

            this.secoundStack.push(this.firstStack.pop());
        }
        this.firstStack.push(value);

        while (this.secoundStack.top) {

            this.firstStack.push(this.secoundStack.pop());
        }
    }
    // dequeue()
    dequeue() {

        if (this.firstStack.top) {

            return this.firstStack.pop();

        }
        return null;
    }
}

module.exports = PseudoQueue;
