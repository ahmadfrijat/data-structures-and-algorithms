const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks.js');



// PseudoQueue tests

describe('PseudoQueue class', () => {

  it('Can successfully enqueue onto a queue', () => {
    const stackWithQueue = new PseudoQueue();
    stackWithQueue.enqueue('ahmad');
    expect(stackWithQueue.firstStack.top.value).toBe('ahmad');
  });
  it('Can successfully enqueue multiple items into a queue', () => {
    const stackWithQueue = new PseudoQueue();
    stackWithQueue.enqueue('ahmad');
    stackWithQueue.enqueue('hussein');
    stackWithQueue.enqueue('alfrijat');
    expect(stackWithQueue.firstStack.top.value).toBe('ahmad');
    expect(stackWithQueue.firstStack.top.next.value).toBe('hussein');
    expect(stackWithQueue.firstStack.top.next.next.value).toBe('alfrijat');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const stackWithQueue = new PseudoQueue();
    stackWithQueue.enqueue('ahmad');
    stackWithQueue.enqueue('hussein');
    stackWithQueue.enqueue('alfrijat');
    stackWithQueue.dequeue();
    stackWithQueue.dequeue();
    stackWithQueue.dequeue();
    expect(stackWithQueue.firstStack.top).toBeNull();
  });
  it('Can successfully dequeue off of a queue the expected value', () => {
    const stackWithQueue = new PseudoQueue();
    stackWithQueue.enqueue('ahmad');
    stackWithQueue.enqueue('hussein');
    expect(stackWithQueue.firstStack.top.value).toBe('ahmad');
    expect(stackWithQueue.firstStack.top.next.value).toBe('hussein');
    expect(stackWithQueue.dequeue()).toBe('ahmad');
  });
  it('Can successfully instantiate an empty pseudoqueue', () => {
    const stackWithQueue = new PseudoQueue();
    expect(stackWithQueue).toBeDefined();
  });

});
