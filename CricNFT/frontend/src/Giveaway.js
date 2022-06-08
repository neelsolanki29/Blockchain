import React, {useEffect, useRef, useState} from 'react';
import { Container } from 'react-bootstrap';
import './Giveaway.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Giveaway(){

    const [timeDays, setTimeDays] = useState("00");
    const [timeHours, setTimeHours] = useState("00");
    const [timeMinutes, setTimeMinutes] = useState("00");
    const [timeSeconds, setTimeSeconds] = useState("00");

    let interval = useRef();

    const startTime = () => {
        const countdownDate = new Date("5 August, 2021 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0){
                clearInterval(interval.current);
            }
            else{
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }

        },1000);
    };

    useEffect(() => {
        startTime();
        return () => {
            clearInterval(interval.current);
        };
    }); 
    
    return(
        
        <Container>
            <div className="card" style={{background : "#000000", width : "80rem", height : "40rem", border : "5px solid"}}>
      			<div className="card-body">
                    <div className="left">
                        <div className="card" style={{background : "#020305" ,width : "30rem", height : "30rem"}}>
                            <div className="card-body">
                                <img src="./Images/cs.png" style={{width : "450px", height : "450px"}} />
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <section className="countdown-time" style={{color : "#ffffff", background : "#0275d8"}}> 
                            <section>
                                <p>{timeDays}</p>
                                <small>DAYS</small>
                            </section>
                            <span>:</span>

                            <section>
                                <p>{timeHours}</p>
                                <small>HRS</small>
                            </section>
                            <span>:</span>

                            <section>
                                <p>{timeMinutes}</p>
                                <small>MINS</small>
                            </section>
                            <span>:</span>

                            <section>
                                <p>{timeSeconds}</p>
                                <small>SECS</small>
                            </section>
                        </section>

                        <h2 style={{color : "#ffffff"}}><span style={{color:"#51E8EF"}}>C</span>RICKET <span style={{color:"#51E8EF"}}>Q</span>UEST</h2>
                        <br /><br />
                        <h5 style={{color : "#ffffff"}}>Win Exclusive and memorable cricket moment <span style={{color:"#51E8EF"}}>NFT's</span></h5>
                        <p style={{color : "#ffffff"}}>To Participate in the Giveaway, checkout out <span style={{color:"#51E8EF"}}>T</span>WITTER Handle : <a href = "https://twitter.com/CricShot4/status/1421874232397471753?s=20">Here</a> </p>
                    </div>
                </div>
    		</div>

        </Container>
    )
}

export default Giveaway;