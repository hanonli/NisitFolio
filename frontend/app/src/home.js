import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import ProfileContent from './Components/profileContent';
import LoadingL from './Components/loadingL';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'
import { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';


const S3_BUCKET ='nisitfolio';
const REGION ='ap-southeast-1';
const ACCESS_KEY ='AKIAWGHRNY32XLWEVA62';
const SECRET_ACCESS_KEY ='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';
const DIR_NAME = 'images';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
	dirName: DIR_NAME,
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
			render: false, //Set render state to false
			redirect: null
		}
	 }
	
	componentDidMount() {
		var refThis = this;
		
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		var token = cookie.load('login-token');
		var userId = null;
		console.log(token);
		
		function SaveToken(){
			fetch("http://localhost:2000/profile/",{
				method: "GET",
				headers: {
					'Authorization': 'Bearer '+token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				},
			})
			.then(function(response) {
				return response.text().then(function(text) {
				  //alert(text);
				  if(text == '{"statusCode":401,"message":"Unauthorized"}'){
					 // alert('set cookie as null:');
					cookie.save('login-user', 'none', { path: '/' })
				  }else{
					  // alert('set cookie as '+text);
					cookie.save('login-user', text, { path: '/' })
					userId = text;
					UpdateAnalyticsCache();
				  }
				});
			 })
			 .catch((error) => {
					console.log('Failed to get userId with current token!');
					//this.setState({ redirect: "/landing" });
			});
		}
		 
		function UpdateAnalyticsCache(){
			fetch("http://localhost:2000/analytics/cache/"+userId,{
				method: "POST",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				}
			})
				.then(response =>  {
					//console.log(datas);
					console.log(response);
					//GetSearchBookmarkData();
				})
				.catch((error) => {
					console.log('Failed to update analytics!');
					//this.setState({ redirect: "/landing" });
				});
		}
		 
		function UploadProfileToS3(file){
			uploadFile(file, config)
				.then(data => { 
					UploadProfile(data.location);
				})
				.catch(err => console.error(err))
		}
		
		fetch("http://localhost:2000/homepage/",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((datas) => {
				SaveToken();
				//console.log(datas);
				console.log(datas.Firstname);
				console.log(datas.Lastname);
				console.log(datas.AboutMe);
				console.log(datas.ProfilePic);
				console.log(datas.Job_JobName);
				
				this.setState({ render: true });
				
				$('#fetch-name').text(datas.Firstname+' '+datas.Lastname);
				$('#fetch-desc').text(datas.AboutMe);
				$('#avatar').attr("src", datas.ProfilePic);
				datas.Job_JobName.forEach((entry) => {
					console.log('HHHH');
					$('#tags-container').append('<a class="btn btn-cta-secondary btn-small round margin-right-s tag-button" target="_blank">'+entry+'</a>');
				});
				
				
				$('.tag-button').on('click', function(){
					//alert($(this).text());
					cookie.save('search-entry', $(this).text(), { path: '/' })
					refThis.setState({ redirect: '/search' });
				});

				  var avatar = document.getElementById('avatar');
				  var image = document.getElementById('image');
				  var input = document.getElementById('input');
				  var $alert = $('.alert');
				  var $modal = $('#modal');
				  var cropper;
					
					avatar.addEventListener('click', function () {
						input.click();
						// console.log("Click on profile!");
					});

				  input.addEventListener('change', function (e) {
					var files = e.target.files;
					var done = function (url) {
					  input.value = '';
					  image.src = url;
					  $alert.hide();
					  $modal.modal('show');
					};
					var reader;
					var file;
					var url;

					if (files && files.length > 0) {
					  file = files[0];

					  if (URL) {
						done(URL.createObjectURL(file));
					  } else if (FileReader) {
						reader = new FileReader();
						reader.onload = function (e) {
						  done(reader.result);
						};
						reader.readAsDataURL(file);
					  }
					}
				  });

				  $modal.on('shown.bs.modal', function () {
					cropper = new window.Cropper(image, {
					  aspectRatio: 1,
					  viewMode: 1,
					});
				  }).on('hidden.bs.modal', function () {
					cropper.destroy();
					cropper = null;
				  });

				  document.getElementById('crop').addEventListener('click', function () {
					var initialAvatarURL;
					var canvas;

					$modal.modal('hide');
					if (cropper) {
					  canvas = cropper.getCroppedCanvas({
						minWidth: 150,
						minHeight: 150,
						maxWidth: 2048,
						maxHeight: 2048,
					  });
					  initialAvatarURL = avatar.src;
					  avatar.src = canvas.toDataURL();
					  console.log(avatar.src);
					  $alert.removeClass('alert-success alert-warning');
					  canvas.toBlob(function (blob) {
						//var formData = new FormData();
						//formData.append('avatar', blob, 'avatar.jpg');
						//console.log("HELLO LV5!");
						var file = new File([blob], userId+'_pf_'+uuidv4(), { lastModified: new Date().getTime(), type: blob.type });
						UploadProfileToS3(file);
					  });
					}
				  });

				$('#crop').on('click', function(){
					 //alert('Crop!');
					 //setTimeout(function() { UploadProfile(); }, 300);
				});
				
				$('#editport').on('click', function(){
					 //alert('Crop!');
					cookie.save('port-entry', 'new', { path: '/' })
					refThis.setState({ redirect: "/editport" });
				});
				
				
				$('#mrs').on('click', function(){
					if(datas.Job_JobName.length < 1){
						//alert('isEmpty!')
						refThis.setState({ redirect: "/Choosenothing" });
					}else{
						//alert('Go!');
						refThis.setState({ redirect: "/myresume" });
					}
				});
				
			}).catch((error) => {
				console.log('Token Error!');
				this.setState({ redirect: "/landing" });
			});
			
			function UploadProfile(picUrl){
				//alert(111);
					var data = {
						"ProfilePic":picUrl,
						"ProfilePicBase64":picUrl,
					}
					
					fetch("http://localhost:2000/register/",{
					method: "PATCH",
					headers: {
						'Authorization': 'Bearer '+token,
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
						"Access-Control-Allow-Credentials": true,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data),
				})
					.then(response => response.json())
					.then((datas) => {
						//console.log(datas);
						console.log('patch complete!');
					}).catch((error) => {
						console.log('Token Error!');
						//this.setState({ redirect: "/landing" });
					});
			}
			 
			
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	}
	
	render (){
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
		if(this.state.render) {
			return (
			  <div className="Home">
				<div class="outer-full">
					<Navbar />
					<div className="Header">
						<header class="header">
							<div class="container">     
								<div class="row align-items-end">
									<div class="col-md-8">
										<img class="profile-image img-fluid float-start rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="อัพโหลดรูปโปรไฟล์" type='button' id="avatar" src="assets/images/profile_uk.png" width="150" height="150" alt="profile image" />
										<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
										<div class="profile-content">
											<h1 class="name" id="fetch-name"></h1>
											<div id="tags-container">
											</div>
										<h2 class="desc-s" id="fetch-desc"> </h2> 
										</div>
									</div>
									<div class="col-md-4">
										 <div class="lg-view float-end">
											<Link to="/editprofile">
												<a class="btn btn-cta-primary round profile-button grey margin-right-m" target="_blank">แก้ไขโปรไฟล์</a>
											</Link>       
											<a class="btn btn-cta-primary-yellow round profile-button" id="editport" target="_blank">เพิ่มกิจกรรมของคุณ</a> 
										</div>
										
										<div class="sm-view">
											<Link to="/editprofile">
												<a class="btn btn-cta-primary round profile-button grey margin-right-m" target="_blank">แก้ไขโปรไฟล์</a>
											</Link>        
											<a class="btn btn-cta-primary-yellow round profile-button" id="editport" target="_blank">เพิ่มกิจกรรมของคุณ</a> 
										</div>
										
									</div>
								</div>
							</div>
							
							<div class="container">
								<div class="alert" role="alert"></div>
								<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
								  <div class="modal-dialog" role="document">
									<div class="modal-content">
									  <div class="modal-header">
										<h5 class="modal-title" id="modalLabel">ปรับแต่งรูปโปรไฟล์</h5>
									  </div>
									  <div class="modal-body">
										<div class="img-container">
										  <img id="image" src="https://avatars0.githubusercontent.com/u/3456749" />
										</div>
									  </div>
									  <div class="modal-footer">
										<a class="btn btn-cta-primary round profile-button grey" data-bs-dismiss="modal">ยกเลิก</a>
										<a class="btn btn-cta-primary-yellow round profile-button" id="crop">ใช้งานรูปภาพ</a>
									  </div>
									</div>
								  </div>
								</div>
						  </div>
						</header>
					</div>
					
					<div class="container-fluid md-view" id="inner-home">
						<div class="d-flex df-f justify-content-center align-items-center">
							<div class="row">
								<div class="col-md-auto" id="mrs">
									<div class="transition-component scale-up-s resume-icon" id="cross-fade">
										<img class="resume-icon bottom" src="assets/images/myresume2.png" type='button' id="myresume-home" alt="" />
										<img class="resume-icon top" src="assets/images/myresume1.png" type='button' id="myresume-home" alt="" />
									</div>
								</div>
								<div class="col-md-auto">
									<Link to="/portfolio">
										<div class="transition-component scale-up-s portfolio-icon" id="cross-fade">
											<img class="portfolio-icon bottom" src="assets/images/portfolio2.png" type='button' id="portfolio-home" alt="" />
											<img class="portfolio-icon top" src="assets/images/portfolio1.png" type='button' id="portfolio-home" alt="" />
										</div>
									</Link>
								</div>
								<div class="col-md-auto">
									<div class="col-md-auto profile-sm">
										<Link to="/analytics">
											<div class="transition-component scale-up-s analytic-icon" id="cross-fade">
												<img class="analytic-icon bottom" src="assets/images/analytics2.png" type='button' id="analytic-home" alt="" />
												<img class="analytic-icon top" src="assets/images/analytics1.png" type='button' id="analytic-home" alt="" />
											</div>
										</Link>
									</div>
									<div class="col-md-auto">
										<Link to="/bookmark">
											<div class="transition-component scale-up-s bookmark-icon" id="cross-fade">
												<img class="bookmark-icon bottom" src="assets/images/bookmark2.png" type='button' id="bookmark-home" alt="" />
												<img class="bookmark-icon top" src="assets/images/bookmark1.png" type='button' id="bookmark-home" alt="" />
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				  </div>
			   </div>
			)
		}else{
			return (
			  <LoadingL />
			)
		}
	}
}

export default Home;
