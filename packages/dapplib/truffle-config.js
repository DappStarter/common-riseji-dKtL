require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rice place hole heavy end army gaze'; 
let testAccounts = [
"0x5d613b065cfd6679bc49eff5274b0ce9e674d51d5510de180ee06165a94337b2",
"0x8852e666e7d22901fadd06f1f2076fa9b22560fdb04be6c6ade61dcf874471e9",
"0xdd7a83bd7d5488fdeb1a9ad2c8a86e30c252cdad8ac31da74340456ffe831fd6",
"0xad510071062ccbbb7ca28603f4307b101d3e1041ea23a4e2f083bd0519ea8c23",
"0x26dd0d1758053236250199531424743363e2342d73976c190168bcdf0bc2886d",
"0xe68bf03e5d788b8dea435b3b88ac748dc8cfa9c1ddabbe88cf931b62c0ae22fb",
"0x53a8fc035811325d343254ba03abdc832f51751093abc7b9e72fda41bb8f423b",
"0xab892045d043918cd634e508d8bcbc7ba6490b5cf073e7e9492c4c566aa968bc",
"0x7fce244f4b84b24fc1550bc21f09344a41610c4b4b34dae53bbc0ddaa46d9512",
"0x155a7a72f6756f9e68a12242885468fa866ef93fb70be3f2af872667b579e886"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


