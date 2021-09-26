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
import PortThumb from "./portThumb";
import BasicDatePickerPort from "./Components/datePickerPort";
//import Cropper from "react-cropper";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.handleSortUpdate = this.handleSortUpdate.bind(this);
		this.state = {
			allow: false,
			allowSort: true,
			/*list: [{ id: "1", name: "Img1" },
					{ id: "2", name: "Img2" },
					{ id: "3", name: "Img3" },
					{ id: "4", name: "Img4" },
					{ id: "5", name: "Img5" }],*/
			list: [],
			sortableContainer: "sortable-container-5"
		}
	 }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		/*const script = document.createElement("script");
		script.src = "assets/js/home.js";
		document.body.appendChild(script);*/
		//$.getScript('assets/js/portfolio.js');
		const refThis = this;
		var refElement = null;
		
		  var avatar = $('.port-pic-uploadable');
		  var image = document.getElementById('image');
		  var input = document.getElementById('input');
		  var $alert = $('.alert');
		  var $modal = window.$('#modal');
		  var cropper;
		  var isFull = false;
		  
		  if(!this.state.allow) return;
		  
			/*$('.port-pic-uploadable').on('click', function(){
				input.click();
			});*/
			
			$( ".port-pic-uploadable" ).click(function() {
			  input.click();
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
		  
		  var uploadButton = '<piv class="tres" id="{tresId}">\
								<div class="sortable-thumbnail" style="background-color: rgb(245, 245, 245);">\
									<img class="sortable-thumbnail-pic-n" id="upload-next" src="assets/images/img_upload.png" alt="">\
								</div>\
							</piv>'
		  
		  var jObj = '';

		  $modal.on('shown.bs.modal', function () {
			cropper = new window.Cropper(image, {
			  aspectRatio: 16/9,
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
				width: 320,
				height: 180,
			  });
			  initialAvatarURL = avatar.src;
			  avatar.src = canvas.toDataURL();
			  console.log(avatar.src);
			  $alert.removeClass('alert-success alert-warning');
			  canvas.toBlob(function (blob) {
				var formData = new FormData();

				formData.append('avatar', blob, 'avatar.jpg');
				console.log("HELLO LV5!");
			  });
			}
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
			if(count <1) count = count+1;
				var temp = refThis.state.list;

				   if(temp.length < 5){
					   temp.push({ id: lid, name: "Img"+lid });
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
					
					
					var nImg = document.getElementById('upload-id-'+lid);
				//alert('upload-id-'+lid);
				nImg.src = avatar.src; 
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
		  });
		
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
		
		ResetSortableContent();
		
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
			console.log('Del');
			var imgList = [];
			// store images
			for (let i = 0; i < refThis.state.list.length; i++) {
				imgList.push(document.getElementById('upload-id-'+(i+1)).src);
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

				refThis.setState({ list: temp });
				ResetSortableContent();
				ResetHoverFunction();
				
				if(temp.length == 0){
					//alert('empty!');
					$(".tres").remove();
					$(".upload-file-icon").show();
					$(".upload-file-label").show();
					setTimeout(function() {
						$( ".port-pic-uploadable" ).click(function() { input.click(); });
					}, 10);
				}else{
					//alert('pics left');
					// adjust images
					setTimeout(function() {
						for (let i = Did; i <= refThis.state.list.length; i++) {
							//alert('start: '+Did+' end: '+refThis.state.list.length+' i: '+i);
							document.getElementById('upload-id-'+i).src = imgList[i];
						}
					}, 10);
					var idd = refThis.state.list.length+1;
					$(".tres").attr("id","tres-"+idd);

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
						for (let i = Did; i <= refThis.state.list.length; i++) {
							//alert('start: '+Did+' end: '+refThis.state.list.length+' i: '+i);
							document.getElementById('upload-id-'+i).src = imgList[i];
						}

						var temp = refThis.state.list;
						temp.pop();
						refThis.setState({ list: temp });
						jObj = $(uploadButton.replace('{tresId}','tres-5')).prependTo( $('.sortable-container-5').first());
						$( "#upload-next" ).click(function() {input.click(); }); 
						ResetHoverFunction();
						
					}, 10);
					
				}
			}
			
			// recursive event listener
			setTimeout(function() {
				$('.delete-upload-icon').off('click');
				$('.delete-upload-icon').on('click', function(){ // add delete event
					delFunc(this);
				});
			}, 20);
			
		}
		
		
		
		$(function(){
			/*setInterval(function() {
				console.log(refThis.state.list);
			}, 50);*/
			
		  $("#basic-date-picker").attr("placeholder", "วัน/เดือน/ปี");
		  
		  $('.static-public-icon').on('click', function(){
			  $('.static-public-icon').removeClass('spi-active');
			  $(this).addClass('spi-active');
		  });
		  
		  $('.static-footer-arrow').on('click', function(){
			  $('.inner-popup-folio').addClass('anim-inner-popup-folio');
			  $('#inner-fixed-folio-3').addClass('anim-inner-fixed-folio-3');
			  $('.static-footer-arrow').hide();
			  $('.p5-label').hide();
			  $('.port-bg').css('background-color', '#C7C7C7');
			  $('.pu-date-picker').css("display", "block");
		  });
		  
		  $('.static-popup-arrow').on('click', function(){
			  $('.inner-popup-folio').removeClass('anim-inner-popup-folio');
			  $('#inner-fixed-folio-3').removeClass('anim-inner-fixed-folio-3');
			  $('.static-footer-arrow').show();
			  $('.p5-label').show();
			  $('.port-bg').css('background-color', 'white');
			  
			  setTimeout(function() { $('.pu-date-picker').css("display", "none"); }, 300); 
		  });
		});	
		
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
				imgList.push(document.getElementById('upload-id-'+bid).src);
			}
			for (let i = 0; i < temp.length; i++) {
			  temp[i].id = i+1;
			  temp[i].name = 'Img'+(i+1);
			  var bid = refThis.state.list[i].id;
			  document.getElementById('upload-id-'+bid).src = imgList[i];
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
		
		return (
			<div className="Portfolio">
				<div class="outer-full port-bg">
					<input type="file" id="input" accept="image/*" name="image" hidden />
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
						<form >
							<input class="p-common p1-input form-control" id="search-input" type="search" autocomplete="off" placeholder="กรอกหัวข้อผลงานของคุณ" aria-label="Search"/>
						</form>
						
						<div class="p2-label">
							คำอธิบาย
						</div>
				
						<textarea class="p-common p2-input form-control"  id="w3review" name="w3review" autocomplete="off" placeholder="กรอกคำอธิบายผลงานของคุณ" rows="4" cols="50">
						</textarea>
						
						<div class="p3-label">
							ตำแหน่งงาน<br/>ที่เกี่ยวข้อง
						</div>
						<form >
							<input class="p-common p3-input form-control" id="search-input" type="search" autocomplete="off" placeholder="ระบุตำแหน่งงานของคุณ" aria-label="Search"/>
						</form>
						
				    </div>
					
					<div class="inner-popup-folio">
						<img class="static-popup-arrow" src="assets/images/arrow_down2.png"></img>
						<div class="pu-label">
							ซ่อน
						</div>
						<div class="pu2-label">
							ไฟล์แนบ
						</div>
						<div class="pu-attach" >
						
						</div>
						<img class="popup-file-icon" src="assets/images/file_ic.png"></img>
						<div class="pua-label">
							เพิ่มไฟล์แนบ (สูงสุด 8MB)
						</div>
						<div class="pu3-label">
							วันที่เข้าร่วม/ได้รับ
						</div>
						<div class="pu-date-picker">
							< BasicDatePickerPort />
						</div>
				    </div>
				  
				    <div id="inner-fixed-folio-3">
						<div class="p4-label">
							ความเป็นส่วนตัว
						</div>
						
						<img class="static-public-icon spi1 spi-active" src="assets/images/outline_public_black_24dp.png"></img>
						<img class="static-public-icon spi2" src="assets/images/outline_people_black_24dp.png"></img>
						<img class="static-public-icon spi3" src="assets/images/outline_lock_black_24dp.png"></img>
						
						<div class="p5-label">
							ตั้งค่าเพิ่มเติม
						</div>
						<img class="static-footer-arrow" src="assets/images/arrow_up1.png"></img>
						
						<div class="port-buttons">
							<Link to="/home">
								<a class="btn btn-cta-primary round grey margin-right-m port-button" target="_blank">ยกเลิก</a>
							</Link>        
							<a class="btn btn-cta-primary-yellow round port-button" href="#" target="_blank">เพิ่ม</a>
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
			</div>
		);
	}
}

export default Portfolio;
