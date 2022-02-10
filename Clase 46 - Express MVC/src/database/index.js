let fs = require("fs");

let jsonParseado = JSON.parse(
  fs.readFileSync("./src/database/concesionarias.json", "utf-8")
);

module.exports = jsonParseado;
