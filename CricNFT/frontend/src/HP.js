import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './HP.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import videoUrl from "./assets/NFT_Not_Found.mp4";


function Hp({accountObject,web3Object, cricContract}){
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
		var data = await cricContract.methods.tokenURI(4).call();
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

		<div className="hp">
		<Container>
        
      		<section className="section">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>H</span>ARDIK <span style={{color:"#51E8EF"}}>P</span>ANDYA</h1>
      			<hr />
      		</section>

			<div className="div-2">
				<p><span style={{color:"#51E8EF"}}>H</span>ARDIK <span style={{color:"#51E8EF"}}>P</span>ANDYA is the perfect modern-day cricketer. He can strike the ball big, roll his arm over decently and is a livewire in the field. It is a combination of skills India has long waited for since the retirement of Kapil Dev. Irfan Pathan gave them hope for a while but then lost his mojo and soon disappeared in the wilderness. India will wish that Pandya keeps working on his game and ends the country’s search for a seam-bowling all-rounder.</p>
                <p>It was in January 2016 that things turned around for Hardik Pandya. He was the leading run-getter in the Syed Mushtaq Ali, a domestic T20 tournament, finishing with 377 runs in 10 innings at an average of 53.85 while maintaining a strike rate of 130.90. He also took 10 wickets and was instrumental in Baroda reaching the finals. His effective all-round show impressed Mumbai and they bought him in the 2015 edition of the Indian T20 League. He hit a 31-ball 61 for Mumbai against Kolkata in his first season to catch the attention of everyone. With the ability to strike big and bowl quick, he was so impressive that the then coach, Ricky Ponting could not stop praising him.</p>
                <p>His exploits in the limited-overs handed him a Test cap for India's tour of South Africa in 2018. There he scored 93 in his first innings and earned a lot of plaudits from around the world. With his captain and management's backing, the Indian selectors took him to England's tour as well. In 2019, Hardik had a bumpy ride as he got into controversies resulted in him getting sent back home from Australia in the middle of the series.</p>
				<p>After facing a lot of heat due to his derogatory comments in a reality TV show, Hardik made his comeback focused and with a point to prove. The dynamic all-rounder showed irresistible form in the 2019 season of the Indian T20 League and was one of the main reasons for Mumbai's 4th title. With his consistent all-round performance, Pandya cemented his place in the 15-man World Cup squad of India and had a decent outing.</p>
				<br />
				<p>Here, are some of the greatest and memorable moment of the <span style={{color:"#51E8EF"}}>H</span>ARDIK <span style={{color:"#51E8EF"}}>P</span>ANDYA in the form of <span style={{color:"#51E8EF"}}>NFTs</span>.</p>
			</div>

      		<div className="div-3">
      			<div className="row">
				  {
						isLoading1 ? <ErrorComponent></ErrorComponent> : <ImageAssetComponent url={video1} url2="https://testnets.opensea.io/assets/mumbai/0xec51debc1a239389dc82e475f39787d9e31d2df5/4"></ImageAssetComponent>
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

export default Hp;