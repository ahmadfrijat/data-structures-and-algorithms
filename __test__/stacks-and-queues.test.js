'use strict';

const { Stack, Queue } = require('../challenges/stacksAndQueues/stacks-and-queues.js');


//Stack testes
describe('Stack', () => {

  it('Can successfully push onto a stack', () => {
    const newStack = new Stack();
    newStack.push('ahmad');
    expect(newStack.top.value).toBe('ahmad');
  });
  it('Can successfully push multiple values onto a stack', () => {
    const newStack = new Stack();
    newStack.push('ahmad');
    newStack.push('hussein');
    newStack.push('alfrijat');
    expect(newStack.top.value).toBe('alfrijat');
    expect(newStack.top.next.value).toBe('hussein');
    expect(newStack.top.next.next.value).toBe('ahmad');
  });
  it('Can successfully pop off the stack', () => {
    const newStack = new Stack();
    newStack.push('ahmad');
    newStack.push('hussein');
    newStack.push('alfrijat');
    expect(newStack.top.value).toBe('alfrijat');
    newStack.pop();
    expect(newStack.top.value).toBe('hussein');
  });
  it('Can successfully empty a stack after multiple pops', () => {
    const newStack = new Stack();
    newStack.push('ahmad');
    newStack.push('hussein');
    newStack.push('alfrijat');
    expect(newStack.top.value).toBe('alfrijat');
    newStack.pop();
    expect(newStack.top.value).toBe('hussein');
    newStack.pop();
    expect(newStack.top.value).toBe('ahmad');
    newStack.pop();
    expect(newStack.top).toBeNull();
  });
  it('Can successfully peek the next item on the stack.', () => {
    const newStack = new Stack();
    newStack.push('ahmad');
    expect(newStack.peek()).toBe('ahmad');
  });
  it('Can successfully instantiate an empty stack', () => {
    const newStack = new Stack();
    expect(newStack).toBeDefined();
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    const newStack = new Stack();
    newStack.pop();
    newStack.peek();
    expect(newStack.top).toBeNull();
  });
});


//Queue testes

describe('Queue', () => {
   
    it('Can successfully enqueue onto a queue', () => {
      const newQueue = new Queue();
      newQueue.enqueue('ahmad');
      expect(newQueue.back.value).toBe('ahmad');
    });
    it('Can successfully enqueue multiple values into a queue', () => {
      const newQueue = new Queue();
      newQueue.enqueue('ahmad');
      expect(newQueue.back.value).toBe('ahmad');
      newQueue.enqueue('hussein');
      expect(newQueue.back.value).toBe('hussein');
      newQueue.enqueue('alfrijat');
      expect(newQueue.back.value).toBe('alfrijat');
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
      const newQueue = new Queue();
      newQueue.enqueue('ahmad');
      expect(newQueue.back.value).toBe('ahmad');
      newQueue.enqueue('hussein');
      expect(newQueue.back.value).toBe('hussein');
      expect(newQueue.front.value).toBe('ahmad');
      newQueue.dequeue();
      expect(newQueue.front.value).toBe('hussein');
    });
    it('Can successfully peek into a queue, seeing the expected value', () => {
      const newQueue = new Queue();
      newQueue.enqueue('ahmad');
      expect(newQueue.back.value).toBe('ahmad');
      expect(newQueue.peek()).toBe('ahmad');
      newQueue.enqueue('hussein');
      expect(newQueue.back.value).toBe('hussein');
      expect(newQueue.peek()).toBe('ahmad');
      newQueue.enqueue('abid');
      expect(newQueue.back.value).toBe('abid');
      expect(newQueue.peek()).toBe('ahmad');
      newQueue.enqueue('alfrijat');
      expect(newQueue.back.value).toBe('alfrijat');
      expect(newQueue.peek()).toBe('ahmad');
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
      const newQueue = new Queue();
      newQueue.enqueue('ahmad');
      newQueue.enqueue('hussein');
      newQueue.enqueue('abid');
      newQueue.enqueue('alfrijat');
      newQueue.dequeue();
      newQueue.dequeue();
      newQueue.dequeue();
      newQueue.dequeue();
      expect(newQueue.back).toBeNull();
      expect(newQueue.peek()).toBeNull();
    });
    it('Can successfully instantiate an empty queue', () => {
        const newQueue = new Queue();
        expect(newQueue).toBeDefined();
      });
      it('Calling dequeue or peek on empty queue raises exception', () => {
        const newQueue = new Queue();
        newQueue.dequeue();
        newQueue.peek();
        expect(newQueue.front).toBeNull();
      });
  });