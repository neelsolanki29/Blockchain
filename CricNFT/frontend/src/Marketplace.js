import React from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Marketplace.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Marketplace(){

	return(

			<Container>
      		<section className="section">
      			<hr />
      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>E</span>XPLORE <span style={{color:"#51E8EF"}}>T</span>HE <span style={{color:"#51E8EF"}}>M</span>ARKETPLACE</h1>
      			<hr />
      		</section>

      		<div className="tier">
				<h3 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>EARCH <span style={{color:"#51E8EF"}}>B</span>Y <span style={{color:"#51E8EF"}}>T</span>IERS</h3>
      			<hr />
			</div>
			  
			<div className="div-2">
      			<div className="row">
				  <div className="">
					  	<Link to="legendary-tier" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "80rem", height : "15rem"}}>
      						<div className="card-body">
								<img src="./Images/Legendary_Poster.png" style={{width : "78rem", height : "10rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="">
					<Link to="gold-tier" style={{ textDecoration: 'none' }}>
						<div className="cardd" style={{width : "78rem", height : "15rem"}}>
      						<div className="card-body">
							  <img src="./Images/Gold_Poster.png" style={{width : "78rem", height : "10rem"}} />
      						</div>
    					</div>
					</Link>
  					</div>

  					<div className="">
					  <Link to="silver-tier" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "78rem", height : "15rem"}}>
      						<div className="card-body">
							  <img src="./Images/Silver_Poster.png" style={{width : "78rem", height : "10rem"}} />
        					</div>
    					</div>
						</Link>
  					</div>

  					<div className="">
					  <Link to="bronze-tier" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "78rem", height : "15rem"}}>
      						<div className="card-body">
							  <img src="./Images/Bronze_Poster.png" style={{width : "78rem", height : "10rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>
				</div>
      		</div>
			<hr />
			<div className="player">
				<h3 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>S</span>EARCH <span style={{color:"#51E8EF"}}>B</span>Y <span style={{color:"#51E8EF"}}>P</span>LAYER</h3>
      			<hr />
			</div>
      		
			<div className="div-3">
      			<div className="row">
					<div className="col">
						<Link to="/ms-dhoni" style={{ textDecoration: 'none' }}>
    					<div className="cardd" id="msp" style={{width : "15rem", height : "25rem"}}>
      						<div className="card-body">
								<img src="./Images/MS_Dhoni_Poster.png" style={{width : "15rem", height : "25rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>

  					<div className="col">
					  	<Link to="/virat-kholi" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "15rem", height : "25rem"}}>
      						<div className="card-body">
							  <img src="./Images/Virat_Kohli.png" style={{width : "15rem", height : "25rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>

  					<div className="col">
						<Link to="/hardik-pandya" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "15rem", height : "25rem"}}>
      						<div className="card-body">
							  <img src="./Images/hardik_Pandya.png" style={{width : "15rem", height : "25rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/amit-mishra" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "15rem", height : "25rem"}}>
      						<div className="card-body">
							  <img src="./Images/Amit_Mishra.png" style={{width : "15rem", height : "25rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/ravindra-jadeja" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "15rem", height : "25rem"}}>
      						<div className="card-body">
							  <img src="./Images/Jadeja_Poster.png" style={{width : "15rem", height : "25rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>

					<div className="col">
						<Link to="/dwayne-smith" style={{ textDecoration: 'none' }}>
    					<div className="cardd" style={{width : "15rem", height : "25rem"}}>
      						<div className="card-body">
							  <img src="./Images/Dwayne_Smith.png" style={{width : "15rem", height : "25rem"}} />
      						</div>
    					</div>
						</Link>
  					</div>
				
				</div>
      		</div>

      		<hr />
			</Container>
		
	)
}

export default Marketplace;