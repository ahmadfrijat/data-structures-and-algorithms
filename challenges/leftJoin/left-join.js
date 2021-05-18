'use strict';

function leftJoins(hashTable1, hashTable2) {

    for (let i = 0; i < hashTable2.table.length; i++) {

        if (hashTable2.table[i] && hashTable1.contain(hashTable2.table[i].head.data.key)) {

            hashTable1.add(hashTable2.table[i].head.data.key, hashTable2.table[i].head.data.value);
        }
    }
    let results = [];

    for (let i = 0; i < hashTable1.table.length; i++) {

        if (hashTable1.table[i]) {

            if (!hashTable1.table[i].head.next) {

                results.push([hashTable1.table[i].head.data.key, hashTable1.table[i].head.data.value, hashTable1.table[i].head.next]);
            }
            else {
                results.push([hashTable1.table[i].head.data.key, hashTable1.table[i].head.data.value, hashTable1.table[i].head.next.data.value]);
            }
        }
    }
    return results;
}
module.exports = leftJoins;
