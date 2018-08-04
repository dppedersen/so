const path = require("path");
const fs = require("fs");
const solc = require("solc");

const solidityPath = path.resolve(__dirname, "contracts", "Solidity.sol");
const source = fs.readFileSync(solidityPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Solidity"];
