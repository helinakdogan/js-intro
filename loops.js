var array1 = []
var i = 0;
while(i < 5){
    array1.push(i);
    i++;
}
console.log(array1);

var array2 = []
for (let i = 0; i < 20; i +=2) {
    array2.push(i); 
}
console.log(array2);

//------------------------------------------------------------------------------------------------------------

//do-while -> run at least once before it checks the condition
var array3 = []
var i2 = 10;
do{
    array3.push(i2);
    i2++;
} while (i2 < 5)
console.log(array3);

//------------------------------------------------------------------------------------------------------------

function randomFraction() {  //create random decimals between 0 and 1
    return Math.random();
}

function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("97");