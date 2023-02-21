import { ethers } from "hardhat";

async function main() {
  const initialAmount = ethers.utils.parseEther("0.001");
  const CoinFlip = await ethers.getContractFactory("CoinFlip");
  const coinFlip = await CoinFlip.deploy({value: initialAmount});

  await coinFlip.deployed;
  console.log(`CoinFlip contract adress ${coinFlip.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
