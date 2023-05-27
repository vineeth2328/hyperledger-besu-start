var Web3 = require('web3');


const contractAddress = "0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0"; 

 const contractABI =[
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "TransactionID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "SenderName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "SenderID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "TransactionState",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ReceiverId",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Currency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Fee",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "PaymentMethod",
						"type": "string"
					}
				],
				"indexed": false,
				"internalType": "struct samaple.asset",
				"name": "one",
				"type": "tuple"
			}
		],
		"name": "myevent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_TransactionID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_SenderName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_SenderID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_TransactionState",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ReceiverId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Currency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_Fee",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_PaymentMethod",
				"type": "string"
			}
		],
		"name": "writeone",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "read",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "TransactionID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "SenderName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "SenderID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "TransactionState",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ReceiverId",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Currency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Fee",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "PaymentMethod",
						"type": "string"
					}
				],
				"internalType": "struct samaple.asset",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
 var web3 = new Web3("HTTP://20.96.181.1:8545");


var contractInstance = new web3.eth.Contract(contractABI, contractAddress);




async function scan() {
    console.log("inside function");
        try {


           let events= await contractInstance.getPastEvents('myevent')
           console.log("events",events.length);

           var obj=JSON.parse(JSON.stringify(events));
            var array = Object.keys(obj)
                     
             for(let i=0;i<events.length;i++){
                console.log("returned values",obj[array[i]].returnValues);
             }
         } catch (e) {
            console.log(e.toString());
        }
    
    }

scan()