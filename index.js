const Blockchain = require('./blockchain')
const Block = require('./block')

const initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];

//  to run use:
//   $ npm install  
//   $ node ./index.js


//////
// let's get started
//   build a blockchain a block at a time
 const blockchain = new Blockchain()
 blockchain.connectToPeers(initialPeers);
 blockchain.initHttpServer();
 blockchain.initP2PServer();
// blockchain.addBlock({ amount: 4 })
// blockchain.addBlock({ amount: 50 })

// console.log(blockchain)

// console.log(blockchain.isValidChain())
// blockchain.chain[1].data.amount = 30000
// console.log(blockchain.isValidChain())