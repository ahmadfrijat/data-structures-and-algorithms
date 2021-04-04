const Node = require('../challenges/linkedList/node.js');
const LinkedList = require('../challenges/linkedList/linked-list.js');

describe("testing the linked list", () => {
    test("init node class", () => {
      let node = new Node(10);
      expect(node.head).toEqual(10);
      expect(node.next).toEqual(null);
    });
  
    test("linked-list Module", () => {
      let ll = new LinkedList();
      ll.insert(5);
      expect(ll.head.head).toEqual(5);
    });
  
    test(" head property will point to the first node in the linked list", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.insert(10);
      expect(ll.head.next.head).toEqual(5);
    });
  
    test(" insert multiple nodes into the linked list", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.insert(10);
      ll.insert(20);
      expect(ll.head.next.next.head).toEqual(5);
    });
  
    test("return true when finding a value within the linked list that exists", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.insert(10);
      expect(ll.includes(5)).toBeTruthy();
    });
  
    test("return false when searching for a value in the linked list that does not exist", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.insert(10);
      expect(ll.includes(20)).toBeFalsy();
    });
  
    test("return a collection of all the values that exist in the linked list", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.insert(10);
      expect(ll.toString()).toEqual("10 -> 5 -> null");
    });
  
    test("insert at the end of linked list", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.append(10);
      expect(ll.head.next.head).toEqual(10);
    });
  
    test("insert value before specific value at the  linked list", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.append(10);
      ll.insertBefore(5, 7);
      expect(ll.head.head).toEqual(7);
    });
  
    test("insert value after specific value at the  linked list", () => {
      let ll = new LinkedList();
      ll.insert(5);
      ll.append(10);
      ll.insertAfter(5, 7);
      expect(ll.head.next.head).toEqual(7);
    });
  });
