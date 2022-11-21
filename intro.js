//---variables----------------------------------------------------------------------------------------------------------------------------------------
var myName = "Helin"
myName = 8
let mySurname = "Akdoğan"
const pi = 3.14

var a;         //declared - uninitialized variable               
var b = 5;     //declared, 5 assigned to b - initialized variable

var reminder;
reminder = 11 % 3;

console.log(myName[0]) //first letter of string
console.log(myName.length) //5




//----arrays---------------------------------------------------------------------------------------------------------------------------------------
var ourArray = [6382, "abc"];
var ourData = ourArray[1];   //abc

var numbers = [[1, 2, 3], [4, 5, 6, 7]];
var myNumber = numbers[1][3]; //7

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["fish", 5]); //added as last element
removedFromMyArray = myArray.pop();  //removed last element
removedFromMyArray2 = myArray.shift();  //removed first element
myArray.unshift(["sheep", 10]);   //added as first element




//---functions----------------------------------------------------------------------------------------------------------------------------------------
function ourFunction() {
    console.log("hey");
}
ourFunction();

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(20, 10);

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar); //you cannot access local variable, var keyword must be removed first

var outerWear = "t-shirt";  //global variable
function myOutfit() {
    var outerWear = "sweater"; //local variable took precedence
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
//&& -> and       || -> or





//---OOP----------------------------------------------------------------------------------------------------------------------------------------
var myCat = [
    //first object
    {
        "name": "Witch",
        "age": 3,
        "eye color": "blue",
        "color tones": [
            "gray",
            "white",
            "black",
        ]
    },

    //second object
    {
        "owner": "Jackie",
        "job": "doctor",
    }
];
var nameValue = myCat.name;
var eyeColorValue = myCat["eye color"];
myCat.name = "Casper";
delete myCat["eye color"];
var secondColor = myCat[0]["color tones"][1];


var testObj = {
    12: "A..",
    15: "B..",
    20: "C..",
};
var playerNumber = 15;
var player = testObj[playerNumber];


var collection = {
    "1": {
        "album": "Dawn FM",
        "artist": "The Weeknd",
        "tracks": [
            "Dawn FM",
            "Gasoline"
        ]
    },

    "2": {
        "artist": "Prince",
        "tracks": []
    },

    "3": {
        "album": "ABBA Gold"
    },
}
var collectionCopy = JSON.parse(JSON.stringify(collection));   //keep copy of collection

function updateRecords(id, prop, value){
    //if prop is empty, delete prop
    if (value === " "){ 
        delete collection[id][prop];
    }else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(3, "artist", "ABBA"));




//---loops----------------------------------------------------------------------------------------------------------------------------------------
















