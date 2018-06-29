const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//first argument in this constructor this mnemonic words from metamask accoutn
const provider = new HDWalletProvider(
    'announce shoe wink subject present cycle gossip kind special cannon butter runway',
    'https://rinkeby.infura.io/Be1RJlg4apGqJwm1rTs6'
);

const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();

        console.log('Attempting to deploy from account', accounts[0]);
        const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode, arguments: ['Hi there!'] })
            .send({ from: accounts[0], gas: '1000000' });
        console.log('Contract deployed to', result.options.address);

    } catch (e) {
        console.log(e.message);
    }
    return 0;
};
deploy();