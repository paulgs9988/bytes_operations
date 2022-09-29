const ethers = require("ethers");

async function createBytes(args) {
  const name = args[0];
  //pass a string and return bytes:
  const bytes = ethers.utils.formatBytes32String(name);
  console.log("Bytes: ", bytes);
}

createBytes(process.argv.slice(2));
