module.exports = function BinarySearch(array,numper) {
   for (let i = 0; i < array.length; i++) {
       if (numper===array[i]) {
           return i ;
       }
   }
   return -1 ;
  };