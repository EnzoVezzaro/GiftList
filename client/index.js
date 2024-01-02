const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // Your name to check against the nice list
  // const yourName = 'Sidney Kertzmann'; // on the list
  const yourName = 'Enzo Vezzaro'; // not on the list

  // Make a request to the server with the proof
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: yourName
  });

  console.log({ gift });
}

main();
