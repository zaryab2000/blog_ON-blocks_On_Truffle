const BobContract = artifacts.require("BlogOnBlocks");

module.exports = function(deployer) {
  deployer.deploy(BobContract);
};
