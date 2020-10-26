const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('./');


const Data = JSON.parse(fs.readFileSync("./exampleDB.json", "utf8"));
console.log(Data);


for (const file of files) {
  const { Name, Age, Height } = require(path.join(process.cwd(), "JSON", file));
  console.log("Name: ", Name, " Age: ", Age, " Height: ", Height, "m.");
};
