# ETH Smart Contract - Part 1: Getting started

## Set up project with Truffle

Make sure you have `node >= 8.0` installed. Issue commands below to install truffle globally and init new project. I named it `smartcontract` here, you can change it to something else if preferred.

```
npm install -g truffle
mkdir smartcontract
cd smartcontract
truffle init
```

Truffle project is set up with below structure:

```
contracts
> Migrations.sol

migrations
> 1_initial_migration.js

test
truffle-config.js
```

## Write sample contract `SimpleStorage`

Create file `SimpleStorage.sol` inside `contracts` folder with following content:

```c++
pragma solidity ^0.5.8;

contract SimpleStorage {
    uint public storedData;
    address public owner;

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
}
```

Create a new file `2_initial_simple_storage.js` inside `migrations` folder:

```js
const SimpleStorage = artifacts.require("SimpleStorage")

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage)
}
```

## Test contract code

First, let's install some dependencies:

```
npm init
npm install --save-dev --save-exact chai chai-as-promised chai-bignumber
```

Create file `SimpleStorageTest.js` inside `test` with following content:

```js
const SimpleStorage = artifacts.require("SimpleStorage")

contract("SimpleStorage", accounts => {
  it("should have zero by default", async () => {
    const instance = await SimpleStorage.deployed()
    const data = await instance.get.call()
    assert.equal(data.valueOf(), 0, "0 wasn't initial value")
  })

  it("should set storage correctly", async () => {
    const instance = await SimpleStorage.deployed()
    await instance.set(10)
    const data = await instance.get.call()
    assert.equal(data.valueOf(), 10, "10 wasn't set")
  })
})
```

Issue command below to execute test:

```
npm run test
```
