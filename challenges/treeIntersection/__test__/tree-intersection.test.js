const tree_intersection = require('../tree-intersection.js');
const BinaryTree = require('../../tree/tree.js');

describe('Tree Intersection Module',()=>{
  let one = new BinaryTree.Node(100);
  let tow = new BinaryTree.Node(150);
  let three = new BinaryTree.Node(200);
  let four = new BinaryTree.Node(250);
  let five = new BinaryTree.Node(100);
  let six = new BinaryTree.Node(150);
  let seven = new BinaryTree.Node(200);
  let eight = new BinaryTree.Node(300);

  one.left = tow;
  one.right = three;
  tow.left = four;
  five.right = six;
  five.left = seven;
  six.left = eight;

  let tree1 = new BinaryTree.BinaryTree(one);
  let tree2 = new BinaryTree.BinaryTree(five);
  //   console.log('-----------tree1---------',tree1);
  //   console.log('-----------tree2---------',tree2);

  it('Can successfully return a set of values found in both trees.',()=>{
    expect(tree_intersection(tree1,tree2)).toEqual([100,150,200]);
  });

  it('Can successfully return a set of values found in both trees.',()=>{
    expect(typeof tree_intersection(tree2,tree1)).toEqual('object');
  });
});
