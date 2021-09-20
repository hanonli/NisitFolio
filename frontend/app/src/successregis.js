import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Successregis extends React.Component {
	constructor(props){
		super(props);
	}
	
	componentDidMount() {
		// Simple POST request with a JSON body using fetch
		let params = new URLSearchParams(document.location.search.substring(1));
		let token = params.get("token");
		console.log(token);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token: token })
		};
		fetch('http://localhost:2000/email-confirmation/confirm', requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ postId: data.id }));
		setInterval(window.location = "http://localhost:3000/landing", 3000);  
	}

	render (){
		return (
			<div className="Successregis">
				<Navbarlogo />
				<div className="DataHeader">
					<header class="header-white">
						<div class="container">     
							<div class="row align-items-end">
								<div class="col">
                                    <div class="topData2-content">
									    <h1 class="name inline">เสร็จสิ้น</h1>
                                    </div>
                                </div>
							</div>        
						</div>
					</header>
				</div>
				<div class="centersuccess">
					<img class="img-fluid successregispic" data-bs-placement="top" title="ยืนยันตัวตนสำเร็จแล้ว" src="assets/images/check-mark.png" alt="" width="150" height="150"/>	
					<h1 class="successregis-f">ยืนยันตัวตนสำเร็จ</h1>
				</div>
			</div>
		);
	}
}

export default Successregis;