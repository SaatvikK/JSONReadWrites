const fs = require('fs');

//Define variables (data to be put in json)
let Name = "Saatvik";
let Age = 16;
let Height = 1.6;

//Put variables in a dictionary
let MyDict = {
  Name: Name,
  Age: Age,
  Height: Height
};

//Stringify the dictionary.  JSON.stringify() converts the object/value into a JSON string.
let jsonDATA = JSON.stringify(MyDict);

//Look for the .json file.  If file exists, write data to it, else create file then write data.

fs.writeFile("./exampleDB.json", jsonDATA, function(err) { //function(err) is the callback function
  if(err) {
    console.log(err);
  }
});

