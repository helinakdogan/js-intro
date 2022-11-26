var ourArray = [6382, "abc"];
var ourData = ourArray[1];   //abc

var numbers = [[1, 2, 3], [4, 5, 6, 7]];
var myNumber = numbers[1][3]; //7

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["fish", 5]);                   //added as last element
removedFromMyArray = myArray.pop();          //removed last element
removedFromMyArray2 = myArray.shift();       //removed first element
myArray.unshift(["sheep", 10]);              //added as first element