import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl from "./assets/NFT_Not_Found.mp4";
import { Button } from 'bootstrap';


function Ms({accountObject,web3Object, cricContract}){
	let web3 = web3Object;
	const [isLoading1,setLoading1] = useState(false);
	const [isLoading2,setLoading2] = useState(false);

	const [video1,setVideoUrl1] = useState(""); 
	const [video2,setVideoUrl2] = useState(""); 



	useEffect(() => {
     
		getData1();
	    getData2();
	
	

		
	
	  
	},[]);

	async function getData1() {
		setLoading1(true);
		console.log(cricContract);
		try {
		var data = await cricContract.methods.tokenURI(3).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl1(videoUrl);
		setLoading1(false);
	    
		}catch(e){
		 setVideoUrl1(videoUrl);
	//	 setLoading1(false);
		}
	  }

	  
	async function getData2() {
		setLoading2(true);
		console.log(cricContract);
		try {
		var data = await cricContract.methods.tokenURI(9).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl2(videoUrl);
		setLoading2(false);
	    
		}catch(e){
	   	 setVideoUrl2(videoUrl);
		//	setLoading2(false);
		}
	  }

	  
    
	  async function getRequest(url) {
	
			
			var response = await axios.get(url);
		
			
			console.log(response.data["image"]);
			var videoUrl = response.data["image"];
		
		return videoUrl;
	   }

    return(

		<div className="msd">
		<Container className="container">
      		<section className="section">
      			<hr />
				<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>M</span>AHINDRA<span style={{color:"#51E8EF"}}>S</span>INGH  <span style={{color:"#51E8EF"}}>D</span>HONI</h1>
      			<hr />
      		</section>

            <div className="div-2">
                <p><span style={{color:"#51E8EF"}}>M</span>AHENDRA <span style={{color:"#51E8EF"}}>S</span>INGH <span style={{color:"#51E8EF"}}>D</span>HONI or <span style={{color:"#51E8EF"}}>C</span>APTIAN-<span style={{color:"#51E8EF"}}>C</span>OOL, one of the most dynamic captain on the field , a personality I truly adore. <span style={{color:"#51E8EF"}}>D</span>HONI is known as one of the best ODI captain the game of cricket has seen and will forever be for a very long time. Some of his decisions on the field will make you scratch your head. People think he is a person who always follow his instincts, makes decision by his gut feelings and what not but in my opinion he is the better observer of the game.</p>
                <p>Under Dhoni's captaincy, India won the 2007 International Cricket Council (ICC) World Twenty20, the Commonwealth Bank Series of 2007–08, the 2010 Asia Cup, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy.</p>
                <p>
                    <span style={{color:"#51E8EF"}}>Q</span>ualities <span style={{color:"#51E8EF"}}>:</span>
                    <ul>
                        <li>Handling Success</li>
                        <li>Trust your instinct</li>
                        <li>Competitor respect</li>
                        <li>Lead from the front</li>
                        <li>His wicket keeping skills</li>
                        <li>His power</li>
                        <li>Staying Focused</li>
                        <li>His Attitude</li>
                        <li>His leadership skills</li>
                    </ul>
                </p><br />
                <p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>M</span>S <span style={{color:"#51E8EF"}}>D</span>HONI in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
            </div>
			
      		<div className="div-3">
      			<div className="row">
				  {
						isLoading1 ? <ErrorComponent></ErrorComponent>: <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/3"></ImageAssetComponent>
					}

{
						isLoading2 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video2} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/9"></ImageAssetComponent>
					}

				</div>
      		</div>

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

export default Ms;