'use strict';

const reverse = require('../challenges/arrayReverse/array-reverse.js');

describe('Reverse', () => {
  it('works', () => {
    expect(reverse([100,200,300,400,500])).toEqual([500,400,300,200,100]);
  });
});
