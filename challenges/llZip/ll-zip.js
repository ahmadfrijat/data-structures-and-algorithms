function zipLists ( list1, list2 ) {

    if ( !list1.head && !list2.head ) {
      return null;
    } else if ( !list1.head ) {
      return list2;
    } else if ( !list2.head ) {
      return list1;
    }
  
    let currentNode = null;
    let currentAnchor = list1.head;
    let addAnchor = list2.head;
  
    while( currentAnchor && addAnchor ){
  
      currentNode = currentAnchor;
      currentAnchor = currentAnchor.next;
      currentNode.next = addAnchor;
  
      let swap = currentAnchor;
      currentAnchor = addAnchor;
      addAnchor = swap;
  
    }
  
    return list1;
  
  }
  
  module.exports = zipLists;