const ethers = require("ethers");

async function parseBytes(args) {
  const bytes = args[0];
  //pass a string and return bytes:
  const name = ethers.utils.parseBytes32String(name);
  console.log("Name: ", name);
}

parseBytes(process.argv.slice(2));
