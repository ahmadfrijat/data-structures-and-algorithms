let HashTable = require('../hashtable/hashtable.js');


function tree_intersection(tree1, tree2){
  let results = [];

  // Root - Left - Right tree
  const _traverse = node =>{
    results.push(node.value);
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  };
  _traverse(tree1.root);
  _traverse(tree2.root);

  let hashTable = new HashTable(90);

  for (let i = 0; i < results.length; i++) {

    hashTable.add(`${results[i]}`,results[i]);

  }
  let arr = [];

  for (let i = 0; i < hashTable.table.length; i++) {

    if ( hashTable.table[i] && hashTable.table[i].head.next){

      arr.push( hashTable.table[i].head.data.value);

    }
  }
  return arr;
}
module.exports = tree_intersection;
