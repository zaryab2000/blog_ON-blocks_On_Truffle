const BOBcontract = artifacts.require("BlogOnBlocks");

contract("BobTest", function(accounts) {
	let bobContract = null;

	before(async ()=>{
		bobContract = await BOBcontract.deployed();
	})
  // it("Deployed Successfully", async ()=> {
  //  	const result = await bobContract.address;
  //   assert.notEqual(result,'');
  //   assert.notEqual(result,'0x00')
  //   assert.notEqual(result,'undefined')
  // });

   it("Name is Correct After deployed", async ()=> {
   	const result = await bobContract.name();
   	console.log(result)
   	assert.equal(result, "Blog On Blocks") 
  });

    it("Creating Posts", async ()=> {
   	// const result = await bobContract.address;
   
  });

   it("For SALE functionality check", async ()=> {
   	
  });

  it("Payment functionality check", async ()=> {
   
  });
});
