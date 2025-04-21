import React from 'react'
import { useEffect, useState } from 'react';
import "./card.css"



function Card() {
    const [xcoord, setXCoord] = useState(20);
    const [ycoord, setYCoord] = useState(20);
    const [angle, setAngle] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prevAngle => (prevAngle + (Math.PI * 2 / 100)) % (Math.PI * 2));

            const newXCoord = Math.cos(angle) * 12;
            const newYCoord = Math.sin(angle) * 12;
            setXCoord(newXCoord);
            setYCoord(newYCoord);
        }, 20); // Update every 10ms
        return () => clearInterval(interval);
    }, [angle]);

    return (

        <div >

            <div className="container">
                <div className="cardstart">
                    <h1 className="mainHeading">
                        Ah!!, I never saw someone from your <br />Company.
                    </h1>
                    <div className="divider"></div>
                    <div className="welcome-body">

                        <div className="circle-container">            
                            <div className="outer-circle" style={{marginTop: ycoord + 'px', marginLeft: xcoord + 'px'}}></div>
                            <div className="inner-text">
                                <p><strong>Welcome!!</strong></p>
                            </div>
                        </div>

                    </div>

                    <div className="buttons-container">
                        <button className="button browse-btn">Browse Test Data</button>
                        <button className="button connect-btn">
                            <div className="circle-plus"></div>
                            Connect Domain
                        </button>
                    </div>


                    <div className="footer">
                        <div className="text">
                            **Tenant Connections are not allowed in free tier, however you can still
                            explore the website
                            <br /> features.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card