require("hardhat-deploy");
require("hardhat-deploy-ethers");

const { networkConfig } = require("../helper-hardhat-config");

const private_key = network.config.accounts[0];
const wallet = new ethers.Wallet(private_key, ethers.provider);

module.exports = async ({ deployments }) => {
  console.log("Wallet Ethereum Address:", wallet.address);
  const chainId = network.config.chainId;
  const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"];

  //deploy PriceOracle
  const PriceOracle = await ethers.getContractFactory("PriceOracle", wallet);
  console.log("Deploying PriceOracle...");
  const priceOracle = await PriceOracle.deploy(wallet.address);
  await priceOracle.deployed();
  console.log("PriceOracle deployed to:", priceOracle.address);
  // deployed at 0xfa3f9b72f9362Fb2591FF7019E13e4C68b44365e

  //deploy Coin
  const IITStableCoin = await ethers.getContractFactory(
    "IITStableCoin",
    wallet
  );
  console.log("Deploying IIT...");
  const IIT = await IITStableCoin.deploy();
  await IIT.deployed();
  console.log("IITStableCoin deployed to:", IIT.address);
  // deployed at 0xB9D6152acd7b9c282F0a8559906d708EdF677A75

  //deploy token
  const Token = await ethers.getContractFactory("Token", wallet);
  console.log("Deploying Token...");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);
  // deployed at 0xB9D6152acd7b9c282F0a8559906d708EdF677A75

  //deploy DEX
  const DEX = await ethers.getContractFactory("DEX", wallet);
  console.log("Deploying Token...");
  const dex = await DEX.deploy();
  await dex.deployed();
  console.log("DEX deployed to:", dex.address);
  // deployed at 0xB9D6152acd7b9c282F0a8559906d708EdF677A75

  //deploy SCW
  const SCW = await ethers.getContractFactory("WalletContract", wallet);
  console.log("Deploying SCW...");
  const SmartAccount = await SCW.deploy();
  await SmartAccount.deployed();
  console.log("SCW deployed to:", SmartAccount.address);
};
