require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ropsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/Bty3ThD11vTOMz8rtp9mY4CaDOW7eCso",
      accounts: [
        "c66d67ae1e9ff4cc90777cfb6c5b87c4d36d876923f8fc19c98c1b025b2c34d6",
      ],
    },
  },
};
