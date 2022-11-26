
var myName = "Helin";
myName = 8;

let mySurname = "Akdoğan";             //let does not let you declare a variable twice
mySurname = "aaa";                     //but we can do this to change

const pi = 3.14                        //const cannot reassign

// scope of let -> limited to the block statement or expression that it was declared in
// scope of var -> globally or locally if declared inside function


var a;         //declared - uninitialized variable               
var b = 5;     //declared, 5 assigned to b - initialized variable

var reminder;
reminder = 11 % 3;

console.log(myName[0]) //first letter of string
console.log(myName.length) //5

//------------------------------------------------------------------------------------------------------------

// how to change const array
const s = [5, 7, 2];
function editInPlace() {
    "use trict";
    s[0] = 3;
    s[1] = 4;
    s[2] = 5;    
}
editInPlace();

//------------------------------------------------------------------------------------------------------------
//prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //PI is still 3.14, error

    try {
        MATH_CONSTANTS = 99;
    } catch (ex) {
        console.log(ex);    
    }
    return MATH_CONSTANTS.PI;    
}
const PI = freezeObj();