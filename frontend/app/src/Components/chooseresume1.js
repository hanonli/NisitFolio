import React, { useState } from 'react';
import cookie from 'react-cookies';

class Chooseresume1 extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data : [],
            
		}
	}

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		const script = document.createElement("script");
		script.src = "assets/js/chooseresume.js";
		document.body.appendChild(script);
        
		var token = cookie.load('login-token')
        console.log('Your Token is: '+token);
		fetch("http://localhost:2000/register/getinfo",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,	
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
		.then(response => response.text())
		.then((datas) => {
            console.log('You Fetch Success!');
			this.setState({
				data : datas,
			})
			 console.log('this.state.data :'+this.state.data)
		});
	}

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}

	render(){
        //this.getDatas();
        console.log('state : ' + JSON.stringify(this.state))
		return (
			<div className="Registab3 regis-box-content1">
				<div class='container-fluid'>
					<div class='col-16'>
						<div class='row'>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
                                            <h2 class="font-headert3">อุดมศึกษา</h2>
                                        </div>
                                    </div>
									<div className=''>
                                        <h5 class='font-dest3'>ระดับอุดมศึกษาจะประกอบไปด้วย ปวส. ปริญญาตรี ปริญญาโท และปริญญาเอก</h5>
                                        <div class="list-of-aca" id="in-list-of-aca" state={this.state}></div>
									</div>
                                </div>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
									        <h2 class="font-headert3">มัธยมศึกษา</h2>
                                        </div>
                                    </div>
									<div className=''>		
                                        <h5 class='font-dest3'>ระดับมัธยมศึกษาในที่นี้จะประกอบไปด้วย มัธยมศึกษาตอนปลาย และปวช.</h5>
                                        <div class="list-of-high" id="in-list-of-high" state={this.state}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default Chooseresume1;