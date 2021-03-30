module.exports = function insertShiftArray(arr,n) {
  var newArr = [];

  let mid =Math.ceil(arr.length/2);


  for (let i = 0; i < arr.length+1; i++) {
    if (i < mid) {
      newArr[i] = arr[i];
    }
    if (i === mid) {
      newArr[i] = n;
    }
    else if(i > mid){
      newArr[i] = arr[i-1];
    }
  }
  return newArr;
};
