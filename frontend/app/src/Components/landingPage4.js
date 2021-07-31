import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage4.css'

class LandingPage4 extends React.Component {
    render() {
        return (
            <div className="landingPage4">
                <header>    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </header>
                <div className="container-fluid ">
                    <div class="d-flex justify-content-center">
                        <div className='page4-container'>
                                <div className="MySharing">
                                    <img src="assets/images/MySharing.png" className="pic-sharing"/> 
                                    <h1 id='sharing'>Sharing</h1    >
                                    <h1 id='textsharing'>แชร์เรซูเม่อันทรงพลังของคุณให้กับเพื่อน ๆหรือคนที่สนใจได้อย่างง่ายดายด้วยระบบ QR Code และ PDF ที่เป็นที่นิยม</h1>   
                                    <h1 id='textinvite'>เริ่มต้น<br/>ชีวิตที่ดีกว่า<br/>เพียงแค่คลิก</h1> 
                                    <Link to="/agreement">
                                        <button className="btn" id="buttonRegisLanding" ><h1 id='buttontextRegis'>สมัครสมาชิก</h1></button>
						            </Link>
                                </div> 
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage4;