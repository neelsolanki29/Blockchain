import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

function About(){

    return(
        <Container>
            <div className="div">
                <section className="section">
                    <hr />
	      			<h1 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>A</span>BOUT</h1>
      			    <hr />
                </section>

                <div className="about-details" style={{color : "#ffffff"}}>
                    <p>CRIC<span style={{color:"#51E8EF"}}>SHOT</span> is a blockchain-based platform that allows fans to buy, sell and trade numbered versions of specific through OpenSea by deploying them on nft.storage of Filecoin, video highlights of IPL and some more major tournaments. It is a "revolutionary new experience in which jaw-dropping cricket moments and unforgettable highlights become collectibles that you can own forever”.</p>
                    <br />
                    <p>CRIC<span style={{color:"#51E8EF"}}>SHOT</span>, besides a NFT minter, is also a multi-purpose Twitter bot that can mint and trade the best moments of cricket world besides pushing forward the user engagement of a decentralized ecosystem through portraying virtual moments, powered by Polygon Network.</p>
                    <br />
                    <p>Also, CRIC<span style={{color:"#51E8EF"}}>SHOT</span> Twitter bot is here to automate tasks for you the really cool thing about our NFT giveaways is that it actually picks "RANDOM" users using the ChainLink's VRF, to spice up, after processing the random number from the API, we are allocating them onto a dictionary object containing tokenIDs of NFT, which through the processed number, will be eligible to take it away, dope isn’t it? To put the verifiable randomness of blockchain to use.</p>
                </div>
                <br /><br /><br />
                <hr />
            </div>
        </Container>
    )
}

export default About;