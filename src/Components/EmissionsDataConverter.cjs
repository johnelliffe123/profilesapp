const fs = require("fs");

const regex = /,(?=(?:[^"]*"[^"]*")*(?![^"]*"))/;

let objArray = [];
let lines = [];

let fileJson = {};

function getCSVArray() {
  try {
    const contents = fs.readFileSync(
      "../../data/2023-24-baselines-and-emissions-table.csv",
      "utf8"
    );

    return contents.toString().split("\n");
  } catch (err) {
    console.error(err);
  }
}

function csvToJsonRegex(rows) {
  //const rows = csvString.split("\n");
  const headers = rows[0].split(regex);
  const jsonData = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(regex);
    const obj = {};
    if (values.length > 1) {
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = values[j]?.trim();
      }
      jsonData.push(obj);
    }
  }

  return JSON.stringify(jsonData);
}

//const csvData = "name,age,city\nAlice,30,New York\nBob,25,London";
// values[j].trim();

const csvArray = getCSVArray();
const jsonData = csvToJsonRegex(csvArray);
console.log(jsonData);

fs.writeFile(
  "../../data/2023-24-baselines-and-emissions-table.json",
  jsonData,
  "utf8",
  (err) => {
    if (err) {
      console.error("Error writing file", err);
    } else {
      console.log("File written!");
    }
  }
);
console.log("Done");
