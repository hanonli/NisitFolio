console.log("Run bookmark script!");
Cookies.set('username','worames'); 
console.log('Currently login as: '+Cookies.get('username'));

var profile_grid = '<header class="header round">\
					<div class="container-fluid bookmark-margin">\
						<div class="row">\
							<div class="col-2 d-flex align-items-center">\
								<img class="bookmark-profile-image float-start rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" width="120" height="120" />\
							</div>\
							<div class="col-9 d-flex align-items-center">\
								<div class="bookmark-content">\
									<h1 class="name">{name}</h1>\<div></div>\
									<a class="btn btn-cta-secondary btn-small round tag" target="_blank">{tag1}</a>\
									<a class="btn btn-cta-secondary btn-small round tag" target="_blank">{tag2}</a>\
									<a class="btn btn-cta-secondary btn-small round tag" target="_blank">{tag3}</a>\
								</div>\
							</div>\
							<div class="col-1">\
								<img class="obj-icon tooltips-item" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
							</div>\
						</div>\
					</div>\
				</header>';

var profile_list = '<div class="col-12">\
							<header class="header round">\
							<div class="container-fluid bookmark-margin">\
								<div class="row">\
									<div class="col-1 d-flex align-items-center">\
										<img class="bookmark-profile-image float-start rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" width="120" height="120" />\
									</div>\
									<div class="col-5 bk-pad d-flex align-items-center">\
										<div class="bookmark-content">\
											<h1 class="name">{name}</h1>\<div></div>\
											<Link to="/search">\
												<a class="btn btn-cta-secondary btn-small round tag" target="_blank">{tag1}</a>\
												<a class="btn btn-cta-secondary btn-small round tag" target="_blank">{tag2}</a>\
												<a class="btn btn-cta-secondary btn-small round tag" target="_blank">{tag3}</a>\
											</Link>\
										</div>\
									</div>\
									<div class="col-4 bookmark-list-column d-flex align-items-center justify-content-center">\
										<div class="bookmark-content">\
											<h2 class="bookmark-desc" >{desc}</h2>\
										</div>\
									</div>\
									<div class="col-2">\
										<div class="bookmark-content">\
											<img class="obj-icon tooltips-item" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
											<br></br>\
										</div>\
									</div>\
								</div>\
							</div>\
						</header>\
					</div>';
					
var profile_grid_no_tag = '<header class="header round">\
					<div class="container-fluid bookmark-margin">\
						<div class="row">\
							<div class="col-2 d-flex align-items-center">\
								<img class="bookmark-profile-image float-start rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" width="120" height="120" />\
							</div>\
							<div class="col-8 d-flex align-items-center">\
								<div class="bookmark-content">\
									<h1 class="name">{name}</h1>\<div></div>\
									<h2 class="bookmark-desc">ผู้ใช้นี้ยังไม่มีตำแหน่งงานที่<br>ต้องการ หรือหน้า MyResume</h2>\<div></div>\
								</div>\
							</div>\
							<div class="col-2">\
										<div class="bookmark-content">\
											<img class="obj-icon tooltips-item" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
											<br></br>\
										</div>\
									</div>\
						</div>\
					</div>\
				</header>';
				
var profile_list_no_tag = '<div class="col-12">\
							<header class="header round">\
							<div class="container-fluid bookmark-margin">\
								<div class="row">\
									<div class="col-1 d-flex align-items-center">\
										<img class="bookmark-profile-image float-start rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" width="120" height="120" />\
									</div>\
									<div class="col-5 bk-pad d-flex align-items-center">\
										<div class="bookmark-content">\
											<h1 class="name">{name}</h1>\<div></div>\
											<h2 class="bookmark-desc">ผู้ใช้นี้ยังไม่มีตำแหน่งงานที่ต้องการ หรือหน้า MyResume</h2>\<div></div>\
										</div>\
									</div>\
									<div class="col-4 bookmark-list-column d-flex align-items-center justify-content-center">\
										<div class="bookmark-content">\
											<h2 class="bookmark-desc" >{desc}</h2>\
										</div>\
									</div>\
									<div class="col-2">\
										<div class="bookmark-content">\
											<img class="obj-icon tooltips-item" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
											<br></br>\
										</div>\
									</div>\
								</div>\
							</div>\
						</header>\
					</div>';
					
var work_grid = '<header class="header round">\
					<div class="container-fluid bookmark-margin">\
						<div class="row">\
							<div class="col-3 d-flex align-items-center">\
								<img class="bookmark-profile-image float-start round" type="button" id="avatar" src="{img}" alt="profile image" width="180" height="120"/>\
							</div>\
							<div class="col-8 d-flex align-items-center">\
								<div class="bookmark-content">\
									<h1 class="name">{name}</h1>\
									<h2 class="bookmark-work-desc" >Portfolio - {desc} รูปภาพ</h2>\
									<hb class="bookmark-work-desc" >ผลงานของ </hb>\
									<hw class="bookmark-work-desc" >{owner}</hw>\
								</div>\
							</div>\
							<div class="col-1">\
								<div class="bookmark-content">\
									<img class="obj-icon tooltips-item" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
								</div>\
							</div>\
						</div>\
					</div>\
				</header>';
				
var work_list = '<div class="col-12">\
							<header class="header round">\
					<div class="container-fluid bookmark-margin">\
						<div class="row">\
							<div class="col-2 d-flex align-items-center">\
								<img class="bookmark-profile-image float-start round" type="button" id="avatar" src="{img}" alt="profile image" width="180" height="120"/>\
							</div>\
							<div class="col-8 d-flex align-items-center">\
								<div class="bookmark-content bcw">\
									<h1 class="name">{name}</h1>\
									<h2 class="bookmark-work-desc" >{desc}</h2>\
									<hb class="bookmark-work-desc" >ผลงานของ </hb>\
									<hw class="bookmark-work-desc" >{owner}</hw>\
								</div>\
							</div>\
							<div class="col-2">\
								<div class="bookmark-content">\
									<img class="obj-icon tooltips-item" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="35" height="35"/>\
								</div>\
							</div>\
						</div>\
					</div>\
				</header>\
					</div>';
					
var not_found_search = '<header class="remove">\
							<div class="container-fluid d-flex flex-column justify-content-center not-found">\
								<div class="row">\
									<div class="col d-flex flex-column align-items-center">\
										<img class="not-found-icon" src="assets/images/outline_cancel_grey_24dp 1.png" alt=""/>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col d-flex flex-column align-items-center">\
										<nf>ขออภัยด้วยแต่เราไม่พบข้อมูลการค้นหาของคุณ</nf>\
									</div>\
								</div>\
							</div>\
						</header>'

var not_found_bookmark = '<header class="remove">\
							<div class="container-fluid d-flex flex-column justify-content-center not-found">\
								<div class="row">\
									<div class="col d-flex flex-column align-items-center">\
										<img class="not-found-icon" src="assets/images/outline_cancel_grey_24dp 1.png" alt=""/>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col d-flex flex-column align-items-center">\
										<nf>ขออภัยด้วยแต่เราไม่พบข้อมูล bookmark ของคุณ</nf>\
									</div>\
								</div>\
							</div>\
						</header>'
					
var profile_count=0;
var work_count=0;
var mixed_count=0;
var index=0;
var max=0;
var max_col=2;
var max_grid_desc_char_count=50;
var max_grid_name_char_count=30;
var max_list_desc_char_count=130;
var temp=[];
var raw_html = "";
var view_type = "grid";
var current_tab = 1;
var pageName = location.href.split("/").slice(-1); 

function ResetData(){
	profile_count=0;
	work_count=0;
	mixed_count=0;
	index=0;
	temp = [];
	raw_html = "";
	$('.mixed-grid-container').empty(); $('.mixed-list-container').empty();
	$('.profile-grid-container').empty(); $('.profile-list-container').empty();
	$('.work-grid-container').empty(); $('.work-list-container').empty();
	$('.remove').remove();
}

function FormatIcon(data,dtype) {
  if(pageName == 'search'){
		if(!data.bookmark){
			dtype = dtype.replace("{icon-type}","assets/images/bookmark_1.png").replace("{tooltip}","บันทึก").replace("{status}","false");
		}else{ 
			dtype = dtype.replace("{icon-type}","assets/images/bookmark_2.png").replace("{tooltip}","ยกเลิกการบันทึก").replace("{status}","true");
		}
	}else{
		dtype = dtype.replace("{icon-type}","assets/images/bin.png").replace("{tooltip}","ลบ").replace("{status}","none");
	}
	return dtype;
}

function FormatEllipsis(type,text){
	if(type == 'desc-list'){
		if(text.length > max_list_desc_char_count) text = text.substring(0,max_list_desc_char_count)+'...';
	}else if(type == 'desc-grid'){
		if(text.length > max_grid_desc_char_count) text = text.substring(0,max_grid_desc_char_count)+'...';
	}else if(type == 'name-grid'){
		if(text.length > max_grid_name_char_count) text = text.substring(0,max_grid_name_char_count)+'...';
	}
	return text;
}

function AddMixedListEntity(data){
	console.log("Add new list");
	if(mixed_count > 0) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		
	var dtype = "";
	var valid_desc = FormatEllipsis('desc-list',data.desc);
	
	if(data.type == "profile") {
		if(data.tags.length > 0)
			dtype = profile_list.replace("{name}", data.name).replace("{img}", data.pic).replace("{desc}", valid_desc).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
		else
			dtype = profile_list_no_tag.replace("{name}", data.name).replace("{img}", data.pic).replace("{desc}", valid_desc);
	}else{
		dtype = work_list.replace("{name}", data.name).replace("{img}", data.pic).replace("{desc}", valid_desc).replace("{owner}", data.owner);
	}
	dtype = FormatIcon(data,dtype);
	
	raw_html += dtype;
	raw_html += '</div>'; // row close
	$('.mixed-list-container').append(raw_html);
	mixed_count += 1;
	raw_html = "";
}

function AddMixedGridEntity(data){
	console.log(data.tags);
	var row_filled = true;
	
	if(temp.length < max_col-1){ // store new data
		temp.push(data);
		row_filled = false;
	}
	//var valid_desc = FormatEllipsis('desc-grid',data.desc);
	var valid_name = FormatEllipsis('name-grid',data.name);
	var dtype = "";
	
	if(data.type == "profile") {
		if(data.tags.length > 0)
			dtype = profile_grid.replace("{name}", data.name).replace("{img}", data.pic).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
		else
			dtype = profile_grid_no_tag.replace("{name}", data.name).replace("{img}", data.pic);
	}else{
		var valid_name = FormatEllipsis('name-grid',data.name);
		dtype = work_grid.replace("{name}", valid_name).replace("{img}", data.pic).replace("{desc}", data.port).replace("{owner}", data.owner);
	}
	
	if(row_filled || (index == max)){// add 2 data as new row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";
		if(mixed_count > max_col-1) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		if(row_filled){
			for (let i = 0; i < temp.length; i++) {
				if(temp[i].type == "profile") {
					if(temp[i].tags.length > 0)
						ttype = profile_grid.replace("{name}", temp[i].name).replace("{img}", temp[i].pic).replace("{tag1}", temp[i].tags[0]).replace("{tag2}", temp[i].tags[1]).replace("{tag3}", temp[i].tags[2]);
					else
						ttype = profile_grid_no_tag.replace("{name}", temp[i].name).replace("{img}", temp[i].pic);
				}else{
					var valid_namet = FormatEllipsis('name-grid',temp[i].name);
					ttype = work_grid.replace("{name}", temp[i].name).replace("{img}", temp[i].pic).replace("{desc}", data.port).replace("{owner}", data.owner);
				}
				ttype = FormatIcon(temp[i],ttype);
				raw_html += '<div class="col-md-'+12/max_col+'">' + ttype + '</div>';
			}
		}
		
		dtype = FormatIcon(data,dtype);
		
		raw_html += '<div class="col-md-'+12/max_col+'">' + dtype + '</div>';
		
		raw_html += '</div>'; // row close
		
		$('.mixed-grid-container').append(raw_html); 
		temp = [];
		raw_html = "";
	}
	mixed_count += 1;
}

function AddProfileListEntity(data){
	console.log("Add new list");
	if(profile_count > 0) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
	var valid_desc = FormatEllipsis('desc-list',data.desc);
	var dtype = null;
	if(data.tags.length > 0)
		dtype = profile_list.replace("{name}", data.name).replace("{img}", data.pic).replace("{desc}", valid_desc).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
	else
		dtype = profile_list_no_tag.replace("{name}", data.name).replace("{img}", data.pic).replace("{desc}", valid_desc);
	dtype = FormatIcon(data,dtype);
	raw_html += dtype;
	raw_html += '</div>'; // row close
	$('.profile-list-container').append(raw_html);
	profile_count += 1;
	raw_html = "";
}

function AddProfileGridEntity(data){
	console.log(data.tags);
	var row_filled = true;
	
	if(temp.length < max_col-1){ // store new data
		temp.push(data);
		row_filled = false;
	}
	
	var valid_desc = FormatEllipsis('desc-grid',data.desc);
	
	if(row_filled || (index == max)){// add 2 data as new row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";
		if(profile_count > 1) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		if(row_filled){
			for (let i = 0; i < temp.length; i++) {
				var ttype = null;
				if(temp[i].tags.length > 0)
						ttype = profile_grid.replace("{name}", temp[i].name).replace("{img}", temp[i].pic).replace("{tag1}", temp[i].tags[0]).replace("{tag2}", temp[i].tags[1]).replace("{tag3}", temp[i].tags[2]);
					else
						ttype = profile_grid_no_tag.replace("{name}", temp[i].name).replace("{img}", temp[i].pic);
				ttype = FormatIcon(temp[i],ttype);
				raw_html += '<div class="col-md-6">' + ttype + '</div>';
			}
		}
		var dtype = null;
		if(data.tags.length > 0)
			dtype = profile_grid.replace("{name}", data.name).replace("{img}", data.pic).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
		else
			dtype = profile_grid_no_tag.replace("{name}", data.name).replace("{img}", data.pic);
		
		dtype = FormatIcon(data,dtype);
		raw_html += '<div class="col-md-6">' + dtype + '</div>';
		
		raw_html += '</div>'; // row close
		
		$('.profile-grid-container').append(raw_html); 
		temp = [];
		raw_html = "";
	}
	profile_count += 1;
}

function AddWorkListEntity(data){
	console.log("Add new list");
	if(work_count > 0) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		
	var valid_desc = FormatEllipsis('desc-list',data.desc);
	var dtype = work_list.replace("{name}", data.name).replace("{img}", data.pic).replace("{desc}", valid_desc).replace("{owner}", data.owner);
	dtype = FormatIcon(data,dtype);
	raw_html += dtype;
	raw_html += '</div>'; // row close
	$('.work-list-container').append(raw_html);
	work_count += 1;
	raw_html = "";
}

function AddWorkGridEntity(data){
	var row_filled = true;
	
	if(temp.length < max_col-1){ // store new data
		temp.push(data);
		row_filled = false;
	}
	var valid_desc = FormatEllipsis('desc-grid',data.desc);
	var valid_name = FormatEllipsis('name-grid',data.name);
	
	if(row_filled || (index == max)){// add 2 data as new row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";
		if(work_count > 1) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		if(row_filled){
			for (let i = 0; i < temp.length; i++) {
				var valid_namet = FormatEllipsis('name-grid',temp[i].name);
				var ttype = work_grid.replace("{name}", valid_namet).replace("{img}", temp[i].pic).replace("{desc}", temp[i].port).replace("{owner}", temp[i].owner);
				ttype = FormatIcon(temp[i],ttype);
				raw_html += '<div class="col-md-6">' + ttype +'</div>';
			}
		}
		var dtype = work_grid.replace("{name}", valid_name).replace("{img}", data.pic).replace("{desc}", data.port).replace("{owner}", data.owner);
		dtype = FormatIcon(data,dtype);
		raw_html += '<div class="col-md-6">' + dtype + '</div>';
		
		raw_html += '</div>'; // row close
		
		$('.work-grid-container').append(raw_html); 
		temp = [];
		raw_html = "";
	}
	work_count += 1;
}

function DisplayNotFound(){
	$('#result-count').text('จำนวน 0 รายการ');
	if(pageName == 'search')
		$('#content'+current_tab).find(">:first-child").append(not_found_search);
	else
		$('#content'+current_tab).find(">:first-child").append(not_found_bookmark);
}

function ReinitializeTooltips(){
	console.log("ReinitializeTooltips!");
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[toggle-type="dynamic"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		  return new bootstrap.Tooltip(tooltipTriggerEl)
		})
}

/*Load data from backend*/
function GetBookmarkData(request){
	var key = pageName
	if(key == 'search'){
		key += "_"+Cookies.get('search-entry').toLowerCase();
 	}else{
		key += "_"+Cookies.get('username');
	}
	
	console.log("https://nisitfolio.s3.ap-southeast-1.amazonaws.com/"+"sample_"+key+"_"+request);
	//http://localhost:3000/samples_json_for_testing (must upload to server first)/
	
	fetch("http://localhost:3000/samples_json_for_testing (must upload to server first)/"+"sample_"+key+"_"+request,{
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
			console.log(datas);
			console.log('BYAAA!!!!');
			ResetData();
			max = datas.length;
			$('#result-count').text('จำนวน '+max+' รายการ');
			datas.forEach((data) => {
				index += 1;
				console.log("check: "+data.name);
				if(data.type == "profile"){
					if(current_tab == 1){
						if(view_type == 'grid'){
							AddMixedGridEntity(data);
						}else{
							AddMixedListEntity(data);
						}
					}else if(current_tab == 2){
						if(view_type == 'grid'){
							AddProfileGridEntity(data);
						}else{
							AddProfileListEntity(data);
						}
					}else{
						// This is a profile & user is viewing work, skip it
						console.log("skip: "+data.name);
					}
				}else{
					if(current_tab == 1){
						if(view_type == 'grid'){
							AddMixedGridEntity(data);
						}else{
							AddMixedListEntity(data);
						}
					}else if(current_tab == 3){
						if(view_type == 'grid'){
							AddWorkGridEntity(data);
						}else{
							AddWorkListEntity(data);
						}
					}else{
						// This is a work & user is viewing profile, skip it
						console.log("skip: "+data.name);
					}
				}
			});
        }).catch((error) => {
			  console.log(error);
			  ResetData();
			  DisplayNotFound();
			});
		
		setTimeout(function() { ReinitializeTooltips(); },500);
		setTimeout(function() { AddListenerToDynamicComponents(); }, 500);
		
}

GetBookmarkData("data");

$(function(){
   $('.tab-content').hide();
   $('#content1').show();
  $('#tab-1').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-1').addClass('tab-list-active')
	  $('#content1').show();
	  current_tab = 1;
	  GetBookmarkData("data");
  });
  
  $('#tab-2').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-2').addClass('tab-list-active')
	  $('#content2').show();
	  current_tab = 2;
	  GetBookmarkData("data_profile");
  });
  
  $('#tab-3').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-3').addClass('tab-list-active')
	  $('#content3').show();
	  current_tab = 3;
	  GetBookmarkData("data_work");
  });
});

$(function(){

    $(".dropdown-item").click(function(){
      $("#dropdownMenuButton1").text($(this).text());
      $("#dropdownMenuButton1").val($(this).text());

   });

});

$(function(){
  $('div.list').hide();// hide it initially
  $('.layout-toggle').on('click', function(){
	  if (!$(this).hasClass('gridOn')) {
        $(this).attr('src', 'assets/images/outline_format_list_bulleted_black_48dp 3.png');
        $(this).addClass('gridOn')
		$('.list').hide();
		$('.grid').show();
		console.log("show grid!");
		view_type = "grid";
      } else  {
        $(this).attr('src', 'assets/images/outline_grid_view_black_48dp 2.png');
        $(this).removeClass('gridOn')
		$('.grid').hide();
		$('.list').show();
		console.log("show list!");
		view_type = "list";
      }

	  if(current_tab == 1)
			GetBookmarkData("data");
		else if(current_tab == 2)
			GetBookmarkData("data_profile");
		else
			GetBookmarkData("data_work");
  });
});

function AddListenerToDynamicComponents(){
	$('.tag').on('click', function(){
       //alert(event.target.text);
	   SearchByTag(event.target.text);
   });
   
   $(".obj-icon").unbind('click');
   $('.obj-icon').click(function() {  
		console.log("change icon--!!!");
	  //alert(this.id);
	  if (this.id == 'true') {
        $(this).attr('src', 'assets/images/bookmark_1.png');
		$(this).attr('data-bs-original-title', 'บันทึก');
		$(this).attr('id', 'false');
		console.log("Remove bookmark!");
      }else if(this.id == 'false'){
		$(this).attr('src', 'assets/images/bookmark_2.png');
		$(this).attr('data-bs-original-title', 'ยกเลิกการบันทึก');
		$(this).attr('id', 'true');
		console.log("Add bookmark!");
	  }
	  $(this).tooltip('hide');
	  //setTimeout(function() { ReinitializeTooltips();  }, 500);
	  //$(this).tooltip('show'); });

});
}


function SearchByTag(text){
	console.log("tag clicked!");
	Cookies.set('search-entry', text);
	console.log("saved user's input: "+Cookies.get('search-entry')+"as cookies!");
	window.location.assign("/search");
}