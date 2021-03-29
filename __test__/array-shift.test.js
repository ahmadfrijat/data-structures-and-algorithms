'use strict';

const reverse = require('../challenges/arrayShift/array-shift.js');

describe('Reverse', () => {
  it('works', () => {
    expect(reverse([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });
});
