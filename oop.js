
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

//------------------------------------------------------------------------------------------------------------

var testObj = {
    12: "A..",
    15: "B..",
    20: "C..",
};
var playerNumber = 15;
var player = testObj[playerNumber];

//------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------

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