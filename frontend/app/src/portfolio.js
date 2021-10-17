import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './index.css';
import './Components/portfolio.css';
import Modal from 'react-bootstrap/Modal'
import $ from 'jquery';
import Navbar from './Components/navbar';
import ProfileHeader from './Components/profileHeader';
import PortfolioContent from './Components/portfolioContent';
import reportWebVitals from './reportWebVitals';
import { ReactSortable } from "react-sortablejs";
import LoadingS from './Components/loadingS';
import PortThumb from "./portThumb";
import Select from 'react-select'
import { Redirect } from "react-router-dom";
import makeAnimated from 'react-select/animated';
import cookie from 'react-cookies'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import thLocale from 'date-fns/locale/th';
import { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';
import { isValidDate } from './Components/CheckValidDateFormat';

//import Cropper from "react-cropper";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

const animatedComponents = makeAnimated();

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

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.handleSortUpdate = this.handleSortUpdate.bind(this);
		this.state = {
			render: false, //Set render state to false
			allow: true,
			redirect: null,
			allowSort: true,
			/*list: [{ id: "1", name: "Img1" },
					{ id: "2", name: "Img2" },
					{ id: "3", name: "Img3" },
					{ id: "4", name: "Img4" },
					{ id: "5", name: "Img5" }],*/
			list: [],
			sortableContainer: "sortable-container-5",
			options: [
				  { value: 'chocolate', label: 'Chocolate' },
				  { value: 'strawberry', label: 'Strawberry' },
				   { value: 'chocolate', label: 'Chocolate' },
				  { value: 'strawberry', label: 'Strawberry' },
				   { value: 'chocolate', label: 'Chocolate' },
				  { value: 'strawberry', label: 'Strawberry' },
				   { value: 'chocolate', label: 'Chocolate' },
				  { value: 'strawberry', label: 'Strawberry' },
				   { value: 'chocolate', label: 'Chocolate' },
				  { value: 'strawberry', label: 'Strawberry' },
				  { value: 'vanilla', label: 'Vanilla' }
				],
			values: [],
			currentDate: new Date()
		}
	 }
	
	componentDidMount() {
		setInterval(function() { console.log(refThis.state.list); }, 1000);
		
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		/*const script = document.createElement("script");
		script.src = "assets/js/home.js";
		document.body.appendChild(script);*/
		//$.getScript('assets/js/portfolio.js');
		const refThis = this;
		var refElement = null;
		var portMode = cookie.load('port-entry');
		var token = cookie.load('login-token');
		var userId = cookie.load('login-user');
		var editPortId = cookie.load('port-focus');
		var privacyId = 0;
		var portId = null;
		//var pendingUploads = [];
		var picsUrl = [];
		var newPort = {};
		
		 var isFull;
		setInterval(function() { console.log(isFull); }, 1000);
		var fetchStep = 0;
			
		var fetcher = setInterval(Fetcher, 100);
		
		function Fetcher() {
			//console.log('f1: '+f1+'f2: '+f2+'f3: '+f3);
			console.log('waiting to fetch...');
			if(fetchStep != 0 && fetchStep == refThis.state.list.length){ 
				//alert('OK!');
				clearInterval(fetcher);
				//alert('Complete!');
				FinalizeFetchableData();
			}
		}
		
		var current_i = -1;
		
		function UploadToS3(_img){
			return new Promise((resolve,reject)=>{
				uploadFile(_img, config)
				.then(data => { 
					picsUrl.push(data.location); 
					fetchStep += 1; 
					//alert(current_i+' push! (from file)');
					resolve();
					
				})
				.catch(err => console.error(err))
			});
		}
		
		async function GetFetchableData(){
			/*console.log(pendingUploads);
			console.log(pendingUploads[0]);
			pendingUploads.forEach((file) => {
				uploadFile(file, config)
				.then(data => console.log(data))
				.catch(err => console.error(err))
			});
			return;*/
			var inputDate = $('#basic-date-picker').attr('value');
			if(isValidDate(inputDate)){
				//alert('right format: '+inputDate);
				//return;
			}else{
				alert('wrong date format: '+inputDate);
				return;
			}

			var pCount = refThis.state.list.length;
			/*if(pCount > 0) pics.push($('#upload-id-1').attr('src'));
			if(pCount > 1) pics.push($('#upload-id-2').attr('src'));
			if(pCount > 2) pics.push($('#upload-id-3').attr('src'));
			if(pCount > 3) pics.push($('#upload-id-4').attr('src'));
			if(pCount > 4) pics.push($('#upload-id-5').attr('src'));*/
			for (let i = 0; i < 5; i++) {
				if(pCount > i){
					if(typeof(refThis.state.list[i].img) != "string"){
						//alert(i+' is file=>generate url');
						current_i = i;
						await UploadToS3(refThis.state.list[i].img);
					}else{
						//alert(i+' is url');
						current_i = i;
						picsUrl.push(refThis.state.list[i].img); 
						fetchStep += 1; 
						//alert(current_i+' push!');
					}
				}
			}
		}
		
		function FinalizeFetchableData(){
			var privacy = null;
			if(privacyId == 0) privacy = 'Public'
			else if(privacyId == 1) privacy = 'Members'
			else if(privacyId == 2) privacy = 'Private'
			
			var tags = [];
			refThis.state.values.forEach((data) => {
				tags.push(data.value);
			});
			
			var date = null;
			if(document.getElementById('basic-date-picker').value.length > 0)
				date = document.getElementById('basic-date-picker').value;
			
			newPort.Port_Tag = tags;
			newPort.Port_Privacy = privacy;
			newPort.Pic = picsUrl;
			newPort.Description = [];
			newPort.Port_Date = date;
			newPort.Port_Name = document.getElementById('text-input').value;
			newPort.Port_Info = document.getElementById('w3review').value;
			
			console.log(newPort);
			
			//alert(777);
			//console.log(newPort);
			//return;
			if(portMode == 'new'){
				refThis.setState({ render:  false });
				//console.log(picsUrl);
				fetch("http://localhost:2000/portfolio",{
					method: "POST",
					headers: {
						'Authorization': 'Bearer '+token,
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
						"Access-Control-Allow-Credentials": true,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newPort),
				})
				.then(response =>  {
					//console.log(datas);
					console.log(response);
					//GetSearchBookmarkData();
					refThis.setState({ redirect: "/portfolio" });
				})
				.catch((error) => {
					console.log('add Error!');
					//this.setState({ redirect: "/landing" });
				});
			}else{
				console.log(newPort);
				//alert('PATCH!');
				//return;
				refThis.setState({ render:  false });
				fetch("http://localhost:2000/portfolio/"+editPortId,{
					method: "PATCH",
					headers: {
						'Authorization': 'Bearer '+token,
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
						"Access-Control-Allow-Credentials": true,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newPort),
				})
				.then(response =>  {
					//console.log(datas);
					console.log(response);

					var patchBm = {};
					patchBm.type = 'work';
					patchBm.thatUserId = userId;
					patchBm.port_id = editPortId;
					fetch("http://localhost:2000/bookmark/edit",{
						method: "POST",
						headers: {
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "*",
							"Access-Control-Allow-Credentials": true,
							"Content-Type": "application/json"
						},
						body: JSON.stringify(patchBm),
					})
						.then(response =>  {
							//console.log(datas);
							console.log(response);
							refThis.setState({ redirect: "/portfolio" });
							//GetSearchBookmarkData();
						})
						.catch((error) => {
							console.log('add Error!');
							//this.setState({ redirect: "/landing" });
						});

					//refThis.setState({ redirect: "/portfolio" });
					//GetSearchBookmarkData();
				})
				.catch((error) => {
					console.log('add Error!');
					//this.setState({ redirect: "/landing" });
				});
			}
		}
		
		function GetEditPortData(id){
			portId = id;
			fetch("http://localhost:2000/portfolio/"+id,{
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
				.then((data) => {
					console.log(data);
					refThis.setState({ render: true });
					setTimeout(function() { InitializeFunction(); }, 300); 
					
					$('#op-button').text('แก้ไข');
					$('form').submit(function() {
						//alert(444);
						GetFetchableData();
						return false;
						//refThis.setState({ render:  false });
					});
					
					$('#text-input').val(data.Port_Name);
					$('#w3review').val(data.Port_Info);
					
					if(data.Port_Privacy == 'Public'){
						privacyId = 0;
					}else if(data.Port_Privacy == 'Members'){ 
						privacyId = 1;
					}else if(data.Port_Privacy == 'Private'){ 
						privacyId = 2;
					}

					var idd = privacyId+1;
					$('.static-public-icon').removeClass('spi-active');
					$('.spi'+idd).addClass('spi-active');
					
					var tags = [];
					data.Port_Tag.forEach((entry) => {
						tags.push( { value: entry, label: entry } );
					});
					
					refThis.setState({ values: tags });
					//setInterval(function() { console.log(refThis.state.values); }, 1000);
					
					if(data.Port_Date != null){
						//alert(777);
						setInterval(function() { console.log(refThis.state.currentDate); }, 1000);
						/*refThis.setState({ values: tags });*/
						var tpp = data.Port_Date.split('/');
						var date = tpp[0]; var month = tpp[1]; var year = tpp[2];
						if(month == '01') month = 'Jan';
						else if(month == '02') month = 'Feb';
						else if(month == '03') month = 'Mar';
						else if(month == '04') month = 'Apr';
						else if(month == '05') month = 'May';
						else if(month == '06') month = 'Jun';
						else if(month == '07') month = 'Jul';
						else if(month == '08') month = 'Aug';
						else if(month == '09') month = 'Sep';
						else if(month == '10') month = 'Oct';
						else if(month == '11') month = 'Sep';
						else if(month == '12') month = 'Dec';
						var day = 'NON'; // Mon, Tue, Wed, ...
						refThis.setState({ currentDate: day+' '+month+' '+date+' '+year+' 01:24:50 GMT+0700 (Indochina Time)' });
					}
					
					data.portfolioPictures[0].Pic.forEach((entry) => {
						//alert(entry);
						AddImageToSortable(entry);
					});
					//alert('5555555555555');

				}).catch((error) => {
					console.log('Token Error!');
					//refThis.setState({ redirect: "/landing" });
				});
		}
		
		if(portMode == 'new'){
			refThis.setState({ render: true });
			setTimeout(function() { InitializeFunction(); }, 100); 
			
			//alert(555);
			setTimeout(function() {
				$('#op-button').text('เพิ่ม');
				$('form').submit(function() {
					//alert(333);
					GetFetchableData();
					return false;
				});
			 }, 300); 
			
		}else{
			GetEditPortData(editPortId);
			//alert(editPortId);
		}
		
		  var avatar = $('.port-pic-uploadable');
		  var image = document.getElementById('image');
		  var input = document.getElementById('input');
		  var $alert = $('.alert');
		  var $modal = window.$('#modal');
		  var $modalFile = window.$('#modal-file');
		  var cropper;
		  var maxFileSizeInMb = 10;
		  
		  //var portID = '61535450e43b2876a0421de5';
		  
		  if(!this.state.allow) return;
		  
			/*$('.port-pic-uploadable').on('click', function(){
				input.click();
			});*/
			
			
			fetch('http://localhost:2000/register/jobtitle',{
				method: "GET",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"},
			})
				.then(response => response.json())
				//.then(response => response.result)
				.then((datas) => {
					//console.log(datas);
					var temp = [];
					datas.forEach((data) => {
						//console.log(data.THName);
						temp.push( { value: data.THName, label: data.THName } );
					});
					this.setState({ options: temp });
				}).catch((error) => {
					  console.log(error);
					});
					

			function ResetHoverFunction(){
				$('.sortable-thumbnail-pic').on('mouseenter', function(){
					  //alert('over!'); 
					 refElement = $(this);
					 var mid = refElement.attr('id');
					 var pid = mid.replace('upload','pic');
					 $('#'+pid).css('display','inline');
					});
					
				  $('.sortable-thumbnail-pic').on('mouseleave', function(){
					  //alert('out!'); 
					 $('.delete-upload-icon').css('display','none');
					});
					
				  $('.delete-upload-icon').on('mouseenter', function(){
					  //alert('over!'); 
					 var mid = refElement.attr('id');
					 var pid = mid.replace('upload','pic');
					 $('#'+pid).css('display','inline');
					});
					
				  $('.delete-upload-icon').on('mouseleave', function(){
					  //alert('out!'); 
					 var mid = refElement.attr('id');
					 var pid = mid.replace('upload','pic');
					 $('#'+pid).css('display','inline');
					});
			}
			
					
		 
		  
		  var uploadButton = '<piv class="tres" id="{tresId}">\
								<div class="sortable-thumbnail" style="background-color: rgb(245, 245, 245);">\
									<img class="sortable-thumbnail-pic-n" id="upload-next" src="assets/images/img_upload.png" alt="">\
								</div>\
							</piv>'
		  
		  var jObj = '';

		 
			
			
			function InitializeFunction(){
				avatar = $('.port-pic-uploadable');
				image = document.getElementById('image');
				input = document.getElementById('input');
				$alert = $('.alert');
				$modal = window.$('#modal');
				$modalFile = window.$('#modal-file');
				//isFull = false;
				
							
			
				$( ".port-pic-uploadable" ).click(function() {
				  input.click();
				});
			
				input.addEventListener('change', function (e) {
					var files = e.target.files;
					var remSpace = 5 - refThis.state.list.length;
					if(files){
						for (var i = 0; i < files.length; i++) {
							if(i >= remSpace) break;
							var uFile = new File([files[i]], userId+'_'+uuidv4(), {type: files[i].type});
							AddImageToSortable(URL.createObjectURL(files[i]),uFile);
						}
					}
				});
				
				/*input.addEventListener('change', function (e) {
					var files = e.target.files;
					//alert(e.target.files[0].size);
					if(e.target.files[0].size > 1048576*maxFileSizeInMb){
						   //alert("You can't upload file larger than 3 MB");
							$modalFile.modal('show');
						   this.value = "";
						   return;
					};
					
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
					 // aspectRatio: 16/9,
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
				//width: 320,
				//height: 180,
				minWidth: 320,
				minHeight: 180,
				maxWidth: 3200,
				maxHeight: 1800,
				fillColor: '#fff',
				imageSmoothingEnabled: true,
				imageSmoothingQuality: 'high',
			  });
			  initialAvatarURL = avatar.src;
			  avatar.src = canvas.toDataURL();
			  console.log(avatar.src);
			  $alert.removeClass('alert-success alert-warning');
			  canvas.toBlob(function (blob) {
				//alert('new form!');
				//var formData = new FormData();

				//formData.append('avatar', blob, 'avatar.jpg');
				//console.log("HELLO LV5!");
				var file = new File([blob], userId+'_'+uuidv4()+".png", { lastModified: new Date().getTime(), type: blob.type });
				//pendingUploads.push(file);
				AddImageToSortable(avatar.src,file);
			  });
			}
			
			
			
		  });*/
		
		
			ResetSortableContent();
		
			// recursive event listener
			setTimeout(function() {
				$('.delete-upload-icon').off('click');
				$('.delete-upload-icon').on('click', function(){ // add delete event
					delFunc(this);
				});
			}, 20);
		
			
						/*setInterval(function() { 
				   console.log(refThis.state.values);
			   }, 3);*/
			/*setInterval(function() {
				console.log(refThis.state.list);
			}, 50);*/
			
			$('.spi4').hide();
			
			$('#cancel-port').on('click', function(){
			  refThis.setState({ redirect: "/portfolio" });
			});
			
			$('#delete-port').on('click', function(){
			  refThis.setState({ render: false });
			  fetch("http://localhost:2000/portfolio/"+portId,{
				method: "DELETE",
				headers: {
					'Authorization': 'Bearer '+token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "*",
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json"
				}
				})
				.then(response =>  {
					//console.log(datas);
					console.log(response);
					refThis.setState({ redirect: "/portfolio" });
				})
				.catch((error) => {
					console.log('add Error!');
					//this.setState({ redirect: "/landing" });
				});
			});
			
		  $("#basic-date-picker").attr("placeholder", "วัน/เดือน/ปี");
		  
		  $('.static-public-icon').on('click', function(){
			  $('.static-public-icon').removeClass('spi-active');
			  $(this).addClass('spi-active');
			  privacyId =  Number($(this).attr('id').split('-')[1]);
		  });
		  
		  $('.static-footer-arrow').on('click', function(){
			  $('.inner-popup-folio').addClass('anim-inner-popup-folio');
			  $('#inner-fixed-folio-3').addClass('anim-inner-fixed-folio-3');
			  $('.static-footer-arrow').hide();
			  $('.p5-label').hide();
			  $('.port-bg').css('background-color', '#C7C7C7');
			  $('.pu-date-picker').css("display", "block");
			  $('.p3-input').css("z-index", 0);
			  if(portMode != 'new'){
				$('#cancel-trigger').text('ลบ');
				$('#cancel-trigger').attr('data-bs-target','#staticBackdrop2');
			  }
		  });
		  
		  $('.static-popup-arrow').on('click', function(){
			  $('.inner-popup-folio').removeClass('anim-inner-popup-folio');
			  $('#inner-fixed-folio-3').removeClass('anim-inner-fixed-folio-3');
			  $('.static-footer-arrow').show();
			  $('.p5-label').show();
			  $('.port-bg').css('background-color', 'white');
			  $('#cancel-trigger').text('ยกเลิก');
			  $('#cancel-trigger').attr('data-bs-target','#staticBackdrop');
			  
			  setTimeout(function() { $('.pu-date-picker').css("display", "none"); $('.p3-input').css("z-index", 2) }, 300); 
		  });
		
			}
			

		
		function AddImageToSortable(getImg,file){
			//$(".port-pic-uploadable").click(function() { return false; });
			//$(".port-pic-uploadable").off(); 
			$(".port-pic-uploadable").off('click'); // turn off big upload section when adding new image
			//setTimeout(function() { alert('on!'); $( ".port-pic-uploadable" ).click(function() {input.click(); }); }, 1000);
			//$( ".port-pic-uploadable" ).click(function() {input.click(); });
			//$(".port-pic-uploadable").prop("onclick", null);
			//$(".port-pic-uploadable").click(function() {  alert(777); });
			//setTimeout(function() { $(".port-pic-uploadable").click(function() {  input.click(); }); }, 500);
			var count = refThis.state.list.length;
			var lid = count+1;
			if(lid != 5 && jObj != ''){
					//alert('remove: '+lid);
					//console.log( $('.sortable-container-'+lid).children().last());
					//jObj.remove();
					$(".tres").remove();
					//alert('removed last upload button');
				  // $('.sortable-container-'+lid).children().last().remove();
			   }
			
			//alert(count);
			if(count <1){ 
				count = count+1; 
				$("#inner-fixed-folio-2").removeClass('port-pic-uploadable');
			}
				var temp = refThis.state.list;

				   if(temp.length < 5){
					   if(file != null){
						   temp.push({ id: lid, name: "Img"+lid, img: file});
					   }else{
						   //alert('add url: '+getImg);
						   temp.push({ id: lid, name: "Img"+lid, img: getImg});
					   }
					   /*if(lid == 1){
						  //temp.push({ id: lid+1, name: "Img"+lid+1 });
					   }*/
				   }
				   console.log(temp);
				   refThis.setState({ list: temp });
				   var grid = lid+1;
				   //refThis.setState({ sortableContainer: "sortable-container-"+lid });
				   ResetSortableContent();
				    //toggle delete button
					$("#pic-id-"+lid).show();
					$("#pic-id-"+(lid+1)).hide();
					
					/*$(".port-pic-uploadable").prop("onclick", null);
					$(".port-pic-uploadable").off('click');
					$(".port-pic-uploadable").off();*/
					//$(".port-pic-uploadable").click(function() { return false; });
					//$(".port-pic-uploadable").click(function() {  alert(777); });
					//$("#inner-fixed-folio-2").removeClass('port-pic-uploadable');
					$(".port-pic-uploadable").off('click');
					
					
					//$("#inner-fixed-folio-2").addClass('port-pic-uploadable');
					//$("#upload-id-"+lid).addClass('port-pic-uploadable');
					$(".upload-file-icon").hide();
					$(".upload-file-label").hide();
					
					$(".delete-upload-icon").off('click'); // fix event stacking bugs
					$('.delete-upload-icon').on('click', function(){ // add delete event
						delFunc(this);
					});
					
					
					var nImg = document.getElementById('upload-oid-'+lid);
				//alert('upload-id-'+lid);
				nImg.src = getImg; 
				// allow upload for last button
				//$("#upload-id-"+lid).off('click');
				//$( "#upload-id-"+count ).click(function() {input.click(); }); 
				
				//$( "#pic-id-"+count ).click( function() {Datt(this); } );
				
				count = refThis.state.list.length;
				if(count < 5){
					//$("#upload-id-"+count+1).off('click');
					//$( "#upload-id-"+(count+1) ).click(function() {input.click(); });
				}else{
					//alert('isFull!');
					isFull = true;
					$(".tres").remove();
				}
					
				//if(lid == 1){
				  //temp.push({ id: lid+1, name: "Img"+lid+1 });
				  //setTimeout(function() { 
				  //jObj = $(uploadButton).appendTo( $('.dummy'));
				  //alert('add to container: '+grid);
				  jObj = $(uploadButton.replace('{tresId}','tres-'+grid)).prependTo( $('.sortable-container-'+grid).first());
				  $( "#upload-next" ).click(function() {input.click(); }); 
				  //$( "#tres" ).hover(function() { console.log('disable sort!'); refThis.setState({ allowSort: false }); }); 
				  //}, 2000);
					  //alert('add!');
				   //}
				   $('.delete-upload-icon').css('display','none');

				   ResetHoverFunction();
		}
		
		/////////////////////////
		
		function ResetSortableContent(){
			for (let i = 0; i < refThis.state.list.length; i++) {
			  refThis.state.list[i].id = i+1;
			  refThis.state.list[i].name = 'Img'+(i+1);
			}
			
			if(refThis.state.list.length == 5){
				refThis.setState({ sortableContainer: "sortable-container-5" });
			}else if(refThis.state.list.length == 4){
				refThis.setState({ sortableContainer: "sortable-container-5" });
			}else if(refThis.state.list.length == 3){
				refThis.setState({ sortableContainer: "sortable-container-4" });
			}else if(refThis.state.list.length == 2){
				refThis.setState({ sortableContainer: "sortable-container-3" });
			}else if(refThis.state.list.length == 1){
				refThis.setState({ sortableContainer: "sortable-container-2" });
			}else{ // no image
				console.log('list is empty');
				
			}
		}
		
		
		
		/*var i=1;
		
		$("input").keypress(function(){
		  i += 1;
		  alert(document.getElementById('basic-date-picker').value);
		  var temp = refThis.state.list;
		  //temp.push({ id: i, name: "Img"+i });
		  temp.pop();
		  refThis.setState({ list: temp });
		  ResetSortableContent();
		});*/
		
		function delFunc(ref){
			//alert('Delete!');
			console.log('Del');
			var imgList = [];
			// store images
			for (let i = 0; i < refThis.state.list.length; i++) {
				imgList.push(document.getElementById('upload-oid-'+(i+1)).src);
			}
			if(Number(ref.id.slice(-1)) < 5 && !isFull){
				//alert('cut case!');
				console.log(imgList);
				var temp = refThis.state.list;
				var Did = Number(ref.id.slice(-1));
				console.log('delete: '+Did);
				console.log(temp);
				//alert('...'+Did);
				//alert(this.id);
				temp.splice(Did-1, 1);
				//alert(temp);
				console.log(temp);
				
				// auto delete last element
				//if(temp.length == 1) temp.pop();
				
				//alert('Erased!');

				refThis.setState({ list: temp });
				ResetSortableContent();
				ResetHoverFunction();
				
				if(temp.length == 0){
					//alert('empty!');
					$(".tres").remove();
					$(".upload-file-icon").show();
					$(".upload-file-label").show();
					$("#inner-fixed-folio-2").addClass('port-pic-uploadable');
					setTimeout(function() {
						$( ".port-pic-uploadable" ).click(function() { input.click(); });
					}, 10);
				}else{
					//alert('pics left');
					// adjust images
					setTimeout(function() {
						for (let i = Did; i <= refThis.state.list.length; i++) {
							//alert('start: '+Did+' end: '+refThis.state.list.length+' i: '+i);
							document.getElementById('upload-oid-'+i).src = imgList[i];
						}
					}, 10);
					var idd = refThis.state.list.length+1;
					$(".tres").attr("id","tres-"+idd);
					$(".delete-upload-icon").off('click'); // fix event stacking bugs
					$('.delete-upload-icon').on('click', function(){ // add delete event
						delFunc(this);
					});

				}
			}else{
				isFull = false;
				if(ref.id.slice(-1) == 5){
					//alert('delete last!');
					var temp = refThis.state.list;
					temp.pop();
					refThis.setState({ list: temp });
					
					jObj = $(uploadButton.replace('{tresId}','tres-5')).prependTo( $('.sortable-container-5').first());
					$( "#upload-next" ).click(function() {input.click(); }); 
					ResetHoverFunction();
				}else{
					//alert('delete before last');
					var Did = Number(ref.id.slice(-1));
					setTimeout(function() {
						var temp = refThis.state.list;
						for (let i = Did; i <= refThis.state.list.length; i++) {
							//alert('start: '+Did+' end: '+refThis.state.list.length+' i: '+i);
							document.getElementById('upload-oid-'+i).src = imgList[i];
							/*alert(i);
							console.log(temp[i-1].img);
							console.log(temp[i].img);*/
							if(i != refThis.state.list.length)
								temp[i-1].img = temp[i].img;
						}

						
						temp.pop();
						refThis.setState({ list: temp });
						jObj = $(uploadButton.replace('{tresId}','tres-5')).prependTo( $('.sortable-container-5').first());
						$( "#upload-next" ).click(function() {input.click(); }); 
						ResetHoverFunction();
						$(".delete-upload-icon").off('click'); // fix event stacking bugs
						$('.delete-upload-icon').on('click', function(){ // add delete event
							delFunc(this);
						});
						
					}, 10);
					
				}
			}
			
			
			
		}
		
		
	}
	
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	 }
	 
	 handleSortUpdate(event){
		var refThis = this;
		 setTimeout(function() { 
			//alert('111');
			var temp = refThis.state.list;
			var imgList = [];
			for (let i = 0; i < temp.length; i++) {
				var bid = refThis.state.list[i].id;
				imgList.push(document.getElementById('upload-oid-'+bid).src);
			}
			for (let i = 0; i < temp.length; i++) {
			  temp[i].id = i+1;
			  temp[i].name = 'Img'+(i+1);
			  var bid = refThis.state.list[i].id;
			  document.getElementById('upload-oid-'+bid).src = imgList[i];
			}
			refThis.setState({ list: temp }); 
			/*setTimeout(function() { 
				   for (let i = 0; i < temp.length; i++) {
					    //alert('i: '+i+' length'+temp.length);
						document.getElementById('upload-id-'+(i+1)).src = imgList[i];
				   }
			   }, 3);*/
		 }, 2);
	 }
	
	render (){
		if(this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
		
		if(!this.state.allow) return (
			<div className="Underconstruction">
				< Navbar/>
				<header class="bookmark-header-fixed fat bgs">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content text-center">
									<h1 class="name inline">You don't have permission to access this page!</h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
			</div>
		);
		
		if(!this.state.render) return (
			<LoadingS />
		);
		
		return (
			<div className="Portfolio">
				<form >
				<div class="outer-full port-bg">
					<input type="file" id="input" multiple="multiple" accept="image/*" name="image" hidden />
					< Navbar/>

				    <div class="port-pic-uploadable" id="inner-fixed-folio-2">
						
						<img class="upload-file-icon" src="assets/images/Rectangle 266.png"></img>
						<div class="upload-file-label">
							อัพโหลดรูปภาพประกอบได้ที่นี่ (สูงสุด 5 ภาพ)
						</div>
						<div className={this.state.sortableContainer}>
							<ReactSortable
								group="huakuay"
								list={this.state.list}
								animation={200}
								//swapThreshold={0.5}
								//sort={this.state.allowSort}
								//disabled={!this.state.allowSort}
								delayOnTouchStart={true}
								delay={2}
								ghostClass='port-ghost-class'
								easing="cubic-bezier(1, 0, 0, 1)"
								onUpdate={this.handleSortUpdate}
								filter='.disabled'
								/*onMove= {function(evt) {
									 //console.log(evt.related.childNodes[0].classList.contains('disabled'));
									 if(evt.related && evt.related.childNodes[0].classList.contains('disabled'))
										 return false;
									 else
										 return true;
									//return !evt.related.childNodes[0].includes('disabled');
									//console.log(evt.related.children[0].childNodes[0].className);
									 //return  !evt.related.children[0].childNodes[0].className.includes('disabled');
								}}*/
								setList={(newState) => this.setState({ list: newState })}
							  >
								{this.state.list.map((item) => (
								  <PortThumb key={item.id} item={item}/>
								))}
							 </ReactSortable>
						</div>
					</div>

				    <div id="inner-remaining-folio">
						
						<div class="p1-label">
							หัวข้อผลงาน
						</div>
						
							<input class="p-common p1-input form-control" id="text-input" type="text" minlength="3" maxlength="80" autocomplete="off" placeholder="กรอกหัวข้อผลงานของคุณ" aria-label="Search" required/>
						
						<div class="p2-label">
							คำอธิบาย
						</div>
				
						<textarea class="p-common p2-input form-control"  id="w3review" name="w3review" autocomplete="off" placeholder="กรอกคำอธิบายผลงานของคุณ" rows="4" cols="50">
						</textarea>
						
						<div class="p3-label">
							ตำแหน่งงานที่เกี่ยวข้อง
						</div>

							<div class="p-common p3-input form-control" id="search-input">
								<Select 
									isMulti 
									value={this.state.values}
									options={ this.state.values.length >= 3 ? this.state.values : this.state.options }
									//options={ this.state.options }
									placeholder={'ระบุตำแหน่งงาน (สูงสุด 3 ตำแหน่ง)'} 
									onChange={values => this.setState({ values })}
									noOptionsMessage={() => null}
									isSearchable={this.state.values.length >= 3 ? false : true}
								/>
							</div>
						
						
				    </div>
					
					<div class="inner-popup-folio">
						<img class="static-popup-arrow" src="assets/images/arrow_down2.png"></img>
						<div class="pu-label">
							ซ่อน
						</div>
						<div class="pu3-label">
							วันที่เข้าร่วม/ได้รับ
						</div>
						<div class="pu-date-picker">
							<LocalizationProvider dateAdapter={AdapterDateFns} locale={thLocale}>
							  <DatePicker
								value={this.state.currentDate}
								onChange={currentDate => this.setState({ currentDate })}
								maxDate={new Date()}
								renderInput={(params) => <TextField variant="filled" id="basic-date-picker" {...params} />}
							  />
							</LocalizationProvider>
						</div>
				    </div>
				  
				    <div id="inner-fixed-folio-3">
						<div class="p4-label">
							ความเป็นส่วนตัว
						</div>
						
						<img class="static-public-icon spi1 spi-active" id="privacy-0" src="assets/images/outline_public_black_24dp.png"></img>
						<img class="static-public-icon spi2" id="privacy-1" src="assets/images/outline_people_black_24dp.png"></img>
						<img class="static-public-icon spi3" id="privacy-2" src="assets/images/outline_lock_black_24dp.png"></img>
						
						<div class="p5-label">
							ตั้งค่าเพิ่มเติม
						</div>
						<img class="static-footer-arrow" src="assets/images/arrow_up1.png"></img>
						
						<div class="port-buttons">
							<a class="btn btn-cta-primary round grey margin-right-m port-button" id="cancel-trigger" target="_blank" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ยกเลิก</a>      
							<button class="btn btn-cta-primary-yellow round port-button button" id="op-button" type="submit" value="Submit" target="_blank">เพิ่ม</button>
						</div>
					</div>
				</div>
				
				<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content minisize">
							<h4 class="del-b">คุณต้องการยกเลิกการเปลี่ยนแปลงนี้ ?</h4>
							<div class="centerverify">
								<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">แก้ไขต่อ</a>
								<a id="cancel-port" type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">ยืนยัน</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="modal fade" id="staticBackdrop2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content minisize">
							<h4 class="del-b">คุณต้องการลบผลงานนี้ ?</h4>
							<div class="centerverify">
								<a type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
								<a id="delete-port" type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">ลบ</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="container">
					<div class="alert" role="alert"></div>
					<div class="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
					  <div class="modal-dialog" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id="modalLabel">ปรับแต่งรูปของคุณ</h5>
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
				
				<div class="container">
					<div class="alert" role="alert"></div>
						<div class="modal fade" id="modal-file" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
						  <div class="modal-dialog modal-dialog-centered">
								<div class="modal-content minisize">
									<h4 class="del-b">คุณไม่สามารถอัพโหลดรูปที่มีขนาดเกิน 10MB ได้</h4>
									<div class="centerverify">
										<a id="delete-port" type="button" class="btn btn-cta-primary-yellowshort profile-button round" data-bs-dismiss="modal">รับทราบ</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Portfolio;
