/* THIS HEADER IS FOR DATA-EDITING, CAN'T LINK TO OTHER DATA PAGES*/
import React from 'react';
import $ from 'jquery';
import cookie from 'react-cookies';
import Edittab1 from "./edittab1";
import Edittab2 from "./registab2";
import Edittab3 from "./registab3";
import Edittab4 from "./registab4";
import Edittab5 from "./registab5";
import Edittab6 from "./registab6";
import Edittab7 from "./registab7";

class DataHeader extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data : [],
            
		}
	}

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		//const script = document.createElement("script");
		//script.src = "assets/js/#.js";
		//document.body.appendChild(script);
        $(function(){
			$('.tab-content').hide();
			$('#Edittab1-content').show();
			$('#basic-date-picker1').attr('placeholder','วัน/เดือน/ปี');
			$('.reset-pass').hide();
			console.log("Yahaha!");
		   $('#tab-1').on('click', function(){
			   $('.tab-content').hide();
			   $('.tab-list-item').removeClass('tab-list-active');
			   $('#tab-1').addClass('tab-list-active')
			   $('#Edittab1-content').show();
			   $('#basic-date-picker1').attr('placeholder','วัน/เดือน/ปี');
			   //$('.reset-pass').hide();
		   });
		   
		   $('#tab-2').on('click', function(){
			   $('.tab-content').hide();
			   $('.tab-list-item').removeClass('tab-list-active');
			   $('#tab-2').addClass('tab-list-active')
			   $('#Edittab2-content').show();
		   });
		   
		   $('#tab-3').on('click', function(){
			   $('.tab-content').hide();
			   $('.tab-list-item').removeClass('tab-list-active');
			   $('#tab-3').addClass('tab-list-active')
			   console.log("Eiei3");
			   $('#Edittab3-content').show();
		   });
		
			$('#tab-4').on('click', function(){
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-4').addClass('tab-list-active')
				$('#Edittab4-content').show();
			});
		
			$('#tab-5').on('click', function(){
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-5').addClass('tab-list-active')
				$('#Edittab5-content').show();
			});
		
			$('#tab-6').on('click', function(){
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-6').addClass('tab-list-active')
				$('#Edittab6-content').show();
			});
		
			$('#tab-7').on('click', function(){
				$('.tab-content').hide();
				$('.tab-list-item').removeClass('tab-list-active');
				$('#tab-7').addClass('tab-list-active')
				$('#Edittab7-content').show();
			});
		
		 });
		var min_abme_count = -1;
		var el;

		function countCharactersAbme() {                                    
		var textEntered, countRemaining, counter;          
		textEntered = document.getElementById('aboutme2').value;  
		counter = (280 - (textEntered.length));
		countRemaining = document.getElementById('charactersRemaining'); 
		//console.log('Char left : ' + counter);
		countRemaining.textContent = counter;
		if(counter <= min_abme_count) {
			console.log('Warning!');
			$('.aboutmee').addClass('is-invalid');
		}
		else {
			$('.aboutmee').removeClass('is-invalid');
		}
	}
		function GetProvince(){
			fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces",
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raw) => {
					//console.log(raw);
					raw.data.forEach((entry) => {
						//console.log(entry.province);
				var pro_now = entry.province;
				$('#province').append($('<option />').val(pro_now).html(pro_now));
					});
				}).catch((error) => {
					console.log(error);
					});
				
		}
		GetProvince();

		function removeOptions(selectElement) {
		var i, L = selectElement.options.length - 1;
		for(i = L; i >= 1; i--) {
			selectElement.remove(i);
		}
		}

		$('#province').change(function () {
		var selectedText1 = $(this).find("option:selected").text();
		console.log(selectedText1);
		removeOptions(document.getElementById('townny'));
		GetDistrict(selectedText1);
		});

		function GetDistrict(text){
			fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/" + text +'/district',
				{ method: "GET", })
				.then(response => response.json())
				//.then(response => response.result)
				.then((raws) => {
					console.log(raws);
					raws.data.forEach((entrys) => {
						//console.log(entrys);
				var dis_now = entrys;
				$('#townny').append($('<option />').val(dis_now).html(dis_now));
					});

				}).catch((error) => {
					console.log(error);
					});
				
		}       
		
		el = document.getElementById('aboutme2');                   
		el.addEventListener('keyup', countCharactersAbme, false);

		$('.aboutmee').on('change', 'input', function(){
		var abme = $('.aboutmee').val();
		var abme_count = abme.length;
		//console.log('L : ' + abme_count);
		
		});


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

	render (){
		console.log('state : ' + JSON.stringify(this.state))
		return (
			<div className="DataHeader">
				<header class="header-white">
					<div class="container">     
						<div class="row align-items-end">
							<div class="col">
								<div class="topData2-content">
									<h1 class="name">ข้อมูลผู้ใช้</h1>
									<h1></h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
				<ol class="tabs-list">
                    <li class="tab-list-item tab-list-active" id="tab-1" type="button">ข้อมูลสำคัญ</li>
                    <li class="tab-list-item" id="tab-2" type="button">ข้อมูลเพิ่มเติม</li>
                    <li class="tab-list-item" id="tab-3" type="button">ประวัติการศึกษา</li>
					<li class="tab-list-item" id="tab-4" type="button">ประวัติการทำงาน</li>
					<li class="tab-list-item" id="tab-5" type="button">ใบรับรอง</li>
					<li class="tab-list-item" id="tab-6" type="button">งานที่สนใจ</li>
					<li class="tab-list-item" id="tab-7" type="button">ทักษะเสริม</li>
                 </ol>
				 <div>
					<div class="tab-content" id="Edittab1-content" state={this.state}>
						<Edittab1 />
					</div>
					<div class="tab-content" id="Edittab2-content">
						<Edittab2 />
					</div>
					<div class="tab-content" id="Edittab3-content">
						<Edittab3 />
					</div>
					<div class="tab-content" id="Edittab4-content">
						<Edittab4 />
					</div>
					<div class="tab-content" id="Edittab5-content">
						<Edittab5 />
					</div>
					<div class="tab-content" id="Edittab6-content">
						<Edittab6 />
					</div>
					<div class="tab-content" id="Edittab7-content">
						<Edittab7 />
					</div>
				 </div>
			</div>
		);
	}
}

export default DataHeader;