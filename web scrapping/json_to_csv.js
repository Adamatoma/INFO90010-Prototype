// json_to_csv_pc_domain
//require json-2-csv module
const converter = require("json-2-csv");
const fs = require("fs");

// read JSON from a file
const todos = JSON.parse(fs.readFileSync("pc_domain.json"));

// convert JSON array to CSV string
converter
  .json2csvAsync(todos)
  .then(csv => {
    // print CSV string
    console.log(csv);

    // write CSV to a file
    fs.writeFileSync("pc_domain.csv", csv);
  })
  .catch(err => console.log(err));