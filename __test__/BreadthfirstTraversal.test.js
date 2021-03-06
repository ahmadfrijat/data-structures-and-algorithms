'use strict';

const BinaryTree = require('../challenges/tree/tree.js');

describe('Breadth first Traversal Tree', ()=>{


  let tree = null;
  beforeAll(()=>{
    let node1 = new BinaryTree.Node(2);
    let node2 = new BinaryTree.Node(7);
    let node3 = new BinaryTree.Node(5);
    let node4 = new BinaryTree.Node(2);
    let node5 = new BinaryTree.Node(6);
    let node6 = new BinaryTree.Node(9);
    let node7 = new BinaryTree.Node(5);
    let node8 = new BinaryTree.Node(11);
    let node9 = new BinaryTree.Node(4);


    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node7;
    node5.right = node8;
    node3.right = node6;
    node6.left = node9;


    tree = new BinaryTree.BinaryTree(node1);
  });
  it('Can successfully traversal as breadth in Binary tree', ()=>{
    expect(tree.breadthfirstTraversal()).toEqual([2,7,5,2,6,9,5,11,4]);
  });

});
