import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './DS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl from "./assets/NFT_Not_Found.mp4";




function Ds({accountObject,web3Object, cricContract}){
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
		var data = await cricContract.methods.tokenURI(1).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl1(videoUrl);
		setLoading1(false);
	    
		}catch(e){
		 setVideoUrl1(videoUrl);
	//	 setLoading1(false);
		}
	  }

	  


	  
    
	  async function getRequest(url) {
	
			
			var response = await axios.get(url);
		
			
			console.log(response.data["image"]);
			var videoUrl = response.data["image"];
		
		return videoUrl;
	   }


    return(

		<div className="ds">

		<Container>
        			
      		<section className="section">
      			<hr />
				<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>D</span>WAYNE <span style={{color:"#51E8EF"}}>S</span>MITH</h1>
      			<hr />
      		</section>

            <div className="div-2">
                <p><span style={{color:"#51E8EF"}}>D</span>WAYNE <span style={{color:"#51E8EF"}}>S</span>MITH, , a former Windies international cricketer, was born on 12th of April 1983. A right-handed opening batsman and a part time right-arm medium pacer, he is known for his destructive ability to strike the ball hard and take matches away from oppositions.</p>
                <p>After making his first-class debut in 2002 against Guyana, Smith missed out on scoring opportunities for few matches. In his fifth match, he scored a century followed by picking up his maiden wicket as well.</p>
                <p>He made his debut in the year 2004 after few low stints in the domestic circuit. His Test and ODI debut came against South Africa at Newlands, Cape Town.</p>
                <p>With his mighty coupled with electric fielding, Smith was always the go to option for the team. After scoring a century in his debut, Smith could only play 9 more tests for the country. He had brilliant contracts in all major T20I leagues in the world like the Indian Premier League, Caribbean Premier League and Pakistan Super League.</p>
                <p>His international cricket dropped quite miserably as he failed to maintain in his spot with a lack of runs and a ridiculously low average. He was dropped from the side for 3 years from 2007 to 2010 due to lack of consistency.</p>
                <p>Smith was Initially bought by the Mumbai Indians and went on to play for the Deccan Chargers for 2 seasons until 2010. In 2014, when he started playing for CSK, his IPL career really took off. He was a part of Perth Scorchers and Sydney Sixers in the Big Bash League. Smith also plays for the Barbados Tridents in the CPL.</p>
                <p>Smith announced his retirement from international cricket on 1st March, 2017.He featured in Hong Kong T20 blitz post retirement and became the first International player to score a century.</p>
                <br /><br /><br />
                <p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>D</span>WAYNE <span style={{color:"#51E8EF"}}>S</span>MITH in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
            </div>
			
      		<div className="div-3">
      			<div className="row">
				  {
						isLoading1 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/1"></ImageAssetComponent>
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

export default Ds;