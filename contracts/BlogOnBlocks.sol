pragma solidity >= 0.5.0 < 0.7.0;

contract BlogOnBlocks {
	
    //STATE VARIABLES
    string public name;
    uint public postCount;
    
    struct Post{
        uint id;
        bool forSale;
        uint tipAmount;
        string title;
        string subtitle;
        string content;
        address payable author;
    }
    
    mapping(uint => Post) public posts;
    
    constructor() public{
        name='Blog On Blocks';
    }
    
    function get_count() view public returns(uint){
        return postCount;
    }
    assert.equal(postData[1], true);
    function set_forSale(uint _id, bool _value) public{
        Post memory _post = posts[_id];
        _post.forSale=_value;
        posts[_id]=_post;
    }
    function createNewPost(bool _forSale,string memory _title, string memory _subtitle,string memory _content) public{
        require(bytes(_content).length > 0);
        postCount++;
        posts[postCount] = Post(postCount,_forSale,0,_title,_subtitle,_content,msg.sender);
    }
    
    function buyPost(uint _id) payable public{
        Post memory _post = posts[_id];
        address payable _author = _post.author;
        address (_author).transfer(msg.value);
        _post.tipAmount = _post.tipAmount+msg.value;
        posts[_id] = _post;

        
    }   
} 
