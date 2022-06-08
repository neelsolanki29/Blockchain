import { CRIC_CONTRACT_ABI } from "../abis/cric_contract_nft_abi";
export class CricContract {
    

    constructor(web3object){
        this.web3object = web3object;
        this.cricAbi = CRIC_CONTRACT_ABI;
        this.deployedAddress = '';
        // eslint-disable-next-line no-unused-expressions
        this.cricContract;
    }

   

    async initializeContract(deployedAddress){
        this.deployedAddress = deployedAddress;
        this.cricContract = await new this.web3object.eth.Contract(this.cricAbi,this.deployedAddress);
        console.log(this.schoolContract);
        console.log("Initialized Web3 Contract");


    }

    async addGetUri(index){
        
        try{
            var token = await this.cricContract.methods.tokenURI(index).call();
            console.log(`done fetched the uri at index:${index}`);
            console.log(token);
            return token;
        }catch(e){
			console.log(e);
            return 'Something bad happened';
        }
        
    }



 
 
 
}