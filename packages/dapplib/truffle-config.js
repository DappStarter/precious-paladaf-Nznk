require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind around hockey arctic blue sniff'; 
let testAccounts = [
"0x73966fb3e650f3657a64a9c0a36d1ca4626d25b88dd393667c9774d0022b42b1",
"0xc15b04780f1d4c22ade20d6de5e682b08b27c968072e9610ece7a1158ae5aec6",
"0x793c0cff28dc4bb1b511ebfa1f0be50d652f0b8caadabe05a0be6beef593fb03",
"0xb032a0b8afc33f48c640fe4c8981251135690fb5cee02e615141475c5c941b7e",
"0x0ce1e315f371ad9504db3b65e6a7e727e209f9f91a8ebb872630958aa0c69969",
"0x1ab0e274c72876688d2555f50a3533f1e3e2134ca823c887814878713c34b9d1",
"0x0529c9cfa57bc3d645277ef176b3077292cbc288bca240186b6c8e9cbb8c7b32",
"0xf1ee60ef2478bfc578b202e3d43da61bfec90d3208a9084451eb7317d09cc90c",
"0x498566f5b13c7fa128df4f6e9577f52a5d33814cbe61dd8068c31390223b0949",
"0x2ff1b70d97caac48ca9706a39f4cd745d1f74b585d810a7e116b7a04738c4d0f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

