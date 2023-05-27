const express = require('express')
const bodyParser = require('body-parser')
const Web3 = require('web3');
const dbConfig = require('./config/database.config.js');
const FailedtxSchema = require('./tx.model')
const mongoose = require('mongoose');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// console.log(web3.providers);

const web3 = new Web3("HTTP://localhost:8545");

// const web3 = new Web3("https://ropsten.infura.io/v3/37ce477e00c14a8390548738542dd9aa");
web3.eth.getAccounts(function(err,accounts){
    console.log("accounts",accounts)
})

var account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"

// hidestream
var pkey = "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"

var abi = [
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

var contractAddress = "0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0";

var myContract = new web3.eth.Contract(abi,contractAddress);

console.log("my",myContract.methods);

 
app.get('/', function (req, res) {
    //console.log(__dirname);
  res.send('Hello World')
//res.sendFile('/home/kartikey/Ethereum/Ethereum_Web3/public/index.html');
});

app.get('/getString',function (req,res){
    myContract.methods.read().call({from:account})
.then(function(result){
    console.log("res",result);
	//console.log("mycontract",myContract)

	var final = {
		TransactionID: result[0],
		 SenderName : result[1],
		 SenderID  : result[2],
		 TransactionState : result[3],
		 ReceiverId : result[4],
		 Amount : result[5],
		 Currency : result[6],
		 Fee : result[7],
		 PaymentMethod : result[8]
	}
	//console.log("test",res)
    res.send(final);
})   
})



app.post('/newWord',function(req,res){
try{
	//console.log("working ia m")
    //console.log("req",req.body);
    var TransactionID = req.body.TransactionID; 
	var SenderName = req.body.SenderName;
	 var SenderID = req.body.SenderID;
	 var TransactionState = req.body.TransactionState;
	 var ReceiverId = req.body.ReceiverId;
	 var Amount = req.body.Amount;
	 var Currency = req.body.Currency;
	 var Fee = req.body.Fee;
	 var PaymentMethod = req.body.PaymentMethod;

	 

    //console.log('inside post') ;
	var encodedData = myContract.methods.writeone(TransactionID,SenderName,SenderID,TransactionState,ReceiverId,Amount,Currency,Fee,PaymentMethod).encodeABI();
	//console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	const final = web3.eth.accounts.signTransaction(transactionObject,pkey,async function(error,trans){
		
	
		//console.log("1111111",trans);
console.log("Error",error)
try {
	const fin = await  web3.eth.sendSignedTransaction(trans.rawTransaction)
		// ("receipt",function(result,err){
		// 	//console.log("22222",err);
		
		// 	//res.send(result);
		// 	//console.log("status",result.status)
		// }).catch(err => console.log(err))

		res.send(fin)
		console.log("111111",fin)
console.log("fin",fin)

} catch (error) {
	console.log("error1",error)

	console.log("hellow wolrd")
	const tx = new FailedtxSchema({
 
        failedtx: error.toString()
    });

    // Save por in the database
    tx.save()
    .then(data => {
        console.log(data);
    }).catch(err => {
       console.log(err)
    });

	
	res.send(error)
}
		
	})
	console.log(final);
}catch(error){
	//res.send(error.toString())

		res.send(error.toString())
	
}

})

app.get('/failedtx',(req,res)=>{

    FailedtxSchema.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving pors."
        });
    });
}

)

app.listen(3000,() => {
	console.log("I am listinig at post 3000 !");
})




// myCon
