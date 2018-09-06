var StellarSdk = require('stellar-sdk');
// create a completely new and unique pair of keys
// see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html
let pair = StellarSdk.Keypair.random();

export const generateSecret = pair.secret();
// SAV76USXIJOBMEQXPANUOQM6F5LIOTLPDIDVRJBFFE2MDJXG24TAPUU7
export const generatePublicKey = pair.publicKey();
// GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB