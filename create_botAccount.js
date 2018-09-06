var StellarSdk = require('stellar-sdk');
var request = require('request');

// The SDK does not have tools for creating test accounts, so you'll have to
// make your own HTTP request.
let pair = StellarSdk.Keypair.random();

request.get({
  url: 'https://friendbot.stellar.org',
  qs: { addr: pair.publicKey() },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
  }
});