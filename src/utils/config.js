import * as tokenAbi from './abis/tokenAbi.json';
import * as govAbi from './abis/govAbi.json';
import * as vestingAbi from './abis/vestingAbi.json';

export const config = {
    networkId: 3,
    zoraAbi: tokenAbi.default,
    zoraAddress: "0x5f994DD72D2Dd56E8F4895b244AB5Ec21C2893ed",
    govAbi: govAbi.default,
    govAddress: "0x53Bf04b6d0818b0Df53494Fda641b38c2275eF28",
    vestingAbi: vestingAbi.default,
    vestingAddress: "0x8fF05C21FBAE9B7B24D21c0Fb552F3e1DbF93182",
    etherscanLink: "https://ropsten.etherscan.io",
};
