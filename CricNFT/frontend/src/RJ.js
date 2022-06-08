import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './RJ.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl1 from "./assets/NFT_Not_Found.mp4";



function Rj({accountObject,web3Object, cricContract}){
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
		var data = await cricContract.methods.tokenURI(6).call();
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
		var data = await cricContract.methods.tokenURI(7).call();
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

        <div className="rj">

		<Container>
        
      		<section className="section">
      			<hr />
                  <h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>R</span>AVINDRA <span style={{color:"#51E8EF"}}>J</span>ADEJA</h1>
      			<hr />
      		</section>

            <div className="div-2">
                <p><span style={{color:"#51E8EF"}}>R</span>AVINDRA <span style={{color:"#51E8EF"}}>J</span>ADEJA is an Indian cricketer who represents the country in international cricket. On the domestic level, Jadeja plays first class cricket for Saurashtra.</p>
                <p>Playing as an all-rounder, Jadeja is a left-handed opening batsman and bowls slow left-arm orthodox. Jadeja is widely popular for his amazing fielding skills. Fans have lovingly nicknamed him as 'Sir Jadeja'.</p>
                <p>Jadeja is famous for his iconic mustache and his love for horse riding. He is a trained horse rider and loves the sport so much that, it is all he does in his free time.</p>
                <p>
                    <span style={{color:"#51E8EF"}}>R</span>ecords <span style={{color:"#51E8EF"}}>:</span>
                    <ul>
                        <li>First Indian player and eighth overall, to score three first-class triple centuries in his career.</li>
                        <li>Third cricketer for India to score 2,000 runs and take 150 wickets in ODIs.</li>
                    </ul>
                </p>
                <p>
                    <span style={{color:"#51E8EF"}}>A</span>wards <span style={{color:"#51E8EF"}}>:</span>
                    <ul>
                        <li>ICC World ODI XI: 2013, 2016</li>
                        <li>Madhavrao Scindia Award for most wickets in Ranji Trophy: 2008–09</li>
                        <li>Ranked 2nd in ICC Top 10 Test all-rounders (2018)</li>
                        <li>Named in the Test XI of the year by Cricbuzz in 2013</li>
                        <li>Ranked No.1 bowler in ODI Cricket by the ICC in August 2013</li>
                    </ul>
                </p><br /><br /><br />
                <p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>R</span>AVINDRA <span style={{color:"#51E8EF"}}>J</span>ADEJA in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
            </div>
			
      		<div className="div-3">
      			<div className="row">
                  {
						isLoading1 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/6" ></ImageAssetComponent>
					}
                    {
						isLoading2 ? <ErrorComponent></ErrorComponent>: <ImageAssetComponent url={video2} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/7"></ImageAssetComponent>
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
				 <video src={videoUrl1} style={{height : "400px"}} autoPlay muted controls="true"></video>
			  </div>
		</div>
	  </div>
	)
}

export default Rj;