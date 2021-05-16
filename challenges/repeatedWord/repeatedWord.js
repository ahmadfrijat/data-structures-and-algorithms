'use strict';
let HashTable = require('../hashtable/hashtable.js');


function repeatedWord(string) {

  let hashTable = new HashTable(90);
  let newArr = string.split(' ');

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i].includes(',')){
      newArr[i] = newArr[i].slice(0, newArr[i].length - 1);

    }
    if (hashTable.contain(newArr[i])) {
      return newArr[i];

    }

    hashTable.add(newArr[i],newArr[i]);
  }
}


module.exports = repeatedWord;

// class Node {
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }


// // LinkedList
// class LinkedList {
//   constructor(){
//     this.head = null;
//   }
//   add(value){
//     let node = new Node(value);
//     if (!this.head){
//       this.head = node;
//     }
//     else{
//       node.next = this.head;
//       this.head = node;
//     }
//   }
//   values() {
//     let values = [];
//     let current = this.head;
//     while (current) {
//       values.push(current.value);
//       current = current.next;
//     }
//     return values;
//   }
// }


// // HashTable code

// class HashTable {
//   constructor(size){
//     this.table = new Array(size);
//   }


//   add(key, value){

//     let hashed = this.hash(key);
//     if (!this.table[hashed]) {

//       let newLL = new LinkedList();
//       newLL.add({key,value});
//       this.table[hashed] = newLL;

//     }else{

//       this.table[hashed].add({key, value});
//     }
//   }
//   get(key){

//     for(let i = 0; i <= this.table.length;i++){

//       let nData = this.table[i].head.data;
//       if (this.table[i] && nData.key === key){
//         //returns the value from the table
//         return nData.value;
//       }
//     }
//     return 'Not exist';
//   }
//   contain(key){
//     for(let i = 0; i <= this.table.length;i++){

//       if (this.table[i] && this.table[i].head.data.key === key){
//         //returns a boolean
//         return true;
//       }
//     }
//     return null;
//   }
//   hash(key){
//     let hashSum = 0;
//     for (let i = 0; i < key.length; i++) {

//       hashSum = hashSum + key[i].charCodeAt(0);
//     }
//     return hashSum * 599 % this.table.length;
//   }

//   repeatedWord(string){
  //   let newArr = string.split(' ');

  //   for (let i = 0; i < newArr.length; i++) {

  //     if (newArr[i].includes(',')){
  //       newArr[i] = newArr[i].slice(0, newArr[i].length - 1);

  //     }
  //     if (this.contain(newArr[i])) {
  //       return newArr[i];

  //     }

  //     this.add(newArr[i],newArr[i]);
  //   }
  // }
// }

// module.exports = HashTable;
