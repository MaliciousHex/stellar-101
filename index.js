var StellarSdk = require('stellar-sdk');
var request = require('request');

var pair = StellarSdk.Keypair.random();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount(pair.publicKey()).then(function(account) {
  console.log('Balances for account: ' + pair.publicKey());
  account.balances.forEach(function(balance) {
    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
  });
}).catch(function(err) {
    console.log(err);
});