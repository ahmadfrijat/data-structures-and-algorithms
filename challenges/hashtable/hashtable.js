'use strict';

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}


// LinkedList
class LinkedList {
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);
    if (!this.head){
      this.head = node;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}


// HashTable code

class HashTable {
  constructor(size){
    this.table = new Array(size);
  }


  add(key, value){

    let hashed = this.hash(key);
    if (!this.table[hashed]) {

      let newLL = new LinkedList();
      newLL.add({key,value});
      this.table[hashed] = newLL;

    }else{

      this.table[hashed].add({key, value});
    }
  }
  get(key){

    for(let i = 0; i <= this.table.length;i++){

      let nData = this.table[i].head.data;
      if (this.table[i] && nData.key === key){
        //returns the value from the table
        return nData.value;
      }
    }
    return 'Not exist';
  }
  contain(key){
    for(let i = 0; i <= this.table.length;i++){

      if (this.table[i] && this.table[i].head.data.key === key){
        //returns a boolean
        return true;
      }
    }
    return null;
  }
  hash(key){
    let hashSum = 0;
    for (let i = 0; i < key.length; i++) {

      hashSum = hashSum + key[i].charCodeAt(0);
    }
    return hashSum * 599 % this.table.length;
  }
}

module.exports = HashTable;
