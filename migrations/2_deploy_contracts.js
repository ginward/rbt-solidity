var RedBlackTreeLib = artifacts.require("./RedBlackTree.sol");
var TestRedBlackTreeContract = artifacts.require("./TestRedBlackTreeContract.sol");

module.exports = function(deployer) {
  deployer.deploy(RedBlackTreeLib);
  deployer.link(RedBlackTreeLib, TestRedBlackTreeContract);
  deployer.deploy(TestRedBlackTreeContract);
};
