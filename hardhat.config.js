require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

const SEPOLIA_URL = "https://sepolia.infura.io/v3/3127e7d3083b40a1a4eb40bf0176a1d7";
const SEPOLIA_PRIVATE_KEY = "2de03bed0cf1543871aa2d21fea9721b375d6da44f3ee71359c9e0e093af5e69";  // Replace with your actual Sepolia private key

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./client/src/artifacts",
  },
};