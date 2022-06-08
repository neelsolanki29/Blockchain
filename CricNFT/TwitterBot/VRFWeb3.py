from web3 import Web3
from web3.middleware import geth_poa_middleware
import json
import time
import csv


w3 = Web3(Web3.HTTPProvider(
    'https://rpc-mumbai.matic.today'))

w3.middleware_onion.inject(geth_poa_middleware, layer=0)
#w3.eth.default_account = w3.eth.accounts[0]
nonce = w3.eth.get_transaction_count(
    '0x0e1aFDCD7BCa770aD9DD17d04c6F82816B156D47')

print(w3.isConnected())

contract_address = "0x893A22865095fe6Fa1493A0671132cD13990BD3d"
private_key = ""

# with open("RandomNumberConsumer.json") as f:
#     abi = json.load(f)

abi = '''[
	{
		"inputs": [],
		"name": "getRandomNumber",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "randomness",
				"type": "uint256"
			}
		],
		"name": "rawFulfillRandomness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdrawLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]'''

contract_instance = w3.eth.contract(address=contract_address, abi=abi)


def randomNumberCSV(inputFromBot):
    with open('RandomnessSheet.csv', 'a', newline='') as f:
        randomNum = csv.writer(f)
        try:
            if len(str(inputFromBot)) > 1 and float(inputFromBot) == True:
                randomNum.writerow([inputFromBot])
            else:
                randomNum.writerow([inputFromBot])
        except ValueError:
            if len(inputFromBot) > 1:
                randomNum.writerow([])


def getRandomNumber():
    transaction = contract_instance.functions.getRandomNumber().buildTransaction()
    transaction.update({'gas': 300000})
    transaction.update({'nonce': nonce})
    signed_tx = w3.eth.account.sign_transaction(
        transaction, private_key)
    txn_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
    txn_receipt = w3.eth.wait_for_transaction_receipt(txn_hash)
    print(transaction)
    time.sleep(90)
    randomNumberCSV(contract_instance.functions.randomResult().call())


# getRandomNumber()
