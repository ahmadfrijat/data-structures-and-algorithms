const quickSort = require('../quick-sort.js');


describe('QuickSort Module', ()=>{
  it('Should return a sorted array if the input is Reverse-sorted',()=>{
    let arr = [20,18,12,8,5,-2];
    expect(quickSort(arr,0,arr.length - 1)).toEqual([-2,5,8,12,18,20]);
  });
  it('Should return a sorted array if the input is Few uniques',()=>{
    let arr = [5,12,7,5,5,7];

    expect(quickSort(arr,0,arr.length - 1)).toEqual([5,5,5,7,7,12]);

  });
  it('Should return a sorted array if the input is Nearly-sorted',()=>{
    let arr = [2,3,5,7,13,11];

    expect(quickSort(arr,0,arr.length - 1)).toEqual([2,3,5,7,11,13]);
  });
});
