const LinkedList = require('../challenges/linkedList/linked-list.js');
const llZip = require('../challenges/llZip/ll-zip.js');



describe('Zip the two linked lists together into one', () => {

  function setup ( array, list ) {
    array.forEach( value => list.insert( value ) );
  }

  function testIt ( list1, list2, answer ) {
    expect( llZip( list1, list2 ).show() ).toEqual( answer );
  }

  test('if list 1 equal list 2', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let array1 = [ 2,3,1 ];
    let array2 = [ 4,9,5 ];
    let answer = '1 5 3 9 2 4';

    setup(array1, list1);
    setup(array2, list2);

    testIt( list1, list2, answer );

  });

  test('if List 2 is larger', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let array1 = [ 3,1 ];
    let array2 = [ 4,9,5 ];
    let answer = '1 5 3 9 4';

    setup(array1, list1);
    setup(array2, list2);

    testIt( list1, list2, answer );

  });

  test('if list 1 is larger', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let array1 = [ 2,3,1 ];
    let array2 = [ 9,5 ];
    let answer = '1 5 3 9 2';

    setup(array1, list1);
    setup(array2, list2);

    testIt( list1, list2, answer );

  });

});
