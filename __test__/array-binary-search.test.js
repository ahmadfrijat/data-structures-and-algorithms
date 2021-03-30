'use strict';

const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe('binarySearch', () => {
  it('works', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
  it('works', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });
  it('works', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
  });
});
'use strict';

