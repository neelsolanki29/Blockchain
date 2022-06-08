import Menu from './Menu.js';
import Marketplace from './Marketplace.js';
import Giveaway from './Giveaway.js';
import About from './About.js';
import Slider from './Body.js';
import Gold from './Gold.js';
import Silver from './Silver.js';
import Bronze from './Bronze.js';
import Legendary from './Legendary.js';
import Ms from './MS.js';
import Vk from './VK';
import Hp from './HP';
import Am from './AM';
import Rj from './RJ.js';
import Ds from './DS.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Web3 from'web3';
import {useState,useEffect} from 'react';
import './App.css';
import { CRIC_CONTRACT_ADDRESS } from './const/cric_contract_deployed_address.js';
import { CRIC_CONTRACT_ABI } from './abis/cric_contract_nft_abi.js';

function App() {
  let web3 = new Web3("https://rpc-mumbai.matic.today");
  const [cricContract,setCricContract] = useState();
  
  const [web3objectDetails,setWeb3Object] = useState({
    web3Account : "",
    web3AccountNetworkId: ""
  });
 
  useEffect(() =>  {
    loadWeb3();
  //  loadBlockchainData();
  },[]);
 
  async function loadWeb3 (){
   if (window.ethereum) {
     window.web3 = new Web3(window.ethereum)
     await window.ethereum.enable()
   }
   else if (window.web3) {
     window.web3 = new Web3(window.web3.currentProvider)
   }
   else {
     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
   }
   
   await loadBlockchainData() 
   let cContract = new web3.eth.Contract(CRIC_CONTRACT_ABI, CRIC_CONTRACT_ADDRESS);
   setCricContract(cContract);
   console.log(cContract);
 
  }
   
  async function loadBlockchainData() {
   const web3 = window.web3;
   // Load account
   const accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);
   const networkId = await web3.eth.net.getId();
   console.log(networkId);
   setWeb3Object({
     web3Account: accounts[0],
     web3AccountNetworkId : networkId
   })
 
  
  }

  return (
    <div className="app">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Slider} />
          <Route path="/Marketplace" component={Marketplace} />
          <Route path="/giveaway" component={Giveaway} />
          <Route path="/about" component={About} />
          
          {/* <Route path="/gold-tier" component={Gold} /> */}
          <Route path="/gold-tier" render={(props) => <Gold accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
 
          {/* <Route path="/silver-tier" component={Silver} /> */}
          <Route path="/silver-tier" render={(props) => <Silver accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
 
          {/* <Route path="/bronze-tier" component={Bronze} /> */}
          <Route path="/bronze-tier" render={(props) => <Bronze accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
          
          <Route path="/legendary-tier" render={(props) => <Legendary accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
          {/* <Route path="/legendary-tier" component={Legendary} /> */}
          
          {/* <Route path="/ms-dhoni" component={Ms} /> */}
          <Route path="/ms-dhoni" render={(props) => <Ms accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
          
          <Route path="/virat-kholi" render={(props) => <Vk accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
          {/* <Route path="/virat-kholi" component={Vk} /> */}
          
          {/* <Route path="/hardik-pandya" component={Hp} /> */}
          <Route path="/hardik-pandya" render={(props) => <Hp accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />

          {/* <Route path="/amit-mishra" component={Am} /> */}
          <Route path="/amit-mishra" render={(props) => <Am accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
          
          <Route path="/ravindra-jadeja" render={(props) => <Rj accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />
          {/* <Route path="/ravindra-jadeja" component={Rj} /> */}

          <Route path="/dwayne-smith" render={(props) => <Ds accountObject={web3objectDetails} web3Object ={web3} cricContract={cricContract}/>} />

          {/* <Route path="/dwayne-smith" component={Ds} /> */}
          
          </Switch>
      </Router>
      
    </div>
  );

}

export default App;
