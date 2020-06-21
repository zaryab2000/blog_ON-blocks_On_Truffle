const BOBcontract = artifacts.require("BlogOnBlocks");

contract("BobTest", function([owner, author, buyer]) {
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

    it("Creating Posts functionality Check", async ()=> {
   		var result = await bobContract.createNewPost(true, "Title", "Subtitle", "Body", {from:author});
   		var count = await bobContract.postCount();
   		var postData = await bobContract.posts(1);
   		
		assert.equal(count, 1);
   		assert.equal(postData[1], true);
   		assert.equal(postData[2], 0);
   		assert.equal(postData[3], "Title");
   		assert.equal(postData[4], "Subtitle");
   		assert.equal(postData[5], "Body");
   		
  });

   it("For SALE functionality check", async ()=> {
   	
  });

  it("Payment functionality check", async ()=> {
   
  });
});
