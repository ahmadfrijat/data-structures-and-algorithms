const leftJoin = require('../left-join.js');
let HashTable = require('../../hashtable/hashtable.js');

describe('Left Join',()=>{

  it('can Successfully return an array of arraies for common vlaues between tow hashMap structure.',()=>{
    let hashTable1 = new HashTable(90);
    let hashTable2 = new HashTable(90);

    hashTable2.add('ahmad','hussein');
    hashTable1.add('ahmad','hussein');
    expect(leftJoin(hashTable1,hashTable2)).toEqual([["ahmad", "hussein","hussein"]]);

  });

  it('can Successfully return an array of arraies for common vlaues between tow hashMap structure.',()=>{
    let hashTable1 = new HashTable(90);
    let hashTable2 = new HashTable(90);

    hashTable1.add('ahmad','test');
    hashTable1.add('ahmad','test5');
    hashTable2.add('ahmad','test2');
    hashTable2.add('test3','test4');
    expect(leftJoin(hashTable1,hashTable2)).toEqual([["ahmad","test2","test5",]]);

  });
  it('can Successfully return a null for a vlaue that does not exist in the another hashMap',()=>{
    let hashTable1 = new HashTable(90);
    let hashTable2 = new HashTable(90);

    hashTable2.add('ahmad','test2');
    hashTable1.add('ahmad','test5');
    expect(leftJoin(hashTable1,hashTable2)).toEqual([["ahmad","test2","test5"]]);

  });

});
