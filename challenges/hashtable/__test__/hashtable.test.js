'use strict';

const HashTable = require('../hashtable.js');

describe('Hash Table',()=>{
  it('can Successfully Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let hashtable = new HashTable(50);
    hashtable.add('firstName','ahmad');
    hashtable.table.forEach(val=>{
      let value = val.head.data;
      expect(value.key).toEqual('firstName');
      expect(value.value).toEqual('ahmad');
    });

  });
  it('can Successfully Retrieving based on a key returns the value stored',()=>{
    let hashtable = new HashTable(50);
    hashtable.add('ahmad',1997);
    hashtable.table.forEach(val=>{
      let value = val.head.data;
      expect(value.key).toEqual('ahmad');
      expect(value.value).toEqual(1997);
    });
  });
  it('can Successfully returns null for a key that does not exist in the hashtable',()=>{
    let hashtable = new HashTable(50);
    hashtable.add('firstName','ahmad');
    expect(hashtable.contain('hussein')).toBeNull();
  });
  it('can Successfully handle a collision within the hashtable',()=>{
    let hashtable = new HashTable(50);
    hashtable.add('listen','ahmad');
    hashtable.add('silent','hello');
    let hashed = hashtable.hash('listen');
    let hash = hashtable.table[hashed].head;
    expect(hash.data.key).toBeDefined();
    expect(hash.data.value).toBeDefined();
    expect(hash.next.data.key).toBeDefined();
    expect(hash.next.data.value).toBeDefined();
  });
  it('can Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new HashTable(50);
    hashtable.add('listen','ahmad');
    hashtable.add('silent','hello');
    let hashed = hashtable.hash('listen');
    let hash = hashtable.table[hashed].head;
    expect(hash.data.key).toEqual('silent');
    expect(hash.data.value).toEqual('hello');
    expect(hash.next.data.key).toEqual('listen');
    expect(hash.next.data.value).toEqual('ahmad');
  });
  it('can Successfully hash a key to an in-range value',()=>{
    let hashtable = new HashTable(50);
    hashtable.add('listen','ahmad');
    hashtable.add('silent','hello');
    let hashed = hashtable.hash('listen');
    expect(typeof hashed).toBe('number');
  });

});
