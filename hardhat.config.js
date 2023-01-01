require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 *

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "1c82055607545f4787b020ef36be10e50c7c67c424c108f42231af97626fb46d"

module.exports = {
  solidity: "0.8.9",
  networks: {
  	BSCmainnet: {
  		url: `https://powerful-cosmological-dream.bsc.discover.quiknode.pro/f4be2e0d552807c6f6ce255dc3778acf33055ffc/`,
  		accounts: [`0x${Private_Key}`]
  	}
  }
};
