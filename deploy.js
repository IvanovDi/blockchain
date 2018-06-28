const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//first argument in this constructor this mnemonic words from metamask accoutn
const provider = new HDWalletProvider(
    'announce shoe wink subject present cycle gossip kind special cannon butter runway',
    'https://rinkeby.infura.io/Be1RJlg4apGqJwm1rTs6'
);

const web3 = new Web3(provider);