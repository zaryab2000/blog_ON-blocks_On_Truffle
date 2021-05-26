const BobContract = artifacts.require("BlogOnBlocks");
// Redisigning Migrations
module.exports = function(deployer) {
  console.log("DEPLOYMENT STARTED")
  deployer.deploy(BobContract);
};
