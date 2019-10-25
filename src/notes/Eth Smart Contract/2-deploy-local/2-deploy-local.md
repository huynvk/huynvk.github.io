# ETH Smart Contract - Part 2: Deploy contract to local Blockchain

## Deploy to local blockchain

Install [ganache](https://www.trufflesuite.com/ganache)

Start `ganache` in local PC, choose `QUICK START`
Wait until `ganache` finish the setup. Choose `Setting > Server`. Copy `Port Number` and `Network ID` and update it to corresponding fields in `truffle-config.js`:

```js
  development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: 5777,      // Any network (default: none)
    },
```

Deploy to local network:

```
truffle migrate --network development
```

You can check the deployment transaction on `ganache` in `transaction` blog.

## Interact with contract using Truffle Console

After deployed the smart contract to Ganache, you can interact with the smart contract using Truffle Console. To start, issue the command below:

```
truffle console
```

By default, Ganache will create 10 sample accounts for testing purpose, each of them has 100ETH. The command `truffle migrate` above will deploy the contract to Ganache test net on behalf of one of these 10 test accounts (usually the first one). You can see Ganache shows a transaction details for this creation transaction (Sender, Created Contract Address, Gas Used, Gas Price, Gas Limit, Mined In Block, etc.)

Get instance of our deployed `SimpleStorage`, we need this instance to call contract's method later on:

```javascript
let instance = await SimpleStorage.deployed()
```

Issue below command and see details info of the `instance` object:

```
instance
```

The console will list out all properties of the smart contract. There are 2 most important info `abi` and `address`. `abi` is like a prototype for the contract which defines its methods and arguments, others can follow this prototype to call contract methods. `address` is public address of this contract on block chain network. Knowing `address`and `abi` of a contract is a must for a blockchain user to call to contract's methods.

```javascript
  abi:
   [ { constant: true,
       inputs: [],
       name: 'storedData',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x2a1afcd9' },
     { constant: true,
       inputs: [],
       name: 'owner',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x8da5cb5b' },
     { inputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor',
       constant: undefined },
     { constant: false,
       inputs: [Array],
       name: 'set',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0x60fe47b1' },
     { constant: true,
       inputs: [],
       name: 'get',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x6d4ce63c' },
     { constant: false,
       inputs: [],
       name: 'kill',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0x41c0e1b5' } ],
  address: '0x8e360d2e0d794e87a8c876051DD9d3D03ca38edA',
```

Later on, you can initialize contract instance using `address` and `abi` using this code:

```javascript
let instance = new web3.eth.Contract(abi, address)
```

Now we can call methods of `SimpleStorage` via this instance. You can try below command in your truffle console. Notice that the value is stored as hexadecimal, we will need to convert it to decimal to receive exactly value we have set.

```javascript
instance.get.call()
instance.set(9999)
instance.get.call() // Output: <BN: 270f>
instance.get.call().then(value => console.log(parseInt(value, 10))) // Output: 9999
```

## Deploy to RinkeBy test net

Update `SimpleStorage.sol` contract to add ability to kill the contract in case we want to bring it down in future:

```c++
pragma solidity ^0.5.8;

contract SimpleStorage {
    uint public storedData;
    address payable public owner;

    constructor() public {
        owner = msg.sender;
        storedData = 0;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    modifier restricted() {
        require(msg.sender == owner, 'Require owner');
        _;
    }

    function kill() public restricted  { selfdestruct(owner); }
}
```

Install [Geth (Go Ethereum)](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Mac)
