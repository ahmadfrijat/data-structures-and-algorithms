'use strict';

function multiBracketValidation(string){

    let squareBrac = 0;
    let roundBrac = 0;
    let curlyBrac = 0;
    let storeArr = string.split("");
    // let storeArr = [];
    
    storeArr.forEach(e => {
      
        if (e === '[' || e === ']') {
           
            squareBrac++;
        }
        else if (e === '(' || e === ')') {
            roundBrac++;
        }
        else if (e === '{' || e === '}') {
            curlyBrac++;
        }
    })

    if (roundBrac % 2 === 0 && squareBrac % 2 === 0 && curlyBrac % 2 === 0) {
        return true;
    }
    return false;

    }

    module.exports = multiBracketValidation;
