require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ESRcu6mhWtyDtpu9InmxYg2U0ZOPkEOr',
      accounts: ['8b3806098a85a1906f5fefe7cc27cd1ce4f97d46afbd61cb327a518d892987f3'],
    },
  },
};

// Downloading compiler 0.8.0
// Compiled 2 Solidity files successfully (evm target: istanbul).
// Transactions address:  0x08CE313EDB183604021Da7CD556dd8721113AC58