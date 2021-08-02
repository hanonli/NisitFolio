console.log("Run bookmark script!");

var profile_grid = '<header class="header round">\
					<div class="container-fluid bookmark-margin">\
						<div class="row">\
							<div class="col">\
								<img class="bookmark-profile-image img-fluid float-start rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" />\
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />\
								<div class="bookmark-content">\
									<h1 class="name inline">{name}</h1>\
									<img class="obj-icon" src="assets/images/bin.png" type="button" alt="" width="35" height="35"/>\
									<div></div>\
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">{tag1}</a>\
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">{tag2}</a>\
									<a class="btn btn-cta-secondary btn-small round" href="#" target="_blank">{tag3}</a>\
								</div>\
							</div>\
						</div>\
					</div>\
				</header>';

var profile_list = '<div class="col-12">\
							<header class="header round">\
							<div class="container-fluid bookmark-margin">\
								<div class="row">\
									<div class="col-5">\
										<img class="bookmark-profile-image img-fluid float-start rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" />\
										<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />\
										<div class="bookmark-content">\
											<h1 class="name inline">{name}</h1><div></div>\
											<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">{tag1}</a>\
											<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">{tag2}</a>\
											<a class="btn btn-cta-secondary btn-small round" href="#" target="_blank">{tag3}</a>\
										</div>\
									</div>\
									<div class="col-5 bookmark-list-column d-flex align-items-center justify-content-center">\
										<div class="bookmark-content">\
											<h2 class="bookmark-desc" >I am an ordinary ordinary guy who wants to be a great developer. However, one day I met another guy named Fa_ and I realize that he has already achieved my dream. However, one day I met another guy named Fa_ and I realize that he has already achieved my dream.</h2>\
										</div>\
									</div>\
									<div class="col-2">\
										<div class="bookmark-content">\
											<img class="obj-icon" src="assets/images/bin.png" type="button" alt="" width="35" height="35"/>\
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
							<div class="col-10">\
								<img class="bookmark-profile-image float-start round" type="button" id="avatar" src="{img}" alt="profile image" width="225" height="150"/>\
								<div class="bookmark-content">\
									<h1 class="name inline">{name}</h1>\
									<h2 class="bookmark-work-desc" >Portfolio - 4 รูปภาพ</h2>\
									<h2 class="bookmark-work-desc" >ผลงานของ วรเมศ ผดุงเจริญ</h2>\
								</div>\
							</div>\
							<div class="col-2">\
								<div class="bookmark-content">\
									<img class="obj-icon" src="assets/images/bin.png" type="button" alt="" width="35" height="35"/>\
								</div>\
							</div>\
						</div>\
					</div>\
				</header>';
				
var work_list = '<div class="col-12">\
							<header class="header round">\
					<div class="container-fluid bookmark-margin">\
						<div class="row">\
							<div class="col-10">\
								<img class="bookmark-profile-image float-start round" type="button" id="avatar" src="{img}" alt="profile image" width="225" height="150"/>\
								<div class="bookmark-content">\
									<h1 class="name inline">{name}</h1>\
									<h2 class="bookmark-work-desc" >Portfolio - 4 รูปภาพ</h2>\
									<h2 class="bookmark-work-desc" >ผลงานของ วรเมศ ผดุงเจริญ</h2>\
								</div>\
							</div>\
							<div class="col-2">\
								<div class="bookmark-content">\
									<img class="obj-icon" src="assets/images/bin.png" type="button" alt="" width="35" height="35"/>\
								</div>\
							</div>\
						</div>\
					</div>\
				</header>\
					</div>';
					
var profile_count=0;
var work_count=0;
var mixed_count=0;
var index=0;
var max=0;
var temp=null;
var raw_html = "";
var view_type = "grid";
var current_tab = 1;

function ResetData(){
	profile_count=0;
	work_count=0;
	mixed_count=0;
	index=0;
	temp=null;
	raw_html = "";
	$('.mixed-grid-container').empty(); $('.mixed-list-container').empty();
	$('.profile-grid-container').empty(); $('.profile-list-container').empty();
	$('.work-grid-container').empty(); $('.work-list-container').empty();
}

function AddMixedListEntity(data){
	console.log("Add new list");
	if(mixed_count > 0) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		
	var dtype = "";
	if(data.type == "profile") {
		dtype = profile_list.replace("{name}", data.name).replace("{img}", data.pic).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
	}else{
		dtype = work_list.replace("{name}", data.name).replace("{img}", data.pic);
	}
	
	raw_html += dtype;
	raw_html += '</div>'; // row close
	$('.mixed-list-container').append(raw_html);
	mixed_count += 1;
	raw_html = "";
}

function AddMixedGridEntity(data){
	console.log(data.tags);
	var even = true;
	
	if(temp == null){ // store new data
		temp = data;
		even = false;
	}
	
	var dtype = "";
	
	if(data.type == "profile") {
		dtype = profile_grid.replace("{name}", data.name).replace("{img}", data.pic).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
	}else{
		dtype = work_grid.replace("{name}", data.name).replace("{img}", data.pic);
	}
	
	if(even || (index == max)){// add 2 data as new row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";
		if(mixed_count > 1) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		if(even){
			if(temp.type == "profile") {
				ttype = profile_grid.replace("{name}", temp.name).replace("{img}", temp.pic).replace("{tag1}", temp.tags[0]).replace("{tag2}", temp.tags[1]).replace("{tag3}", temp.tags[2]);
			}else{
				ttype = work_grid.replace("{name}", temp.name).replace("{img}", temp.pic);
			}
			raw_html += '<div class="col-md-6">' + ttype + '</div>';
		}
		raw_html += '<div class="col-md-6">' + dtype + '</div>';
		
		raw_html += '</div>'; // row close
		
		$('.mixed-grid-container').append(raw_html); 
		temp = null;
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
	raw_html += profile_list.replace("{name}", data.name).replace("{img}", data.pic).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]);
	raw_html += '</div>'; // row close
	$('.profile-list-container').append(raw_html);
	profile_count += 1;
	raw_html = "";
}

function AddProfileGridEntity(data){
	console.log(data.tags);
	var even = true;
	
	if(temp == null){ // store new data
		temp = data;
		even = false;
	}
	
	if(even || (index == max)){// add 2 data as new row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";
		if(profile_count > 1) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		if(even){
			raw_html += '<div class="col-md-6">' + 
						profile_grid.replace("{name}", temp.name).replace("{img}", temp.pic).replace("{tag1}", temp.tags[0]).replace("{tag2}", temp.tags[1]).replace("{tag3}", temp.tags[2]) + 
						'</div>';
		}
		raw_html += '<div class="col-md-6">' + 
					profile_grid.replace("{name}", data.name).replace("{img}", data.pic).replace("{tag1}", data.tags[0]).replace("{tag2}", data.tags[1]).replace("{tag3}", data.tags[2]) +
					'</div>';
		
		raw_html += '</div>'; // row close
		
		$('.profile-grid-container').append(raw_html); 
		temp = null;
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
	raw_html += work_list.replace("{name}", data.name).replace("{img}", data.pic);
	raw_html += '</div>'; // row close
	$('.work-list-container').append(raw_html);
	work_count += 1;
	raw_html = "";
}

function AddWorkGridEntity(data){
	var even = true;
	
	if(temp == null){ // store new data
		temp = data;
		even = false;
	}
	
	if(even || (index == max)){// add 2 data as new row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";
		if(work_count > 1) 
			raw_html += '<div class="row bookmark-row-top-buffer">'; //row start
		else
			raw_html += '<div class="row">'; //first row start
		if(even){
			raw_html += '<div class="col-md-6">' + 
						work_grid.replace("{name}", temp.name).replace("{img}", temp.pic) + 
						'</div>';
		}
		raw_html += '<div class="col-md-6">' + 
					work_grid.replace("{name}", data.name).replace("{img}", data.pic) +
					'</div>';
		
		raw_html += '</div>'; // row close
		
		$('.work-grid-container').append(raw_html); 
		temp = null;
		raw_html = "";
	}
	work_count += 1;
}


/*Load data from backend*/
function GetBookmarkData(path){
	fetch("http://localhost:3000/"+path,{
        method: "GET",
         headers: {
			//"Access-Control-Allow-Origin": "*",
			//"Access-Control-Allow-Methods": "*",
			//"Access-Control-Allow-Credentials": true,
			"Content-Type": "application/json"},
    })
		.then(response => response.json())
		.then(response => response.result)
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
        });
}

GetBookmarkData("sample_bookmark_data");

$(function(){
   $('.tab-content').hide();
   $('#content1').show();
  $('#tab-1').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-1').addClass('tab-list-active')
	  $('#content1').show();
	  current_tab = 1;
	  GetBookmarkData("sample_bookmark_data");
  });
  
  $('#tab-2').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-2').addClass('tab-list-active')
	  $('#content2').show();
	  current_tab = 2;
	  GetBookmarkData("sample_bookmark_data_profile");
  });
  
  $('#tab-3').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-3').addClass('tab-list-active')
	  $('#content3').show();
	  current_tab = 3;
	  GetBookmarkData("sample_bookmark_data_work");
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
			GetBookmarkData("sample_bookmark_data");
		else if(current_tab == 2)
			GetBookmarkData("sample_bookmark_data_profile");
		else
			GetBookmarkData("sample_bookmark_data_work");
  });
});