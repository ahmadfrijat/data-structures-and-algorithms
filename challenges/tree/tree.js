'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}




// BinaryTree
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    // Root = Left - Right
    preOrder() {
        const results = [];
        const _traverse = (node) => {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }

    // Left - Root - Right
    inOrder() {
        const results = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            results.push(node.value);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }
    // left - Right - Root
    postOrder() {
        const results = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            results.push(node.value);
        };
        _traverse(this.root);
        return results;
    }
    //find_maximum_value
    find_maximum_value() {
        let store = this.inOrder();
        let maxValue = 0;
        for (let i = 0; i < store.length; i++) {
            if (store[i] > maxValue) {
                maxValue = store[i];
            }
        }
        return maxValue;
    }
     // breadthfirstTraversal
    breadthfirstTraversal(){

        let traverse = [];
        let store = [];


        if(this.root !== null){
          traverse.push(this.root);

          while(traverse.length > 0){
            let newNode = traverse.shift();
            store.push(newNode.value);

            if(newNode.left !== null){
              traverse.push(newNode.left);
            }
            if(newNode.right !== null){
              traverse.push(newNode.right);
            }
          }
          return store;
        }else{
          return null;
        } 
    }



}




// BinarySearchTree
class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    add(value) {
        let newNode = this.root;
        if (!newNode) {
            this.root = new Node(value);
            return;
        }

        while (newNode) {
            if (!newNode.left) {
                newNode.left = new Node(value);
                break;
            }
            newNode = newNode.left;

            if (!newNode.right) {
                newNode.right = new Node(value);
                break;
            }
            newNode = newNode.right;
        }
    }

    contains(value) {
        let curr = this.root;
        if (curr.value === value) {
            return true;
        }
        if (curr.value > value && curr.left) {
            curr = curr.left;
        }
        if (curr.value < value && curr.right) {
            curr = curr.right;
        }
        return false;
    }
}

module.exports = { BinaryTree, Node, BinarySearchTree };
