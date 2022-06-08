import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './AM.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl from "./assets/NFT_Not_Found.mp4";


function Am({accountObject,web3Object, cricContract}){
	let web3 = web3Object;
	const [isLoading1,setLoading1] = useState(false);


	const [video1,setVideoUrl1] = useState(""); 


	useEffect(() => {
     
		getData1();
	   
	
	

		
	
	  
	},[]);

	async function getData1() {
		setLoading1(true);
		console.log(cricContract);
		try {
		var data = await cricContract.methods.tokenURI(0).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl1(videoUrl);
		setLoading1(false);
	    
		}catch(e){
		 setVideoUrl1(videoUrl);
		// setLoading1(false);
		}
	  }

	  


	  
    
	  async function getRequest(url) {
	
			
			var response = await axios.get(url);
		
			
			console.log(response.data["image"]);
			var videoUrl = response.data["image"];
		
		return videoUrl;
	   }

    return(

		<div className="am">
			
		<Container>

      		<section className="section">
      			<hr />
				<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>A</span>MIT <span style={{color:"#51E8EF"}}>M</span>ISHRA</h1>
      			<hr />
      		</section>

            <div className="div-2">
                <p><span style={{color:"#51E8EF"}}>A</span>MIT <span style={{color:"#51E8EF"}}>M</span>ISHRA is an Indian leg spinner who plays for Haryana in the Ranji Trophy. He was born on 24th November 1982, and hails from Delhi. He has played for the Indian team in 68 games across all formats. Mishra is an attacking right-arm leg break bowler and can also prove to be a tail-ender batsman when called upon. An accurate bowler, he relies on the flight of the ball and a big leg-break, which is his stock delivery.</p>
                <p>He also surprises batsmen with his unorthodox googly. As a leg spinner, he is not dependent on the pitch to turn the ball and employs his wrists to rip the sphere.</p>
                <p>
                    <span style={{color:"#51E8EF"}}>R</span>ecords <span style={{color:"#51E8EF"}}>:</span>
                    <ul>
                        <li>He is the first player in IPL history to take three hat-tricks. His 18 wickets in the series against Zimbabwe is equal to Javagal Srinath’s world record of most wickets in a bilateral ODI series.</li>
                    </ul>
                </p><br /><br /><br />
                <p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>A</span>MIT <span style={{color:"#51E8EF"}}>M</span>ISHRA in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
            </div>
			
      		<div className="div-3">
      			<div className="row">
				  {
						isLoading1 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/0"></ImageAssetComponent>
					}



				</div>
      		</div>

            <hr />
	
		</Container>
	
		</div>
	)
}


const ImageAssetComponent = ({url,url2}) => {
	return ( 
		<div className="col-sm-2" >
			<a href={url2} target="_blank">
	<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
		  <div className="card-body">
			 <video src={url} style={{height : "400px"}} autoPlay muted controls="true"></video>
		  </div>
	</div>

	</a>
  </div>
 );
}

const ErrorComponent = () => {
	return (
		<div className="col-sm-2" >
			
		<div className="card" style={{background : "#000000", width : "15rem", height : "25rem"}}>
			  <div className="card-body">
				 <video src={videoUrl} style={{height : "400px"}} autoPlay muted controls="true"></video>
			  </div>
		</div>
		
	  </div>
	)
}

export default Am;