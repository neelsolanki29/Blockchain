import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './Gold.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl from "./assets/NFT_Not_Found.mp4";
import { Button } from 'bootstrap';



function Gold({accountObject,web3Object, cricContract}){
	let web3 = web3Object;
	const [isLoading1,setLoading1] = useState(false);
	const [isLoading2,setLoading2] = useState(false);
	const [isLoading3,setLoading3] = useState(false);
	const [video1,setVideoUrl1] = useState(""); 
	const [video2,setVideoUrl2] = useState(""); 
	const [video3,setVideoUrl3] = useState(""); 


	useEffect(() => {
     
		getData1();
	    getData2();
		getData3();	
	  
	},[]);

	async function getData1() {
		setLoading1(true);
		console.log(cricContract);
		try {
		var data = await cricContract.methods.tokenURI(6).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl1(videoUrl);
		setLoading1(false);
	    
		}catch(e){
			setVideoUrl1(videoUrl);
	//		setLoading1(false);
		}
	  }

	  
	async function getData2() {
		setLoading2(true);
		console.log(cricContract);
		try {
		var data = await cricContract.methods.tokenURI(7).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl2(videoUrl);
		setLoading2(false);
	    
		}catch(e){
			setVideoUrl2(videoUrl);
	//		setLoading2(false);
		}
	  }

	  
	async function getData3() {
		setLoading3(true);
		console.log(cricContract);
		try {
		var data = await cricContract.methods.tokenURI(8).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl3(videoUrl);
		setLoading3(false);
	    
		}catch(e){
			setVideoUrl3(videoUrl);
	//		setLoading3(false);
		}
	  }
    
	  async function getRequest(url) {
	
			
			var response = await axios.get(url);
		
			
			console.log(response.data["image"]);
			var videoUrl = response.data["image"];
		
		return videoUrl;
	   }

	return(
		<div className="gold-tier">
		<Container>
			
      		<section className="section">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#FFD700"}}>G</span>OLD <span style={{color:"#FFD700"}}>T</span>IER</h1>
      			<hr />
      		</section>

      		<div className="div-3">
      			<div className="row">
				  {
						isLoading1 ? <ErrorComponent></ErrorComponent>: <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/6"></ImageAssetComponent>
					}

{
						isLoading2 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video2} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/7"></ImageAssetComponent>
					}

{
						isLoading3 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video3} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/8"></ImageAssetComponent>
					}
					
				</div>
      		</div>
			<br />
			<hr />
		</Container>
		</div>
	)
}
const ErrorComponent = () => {
	return (
		<div className="col-sm-2" >
		<div className="cardd" style={{width : "15rem", height : "25rem"}}>
			  <div className="card-body">
				 <video src={videoUrl} style={{height : "400px"}} autoPlay muted controls="true"></video>
			  </div>
		</div>
	  </div>
	)
}

const ImageAssetComponent = ({url,url2}) => {
	return ( 
		<div className="col-sm-2" >
					<a href={url2} target="_blank">
		<div className="cardd" style={{width : "15rem", height : "25rem"}}>
		  <div className="card-body">
			 <video src={url} style={{height : "400px"}} autoPlay muted controls="true"></video>
		  </div>
	</div>
	</a>
  </div>
 );
}

export default Gold;