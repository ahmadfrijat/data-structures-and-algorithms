'use strict';
const BinaryTree = require('../challenges/tree/tree.js');





describe('Binary Tree', ()=>{
    let tree = null;
    beforeAll(()=>{
      let one = new BinaryTree.Node(1);
      let two = new BinaryTree.Node(2);
      let three = new BinaryTree.Node(3);
      let four = new BinaryTree.Node(4);
      let five = new BinaryTree.Node(5);
      let six = new BinaryTree.Node(6);
      let seven = new BinaryTree.Node(7);
      let eight = new BinaryTree.Node(8);
      one.left = two;
      one.right = three;
      two.left = four;
      four.right = six;
      three.right = five;
      five.left = seven;
      five.right = eight;
      tree = new BinaryTree.BinaryTree(one);
    });
    it('Can successfully instantiate an empty tree',()=>{
      let newTree = new BinaryTree.BinaryTree();
      expect(newTree).toBeDefined();
      expect(newTree.root).toBeNull();
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        const one = new BinaryTree.Node(1);
        const tree = new BinaryTree.BinaryTree(one);
        expect(tree.root.value).toBe(1);
      });
    it('Can successfully add a left child and right child to a single root node',() => {
      let one = new BinaryTree.Node(1);
      let two = new BinaryTree.Node(2);
      let three = new BinaryTree.Node(3);
      one.left = two;
      one.right = three;
      let newTree = new BinaryTree.BinaryTree(one);
      expect(newTree.root.value).toEqual(1);
      expect(newTree.root.left.value).toBe(2);
      expect(newTree.root.right.value).toBe(3);
    });
    it('Can successfully return a collection from a preorder() traversal',() => {
      let test = [1, 2, 4, 6, 3, 5, 7, 8 ];
      expect(tree.preOrder()).toEqual(test);
      expect(Array.isArray(tree.preOrder())).toBeTruthy();
    });
    it('Can successfully return a collection from an inorder() traversal',() => {
      let test = [ 4, 6, 2, 1, 3, 7, 5, 8 ];
      expect(tree.inOrder()).toEqual(test);
      expect(Array.isArray(tree.inOrder())).toBeTruthy();
    });
    it('Can successfully return a collection from a postorder() traversal',() => {
      let test = [ 6, 4, 2, 7, 8, 5, 3, 1 ];
      expect(tree.postOrder()).toEqual(test);
      expect(Array.isArray(tree.postOrder())).toBeTruthy();
    });
  });


