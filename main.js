var Blockchain = require('./blockchain')
var Block = require('./block');
var jsChain = new Blockchain();
jsChain.addBlock(new Block("9/8/2019",{amount: 5}));
jsChain.addBlock(new Block("9/9/2019",{amount: 10}));

console.log(JSON.stringify(jsChain,null,4));
console.log("is valid? " + jsChain.checkValid() );

