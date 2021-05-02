function SelectionSort(newArr){
    let n = newArr.length;
    for(let i = 0; i < n - 1; i++){
      let min = i;
      for(let j = i + 1; j < n; j++){
        if (newArr[j] < newArr[min]){
            min = j;
        }

      }
      let temp = newArr[min];
      newArr[min] = newArr[i];
      newArr[i] = temp;
    }
    return newArr;
  }
  
  module.exports = SelectionSort;