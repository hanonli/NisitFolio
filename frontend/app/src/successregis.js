import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import LoadingS from './Components/loadingS';
import ApplicationURL from './Components/path';

/* NOT AVALIABLE TO TEST RIGHT NOW BC DONT HAVE PATH TO LINK WITH*/
class Successregis extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			postdata : "",
		}
	}
	
	componentDidMount() {
		$('.Successregis').hide();
		// Simple POST request with a JSON body using fetch
		var fetchtrue = false;
		let params = new URLSearchParams(document.location.search.substring(1));
		let token = params.get("token");
		//cookie.save('login-token',token);
		//const ssId = this.props.match.params.id;
		//alert(ssId);
		// you can also have only query string
		//var params = new URLSearchParams("?mode=night&page=2");
		console.log(token);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token: token })
		};
		fetch(ApplicationURL.backend+'email-confirmation/confirm', requestOptions)
			.then(function (response) {
				/*if(token==null){
					alert('You dont have token!!');
				}*/
				if (!response.ok) {
					//alert('Fetch Fail!!');
					window.location.pathname = "/unsuccessregis";
					/*return (
						<Redirect  to="/unsuccessregis" />
					)*/
					//$('.Successregis').show();
					//fetchtrue = true;
				}
				else{
					//alert('Fetch True!!');
					console.log('BAKABAKA');
					$('.Successregis').show();
					fetchtrue = true;
				}
			})
			.then(data => this.setState({ postdata: data }
			)).catch((error) => {
				console.log('Token Error!');
				/*return (
					<Redirect  to="/unsuccessregis" />
				)*/
				window.location = ("unsuccessregis");
			});
			console.log(this.state.postdata);
			//.then(data => this.setState({ postId: data.id }));
		//setInterval(window.location = "http://localhost:3000/landing", 5000); 
		$('#gotolanding').on('click',function(){
			//alert(fetchtrue);
			if(fetchtrue){
				/*return (
					<Redirect  to="/landing" />
				)*/
				window.location.pathname = "/landing"
			}
			//alert('This feature is now unavaliable! be patient');
		});
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
									    <h1 class="name inline">???????????????????????????</h1>
                                    </div>
                                </div>
							</div>        
						</div>
					</header>
				</div>
				<div class="centersuccess">
					<img class="img-fluid successregispic margin-bottom1" data-bs-placement="top" title="???????????????????????????????????????????????????????????????" src="assets/images/check-mark.png" alt="" width="150" height="150"/>	
					<h1 class="successregis-f margin-bottom1">?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????? <a>?????????????????????????????????</a></h1>
					<div class="col">
						<a class="btn btn-cta-primary-yellowshort round profile-button" id='gotolanding' target="_blank">?????????????????????????????????</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Successregis;