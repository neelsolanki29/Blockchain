import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './VK.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl from "./assets/NFT_Not_Found.mp4";



function Vk({accountObject,web3Object, cricContract}){
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
		var data = await cricContract.methods.tokenURI(5).call();
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
		var data = await cricContract.methods.tokenURI(2).call();
		console.log(data);
	    var videoUrl = await getRequest(data);
		setVideoUrl2(videoUrl);
		setLoading2(false);
	    
		}catch(e){
	   	 setVideoUrl2(videoUrl);
	//		setLoading2(false);
		}
	  }

	  
    
	  async function getRequest(url) {
	
			
			var response = await axios.get(url);
		
			
			console.log(response.data["image"]);
			var videoUrl = response.data["image"];
		
		return videoUrl;
	   }

    return(

		<div className="vk">
		<Container>

      		<section className="section">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>V</span>IRAT <span style={{color:"#51E8EF"}}>K</span>HOLI</h1>
      			<hr />
      		</section>
            
              <div className="div-2">
                <p><span style={{color:"#51E8EF"}}>V</span>IRAT <span style={{color:"#51E8EF"}}>K</span>HOLI or <span style={{color:"#51E8EF"}}>R</span>UN-<span style={{color:"#51E8EF"}}>M</span>ACHINE is an Indian international cricket player. He is a middle order batsman, who can also open the batting.</p>
                <p>In 2008, he led the Indian team to victory at the 2008 ICC Under-19 Cricket World Cup held in Malaysia. Following this, he was bought by the Indian Premier League franchise, Royal Challengers Bangalore, for $30,000 on a youth contract. He was selected for the Indian ODI squad for tour of Sri Lanka in 2008. </p>
				<p>Despite his great performances India could not progress to the final of the tournament. Even though better known for his blazing performances in ODIs, Kohli is also a skilled test player. In 2014, he was named the captain of the Indian test squad. In the Australian tour the same year, he amassed a total of 692 runs in four Tests—the most by any Indian batsman in a Test series in Australia. His career saw a temporary slump in 2015 when he was unable to make any big scores. However, he soon regained his form and became the fastest batsman in the world to make 1,000 runs in T20I cricket during the South Africa's tour of India later the same year.</p>
                <p>He won the ICC ODI Player of the Year in 2012 and the BCCI's international cricketer of the year for the 2011–12 and 2014–15 seasons. He received the Arjuna Award in 2013 in recognition of his achievements in international cricket.</p>
                <p>
                    <span style={{color:"#51E8EF"}}>I</span>nteresting <span style={{color:"#51E8EF"}}>F</span>acts <span style={{color:"#51E8EF"}}>:</span>
                    <ul>
                        <li>Virat Kohli is the fastest batsman ever to reach the milestone of 10,000 ODI runs</li>
                        <li>Virat is the only player in IPL to never be auctioned</li>
                        <li>Virat Kohli has kept wickets twice in his career</li>
                        <li>Virat became the first ever cricketer to score a century on World Cup debut in 2011</li>
                        <li>Virat Kohli scored the fastest ever ODI century by an Indian against Australia in just 52 balls</li>
                        <li>Virat Kohli is the only Asian captain to win tests in England, Australia and South Africa</li>
                        <li>Virat Kohli is the only cricketer to score 500 runs in a bilateral ODI series</li>
                    </ul>
                </p>
				<br />
                <p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>V</span>IRAT <span style={{color:"#51E8EF"}}>K</span>HOLI in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
            </div>

      		<div className="div-3">
      			<div className="row">
				  {
						isLoading1 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/5"></ImageAssetComponent>
					}

{
						isLoading2 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video2} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/2"></ImageAssetComponent>
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


export default Vk;