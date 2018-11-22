const ecc = require('eosjs-ecc')
ecc.randomKey().then(privateKey => {
console.log('Private Key:\t', privateKey) // wif
console.log('Public Key:\t', ecc.privateToPublic(privateKey)) // EOSkey...
var key = ecc.privateToPublic(privateKey)

//SIG_K1_K8uxYoUvUe4g45gysHLyzmPGhF97XzBq7SDGDZYfcM11Kx93eHYe8Jhu2bcYb4CTM7e7aBPJ7BzZmRXPovTtwA5ZmSqsj5

var signature = ecc.sign('Prabox', privateKey)
console.log('signature,:\t', signature)

})




