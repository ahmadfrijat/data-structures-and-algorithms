const Node = require('../challenges/linkedList/node.js');
const LinkedList = require('../challenges/linkedList/linked-list.js');


describe('Node Module',()=>{
    it('cheak node',()=>{
        let value = 'Test1 Node';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
});
describe('linked-list Module',()=>{
   
    
    it('insert() method',()=>{
        let value = 'Test2 Node';
        let linkList = new LinkedList;
        linkList.insert(value)
        console.log(linkList)
        
        expect(linkList.head.value).toEqual(value);
        expect(linkList.head.next).toEqual(null);
    })
    it('includes() method',()=>{
        let linkList = new LinkedList;
        let testArray = [ false, 'Test3 Node', 5];
        testArray.forEach(item=>{
           linkList.insert(item);      
    });
        testArray.forEach(element=>{
            expect(linkList.includes(5)).toBeTruthy();
            expect(linkList.includes('hello')).toBeFalsy();
            expect(linkList.includes('Test3 Node')).toBeTruthy();

    });
})
    it('toString() method',()=>{
        let linkList = new LinkedList;
        let testArray = [ false, 'Test3 Node', 5,[]];
        testArray.forEach(item=>{
            linkList.insert(item);      
     });
    //  console.log(linkList.toString())
     expect(linkList.toString()).toEqual('[object Object]')
})
});