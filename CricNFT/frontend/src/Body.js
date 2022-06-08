import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Slider(){
	return(
		<>
			<Container>
				<div className="heading">
					<h3 className="card-title">COLLECT <span style={{color:"#51E8EF"}}>CRICKET</span> MEMORABLE MOMENTS<span style={{color:"#51E8EF"}}>!!</span></h3>
        			<h4 className="card-title">Buy and collect <span style={{color:"#51E8EF"}}>C</span>RICKET <span style={{color:"#51E8EF"}}>NFTs.</span></h4>
					<br />
					<hr  style={{padding : "0.15rem", color : "#555"}} />
				</div>
				
				<div className="video">
					<div className="card">
  						<div className="card-bodyy">
							<img src="./Images/cs.png" style={{width : "400px" , height : "400px"}} />
 		 				</div>
					</div>
				</div>

				<div className="btn">
						<Link to="/Marketplace" style={{textDecoration : "none"}}><Button>START COLLECTION</Button></Link>
				</div>
				<br /><br />
				<hr /><br />

				<div className="twitter">
					<TweetEmbed className="tweet" id="1421872065930436614" options={{theme: 'dark' }} />
					<TweetEmbed className="tweet" id="1421872468143214596" options={{theme: 'dark' }} />
					<TweetEmbed className="tweet" id="1421871710521880581" options={{theme: 'dark' }} />
				</div>
				<br /><hr />
				
				<div className="footer">
					<small className="small" style={{color : "#ffffff"}}>&#169; 2021 CRICSHOT. ALL RIGHTS ARE RESERVED</small>
				</div>
				<br />
			</Container>
		</>
	)
}

export default Slider;