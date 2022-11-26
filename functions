
function ourFunction() {
    console.log("hey");
}
ourFunction();

function ourFunctionWithArgs(m, n) {
    console.log(m - n);
}
ourFunctionWithArgs(20, 10);

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);                                  //you cannot access local variable, var keyword must be removed first

var outerWear = "t-shirt";                           //global variable
function myOutfit() {
    var outerWear = "sweater";                       //local variable took precedence
    return outerWear;
}
myOutfit();
console.log(myOutfit());  //t-shirt
console.log(outerWear);    //sweater

function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "it is true";
    } else {
        return "it is false";
    }
}

//------------------------------------------------------------------------------------------------------------

/*
var magic = function () {
    return new Date();   
}                              
*/
const magic = () => new Date();          //anonymous function -> arrow function

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));  

//------------------------------------------------------------------------------------------------------------

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr1) => {
    const squaredIntegers = arr1.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);    //one function takes another function as an argument -> suitable for arrow function
    return squaredIntegers;                                                                          //high order functions such as map, filter, reduce
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



const increment = (function() {
    return function increment(number, value = 1) { //value is default 1
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

//------------------------------------------------------------------------------------------------------------

// "..." rest operator -> enables taking variable number of arguments, not just like (x, y, z)
const sum = (function() {
    return function sum(...args) {
        // with ...args -> everything's passed into one array like const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 8));

//------------------------------------------------------------------------------------------------------------

// "..." spread operator -> same with rest operator but this expands an already existing array
const arr3 = ['JAN', 'FEB', 'MAR'];
let arr4;
(function() {
    arr4 = [...arr3];            //[... ] -> it spreads out the contents of arr3 into a new array which is arr4
    arr3[0] = 'potato';
})();
console.log(arr3);   //if it was arr4 = arr3, we would see potato

//------------------------------------------------------------------------------------------------------------

//destructuring assignment -> assign variables from objects and arrays
var voxel = {x: 3.6, y: 7.4, z: 6.54};
const { x : aa, y : bb, z : cc} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures;  //get "tomorrow" field from "avgTemperatures" object and assign it to "tempOfTomorrow" variable 
    return tempOfTomorrow;  
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));




const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : {max : maxOfTomorrow} } = forecast;   //destructuring assignment with nested objects -> we can choose which variable we want to assign
    return maxOfTomorrow;  
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));




const[z, x, , y] = [1, 2, 3, 4, 5, 6];    //destructuring assignment to assign variables from arrays -> in order
console.log(z, x, y); //1 2 4

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a] //switched places
})();




const source = [1,2,3,4,5]
function removeFirstTwo(list) {
    const [ , , ...arr5] = list;     //destructuring assignment with rest operator
    return arr5;
}
const arr5 = removeFirstTwo(source);
console.log(arr5);
console.log(source);




const stats = {
    max: 56.78, 
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({ max, min }) {    //destructuring assignment to pass an object as a function's parameters
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));



//------------------------------------------------------------------------------------------------------------

//concise object literal declarations using simple fields
const createPerson = (name1, age1, gender1) => {(name1, age1, gender1)};  //simplier way
createPerson("Helin", 21, "female");




//concise declarative functions
//function in object
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};




//class and constructor in function
function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);




//getter-setter
class Book {
    constructor(author){
        this._author = author;    //private variable -> _author
    }
    
    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}