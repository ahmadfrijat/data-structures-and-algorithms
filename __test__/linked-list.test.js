const Node = require('../challenges/linkedList/node.js');
const LinkedList = require('../challenges/linkedList/linked-list.js');

describe('Node Module',()=>{
  it('cheak node',()=>{
    let value = 'Test1 Node';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});

// linked-list Module

describe('linked-list Module',()=>{
  it('can successfully instantiate an empty linked list',()=>{
    let linkList = new LinkedList();
    expect(typeof linkList).toBe('object');
    expect(linkList.head).toBeNull();
  });
  it('Can properly insert into the linked list >> insert() method',()=>{
    let value = 'Test2 Node';
    let linkList = new LinkedList;
    linkList.insert(value);
    expect(linkList.head.value).toEqual(value);
    expect(linkList.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list',()=>{
    let value1 = 'VALUE 1';
    let value2 = 'VALUE 2';
    let linkList = new LinkedList;
    linkList.insert(value2);
    linkList.insert(value1);
    expect(linkList.head.value).toEqual(value1);
    expect(linkList.head.next.value).toEqual(value2);
    expect(linkList.head.next.next).toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list',()=>{
    let value1 = 'VALUE 1';
    let value2 = 'VALUE 2';
    let value3 = 'VALUE 3';
    let value4 = 'VALUE 4';
    let linkList = new LinkedList;
    linkList.insert(value4);
    linkList.insert(value3);
    linkList.insert(value2);
    linkList.insert(value1);
    expect(linkList.head.value).toEqual(value1);
    expect(linkList.head.next.value).toEqual(value2);
    expect(linkList.head.next.next.value).toEqual(value3);
    expect(linkList.head.next.next.next.value).toEqual(value4);
    expect(linkList.head.next.next.next.next).toBeNull();
  });
  it('Will return true when finding a value within the linked list that exists',()=>{
    let linkList = new LinkedList;
    let testArray = [ false, 'Test3 Node', 5];
    testArray.forEach(item=>{
      linkList.insert(item);
    });
    expect(linkList.includes(5)).toBeTruthy();
    expect(linkList.includes(false)).toBeTruthy();
    expect(linkList.includes('Test3 Node')).toBeTruthy();

  });
  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let linkList = new LinkedList;
    let testArray = [ false, 'Test3 Node', 5];
    testArray.forEach(item=>{
      linkList.insert(item);
    });
    expect(linkList.includes(15)).toBeFalsy();
    expect(linkList.includes('helloo')).toBeFalsy();
    expect(linkList.includes('Test4 Node')).toBeFalsy();

  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let linkList = new LinkedList;
    let testArray = [ 'My', 'Name', 'Is','Ahmad'];
    testArray.forEach(item=>{
      linkList.insert(item);
    });
    expect(linkList.toString()).toEqual('[object Object]');
  });
});


// linked list insertions

describe('linked list insertions',()=>{
  it('Can successfully add a node to the end of the linked list',()=>{
    let test = 'VALUE 1';
    let linkList = new LinkedList;
    linkList.append(test);
    expect(linkList.head.value).toEqual(test);
    expect(linkList.head.next).toBeNull();
  });
  it('Can successfully add multiple nodes to the end of a linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3','VALUE 4'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    expect(linkList.head.value).toEqual(test[0]);
    expect(linkList.head.next.value).toEqual(test[1]);
    expect(linkList.head.next.next.value).toEqual(test[2]);
    expect(linkList.head.next.next.next.value).toEqual(test[3]);
    expect(linkList.head.next.next.next.next).toBeNull();
  });
  it('Can successfully insert a node before a node located i the middle of a linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    linkList.insertBefore('VALUE 2','VALUE 4');
    expect(linkList.head.value).toEqual(test[0]);
    expect(linkList.head.next.value).toEqual('VALUE 4');
    expect(linkList.head.next.next.value).toEqual(test[1]);
    expect(linkList.head.next.next.next.value).toEqual(test[2]);
    expect(linkList.head.next.next.next.next).toBeNull();
  });
  it('Can successfully insert a node before the first node of a linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    linkList.insertBefore('VALUE 1','VALUE 4');
    expect(linkList.head.value).toEqual('VALUE 1');
    expect(linkList.head.next.value).toEqual(test[1]);
    expect(linkList.head.next.next.value).toEqual(test[2]);
    expect(linkList.head.next.next.next).toBeNull();
  });
  it('Can successfully insert after a node in the middle of the linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    linkList.insertAfter('VALUE 2','VALUE 4');
    expect(linkList.head.value).toEqual(test[0]);
    expect(linkList.head.next.value).toEqual(test[1]);
    expect(linkList.head.next.next.value).toEqual('VALUE 4');
    expect(linkList.head.next.next.next.value).toEqual(test[2]);
    expect(linkList.head.next.next.next.next).toBeNull();
  });
  it('Can successfully insert a node after the last node of the linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    linkList.insertAfter('VALUE 3','VALUE 4');
    expect(linkList.head.value).toEqual(test[0]);
    expect(linkList.head.next.value).toEqual(test[1]);
    expect(linkList.head.next.next.value).toEqual(test[2]);
    expect(linkList.head.next.next.next.value).toEqual('VALUE 4');
    expect(linkList.head.next.next.next.next).toBeNull();
  });

});


// linked-list kth-from-end

describe('linked-list kth-from-end',()=>{
  it('Where k is greater than the length of the linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3','VALUE 4','VALUE 5','VALUE 6','VALUE 7'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    expect(linkList.llkthFromEnd(8)).toEqual('Exception');
  });
  it('Where k and the length of the list are the same',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3','VALUE 4','VALUE 5','VALUE 6','VALUE 7'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    expect(linkList.llkthFromEnd(6)).toEqual('VALUE 1');
  });
  it('Where k is not a positive integer',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3','VALUE 4','VALUE 5','VALUE 6','VALUE 7'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    expect(linkList.llkthFromEnd(-1)).toEqual('Exception');
  });
  it('Where the linked list is of a size 1',()=>{
    let test = ['VALUE 1'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    expect(linkList.llkthFromEnd(0)).toEqual('VALUE 1');
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
    let test = ['VALUE 1','VALUE 2','VALUE 3','VALUE 4','VALUE 5','VALUE 6','VALUE 7'];
    let linkList = new LinkedList;
    test.forEach(element=>{
      linkList.append(element);
    });
    expect(linkList.llkthFromEnd(3)).toEqual('VALUE 4');
  });
});
