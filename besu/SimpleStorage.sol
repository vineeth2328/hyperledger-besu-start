pragma solidity ^0.8.3; //pragma is here to specify the version of compiler we are using

contract samaple{ //contract is a keyword to initiate the contract, followed by contract name.

struct asset { // structure is a user defined data type. it starts with "struct" and can contains different other data types. 
    	string TransactionID ;
    	string SenderName;
    	uint SenderID;
        string TransactionState;
        string ReceiverId;
        uint Amount;
    	string Currency;
        uint Fee;
        string PaymentMethod;
	}


// TransactionID (Varchar)
// SenderName (First & Last) (Varchar)
// SenderID (Varchar) 
// TransactionState - (Offer, inProcess, Complete, Failed)  (Varchar)
// ReceiverId (Varchar)
// Amount (Varchar)
// Currency (Varchar)
// Fee (Varchar)
// PaymentMethod (Varchar) (CC, DD)



    asset  myStruct ;
    event  myevent ( asset one ) ;
 	// creating a variable called "owner" of type address.

//creating a dynamic array to store a assets accounts dynamically.

    function writeone(string memory _TransactionID  type ,string memory _SenderName,uint _SenderID,string memory _TransactionState, string memory _ReceiverId, uint _Amount,string memory _Currency , uint _Fee,  string memory _PaymentMethod)public {

 require(keccak256(abi.encodePacked((_PaymentMethod))) == keccak256(abi.encodePacked((type ))) || keccak256(abi.encodePacked((_PaymentMethod))) == keccak256(abi.encodePacked(("CC"))), "WRONG PAYMENT METHOD ! ") ;
          
        myStruct = asset(_TransactionID ,_SenderName,_SenderID,_TransactionState,_ReceiverId,_Amount,_Currency, _Fee,_PaymentMethod);

        emit myevent(myStruct);

    }

    function read()view public returns(asset memory){
               return myStruct;
    }



  
}
