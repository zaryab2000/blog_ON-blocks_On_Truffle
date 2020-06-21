const BobTest = artifacts.require("BobTest");

contract("BobTest", function() {
  it("should assert true", async function(done) {
    await BobTest.deployed();
    assert.isTrue(true);
    done();
  });
});
