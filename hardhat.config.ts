import * as dotenv from 'dotenv';
dotenv.config();

import { HardhatUserConfig } from '@sun-protocol/tron-studio';
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-vyper";
import "@sun-protocol/tron-studio";

const settings = {
  optimizer: {
    enabled: true,
    runs: 999999,
  },
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { "version": "0.8.23", settings },
      { "version": "0.8.22", settings },
    ]
  },
  vyper: {
    compilers: [
      { "version": "0.2.8" },
      { "version": "0.3.10" }
    ]
  },
  networks: {
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ["local"],
      deploy: ['deploy/'],
    },
    tron: {
      url: "https://nile.trongrid.io/jsonrpc",
      tron: true,
      deploy: ['deployTron/'],
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  tronSolc: {
    enable: true,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    }
  }
};

export default config;
