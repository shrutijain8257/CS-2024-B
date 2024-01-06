require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/Dj1UJDyAZwaKmv3rTosdW8HekF_5pVEJ`,
      accounts: [
        `0x${"95082f77eeffb5a8a6986a7b44f6fccda0a2cda18087f77eb4caff5de4d24ffb"}`,
      ],
    },
  },

};
