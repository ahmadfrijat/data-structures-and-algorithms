const bracktes = require('../challenges/multiBracketValidation/multi-bracket-validation.js');

describe('Bracket Validation',()=>{
  it('can successfully return an true that represents whether the parentheses are closed properly.',()=>{
    expect(bracktes('{}')).toBeTruthy();
    expect(bracktes('{}(){}')).toBeTruthy();
    expect(bracktes('()[[ExtraCharacters]]')).toBeTruthy();
    expect(bracktes('{}{Code}[Fellows](())')).toBeTruthy();

  });
  it('can successfully return a false that represents whether the parentheses are not closed properly.',()=>{
    expect(bracktes('[({}]	')).toBeFalsy();
    expect(bracktes('(](')).toBeFalsy();
    expect(bracktes('{')).toBeFalsy();
    expect(bracktes(')')).toBeFalsy();
    expect(bracktes('[}')).toBeFalsy();
  });
});