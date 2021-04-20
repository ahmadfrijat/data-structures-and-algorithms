const BinaryTree = require('../challenges/tree/tree.js');
const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree.js');
describe('Binary Tree', ()=>{
  let tree = null;
  beforeAll(()=>{
    let node1 = new BinaryTree.Node(1);
    let node2 = new BinaryTree.Node(12);
    let node3 = new BinaryTree.Node(10);
    let node4 = new BinaryTree.Node(30);
    let node5 = new BinaryTree.Node(7);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node3.right = node5;

    tree = new BinaryTree.BinaryTree(node1);
  });
  it('If the value is divisible by 3, replace the value with “Fizz”',() => {
    expect(fizzBuzzTree(tree).root.left.value).toEqual('Fizz');
  });

  it('If the value is divisible by 5, replace the value with “Buzz”',() => {
    expect(fizzBuzzTree(tree).root.right.value).toEqual('Buzz');
  });
  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”',() => {
    expect(fizzBuzzTree(tree).root.left.left.value).toEqual('FizzBuzz');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String',() => {
    expect(fizzBuzzTree(tree).root.value).toEqual('1');
    expect(fizzBuzzTree(tree).root.right.right.value).toEqual('7');
  });
});
