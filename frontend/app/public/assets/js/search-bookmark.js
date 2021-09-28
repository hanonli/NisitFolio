console.log("Run bookmark script!");
Cookies.set('username','worames'); 
console.log('Currently login as: '+Cookies.get('username'));

var profile_grid = '<header class="header hsbm-pad round">\
						<div class="pf-entity-flex">\
							<div class="pf-start">\
								<img class=" pf-image rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" />\
							</div>\
							<div class="pf-center">\
								<div class="pf-name pf-name-wt">{name}</div>\
								{tags}\
							</div>\
							<div class="pf-end">\
								<img class="tooltips-item obj-icon" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
							</div>\
						</div>\
					</header>';

var profile_list = '<div class="sbm-list-entity">\
						<header class="header hsbm-pad round">\
							<div class="pf-entity-flex">\
								<div class="pf-start-list">\
									<img class=" pf-image rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" />\
								</div>\
								<div class="pf-center-list">\
									<div class="pf-name pf-name-wt">{name}</div>\
									{tags}\
								</div>\
								<div class="pf-list-info">\
									<div class="bookmark-desc" >{desc}</div>\
								</div>\
								<div class="pf-end-list">\
									<img class="tooltips-item obj-icon" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
								</div>\
							</div>\
						</header>\
					</div>';

var tag_entity = '<a class="lg-view pft btn btn-cta-secondary btn-small round no-margin tag" target="_blank">{tag}</a>';
					
var profile_grid_no_tag = '<header class="header hsbm-pad round">\
								<div class="pf-entity-flex">\
									<div class="pf-start">\
										<img class=" pf-image rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" />\
									</div>\
									<div class="pf-center">\
										<div class="pf-name">{name}</div>\
										<div class="no-tag-desc lg-view">ผู้ใช้นี้ยังไม่มีตำแหน่งงานที่<br>ต้องการ หรือหน้า MyResume</div>\
									</div>\
									<div class="pf-end">\
										<img class="nt-image lg-view" src="assets/images/outline_cancel_black_24dp 1.png" alt=""/>\
									</div>\
								</div>\
							</header>';
				
var profile_list_no_tag = '<div class="sbm-list-entity">\
								<header class="header hsbm-pad round">\
									<div class="pf-entity-flex">\
										<div class="pf-start-list">\
											<img class=" pf-image rounded-circle" type="button" id="avatar" src="{img}" alt="profile image" />\
										</div>\
										<div class="pf-center-list">\
											<div class="pf-name">{name}</div>\
										</div>\
										<div class="nfnf-i md-view">\
											<img class="" src="assets/images/outline_cancel_black_24dp 1.png" alt="" width="100" height="100"/>\
										</div>\
										<div class="pf-list-info nfnf">\
											<div class=" md-view bookmark-desc" >ผู้ใช้นี้ยังไม่มีตำแหน่งงานที่ต้องการ หรือหน้า MyResume</div>\
										</div>\
										<div class="pf-end-list">\
										</div>\
									</div>\
								</header>\
							</div>';
					
var work_grid = '<header class="header hsbm-pad round">\
					<div class="pf-entity-flex">\
						<div class="pf-start-port">\
							<img class="pf-port-image round" type="button" id="avatar" src="{img}" />\
						</div>\
						<div class="pf-center-port">\
							<div class="pf-port-name">{name}</div>\
							<div class="pf-port-desc lg-view">Portfolio - {desc} รูปภาพ</div>\
							<div class="pf-port-desc" >ผลงานของ {owner}</div>\
						</div>\
						<div class="pf-end">\
							<img class="tooltips-item obj-icon" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
						</div>\
					</div>\
				</header>';
				
var work_list = '<div class="sbm-list-entity">\
					<header class="header hsbm-pad round">\
						<div class="pf-entity-flex">\
							<div class="pf-start-port-list">\
								<img class="pf-port-image round" type="button" id="avatar" src="{img}" />\
							</div>\
							<div class="pf-center-port-list">\
								<div class="pf-port-name-list">{name}</div>\
								<div class="pf-port-desc-list lg-view">{desc}</div>\
								<div class="pf-port-desc-list" >ผลงานของ {owner}</div>\
							</div>\
							<div class="pf-end-list">\
								<img class="tooltips-item obj-icon" src="{icon-type}" id="{status}" type="button" data-bs-toggle="tooltip" toggle-type="dynamic" data-bs-placement="bottom" title="{tooltip}" alt="" width="30" height="30"/>\
							</div>\
						</div>\
					</header>\
				</div>';
					
var not_found_search = '<div class="nf-flex">\
							<header class="header header-white nf-header round remove">\
								<img class="nf-i" src="assets/images/outline_cancel_grey_24dp hd.png" alt=""/>\
								<agf class="nf-n">ขออภัยด้วยแต่เราไม่พบข้อมูลการค้นหาของคุณ</agf>\
							</header>\
						</div>'

var not_found_bookmark = '<div class="nf-flex">\
							<header class="header header-white nf-header round remove">\
								<img class="nf-i" src="assets/images/outline_cancel_grey_24dp hd.png" alt=""/>\
								<agf class="nf-n">ขออภัยด้วยแต่เราไม่พบข้อมูล Bookmark ของคุณ</agf>\
							</header>\
						</div>'

var profileCount=0;
var workCount=0;

var profileIndex=0;
var workIndex=0;

var index=0;
var max=0;
var max_col=2;
var max_grid_desc_char_count=50;
var max_list_desc_char_count=130;
var temp=[];
var raw_html = "";
var view_type = "grid";
var current_tab = 1;
var pageName = location.href.split("/").slice(-1); 

var entityId = 0;
var entityIdInfo = [];

var currentTooltip = null;

ClearCache(); // gotta need this line for changing between search & bookmark

function ResetData(){
	index=0;
	profileIndex=0;
	workIndex=0;
	temp = [];
	raw_html = "";
	$('.mixed-grid-container').empty(); $('.mixed-list-container').empty();
	$('.profile-grid-container').empty(); $('.profile-list-container').empty();
	$('.work-grid-container').empty(); $('.work-list-container').empty();
	$('.remove').remove();
}

function FormatIcon(data,dtype) {
  if(pageName == 'search'){
		if(data.bookmark == "false") {
			entityIdInfo.push("false"+"-"+data.thatUserId+'&'+data.type+'&'+data.name);
			dtype = dtype.replace("{icon-type}","assets/images/bookmark_1.png").replace("{tooltip}","บันทึก").replace("{status}",entityId);
		}else {
			entityIdInfo.push("true"+"-"+data.thatUserId+'&'+data.type+'&'+data.name);
			dtype = dtype.replace("{icon-type}","assets/images/bookmark_2.png").replace("{tooltip}","ยกเลิกการบันทึก").replace("{status}",entityId);
		}
	}else{
		entityIdInfo.push(data.thatUserId+'&'+data.type+'&'+data.name);
		dtype = dtype.replace("{icon-type}","assets/images/bin.png").replace("{tooltip}","ลบ").replace("{status}",entityId);
	}
	entityId += 1;
	return dtype;
}

function FormatEllipsis(type,text){
	if(text === null) return '';
	
	if(type == 'desc-list'){
		if(text.length > max_list_desc_char_count) text = text.substring(0,max_list_desc_char_count)+'...';
	}else if(type == 'desc-grid'){
		if(text.length > max_grid_desc_char_count) text = text.substring(0,max_grid_desc_char_count)+'...';
	}
	return text;
}

function AddMixedListEntity(data){
	console.log("Add new list");
		
	var dtype = "";
	var valid_desc = FormatEllipsis('desc-list',data.about);
	
	var pcc = data.profilePic;
	if(pcc === null) pcc = "assets/images/profile_uk.png";
	
	if(data.type == "profile") {
		if(data.jobs.length > 0){
			//prepare tags
			var tags = tag_entity.replace('{tag}',data.jobs[0]);
			if(data.jobs.length > 1)  tags += tag_entity.replace('{tag}',data.jobs[1]);
			if(data.jobs.length > 2)  tags += tag_entity.replace('{tag}',data.jobs[2]);
			dtype = profile_list.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", valid_desc).replace("{tags}", tags);
		}else{
			dtype = profile_list_no_tag.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", valid_desc);
		}
	}else{
		dtype = work_list.replace("{name}", data.name).replace("{img}", data.profilePic).replace("{desc}", valid_desc).replace("{owner}", data.owner);
	}
	dtype = FormatIcon(data,dtype);
	
	raw_html += dtype;
	$('.mixed-list-container').append(raw_html);
	raw_html = "";
}

function AddMixedGridEntity(data){
	console.log(data.jobs);
	var row_filled = true;
	
	if(temp.length < max_col-1){ // store new data
		temp.push(data);
		row_filled = false;
	}
	var valid_desc = FormatEllipsis('desc-grid',data.about);
	var dtype = "";
	
	var pcc = data.profilePic;
	if(pcc === null) pcc = "assets/images/profile_uk.png";
		
	
	if(data.type == "profile") {
		if(data.jobs.length > 0){
			//prepare tags
			var tags = tag_entity.replace('{tag}',data.jobs[0]);
			if(data.jobs.length > 1)  tags += tag_entity.replace('{tag}',data.jobs[1]);
			if(data.jobs.length > 2)  tags += tag_entity.replace('{tag}',data.jobs[2]);
			dtype = profile_grid.replace("{name}", data.name).replace("{img}", pcc).replace("{tags}", tags);
			//console.log('replaced: '+tags);
		}else{
			dtype = profile_grid_no_tag.replace("{name}", data.name).replace("{img}", pcc);
		}
	}else{
		dtype = work_grid.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", data.port).replace("{owner}", data.owner);
	}
	
	if(row_filled || (index == max)){// add 2 data as new row || add last entity to last row
		console.log("add new GRID: "+index+" : "+data.name + " max: " + max);
		raw_html = "";

		if(row_filled){
			for (let i = 0; i < temp.length; i++) {
				var tcc = temp[i].profilePic;
				if(tcc === null) tcc = "assets/images/profile_uk.png";
				if(temp[i].type == "profile") {
					if(temp[i].jobs.length > 0){
						//prepare tags
						var tags = tag_entity.replace('{tag}',temp[i].jobs[0]);
						if(temp[i].jobs.length > 1)  tags += tag_entity.replace('{tag}',temp[i].jobs[1]);
						if(temp[i].jobs.length > 2)  tags += tag_entity.replace('{tag}',temp[i].jobs[2]);
						ttype = profile_grid.replace("{name}", temp[i].name).replace("{img}", tcc).replace("{tags}", tags);
					}else{
						ttype = profile_grid_no_tag.replace("{name}", temp[i].name).replace("{img}", tcc);
					}
				}else{
					ttype = work_grid.replace("{name}", temp[i].name).replace("{img}", tcc).replace("{desc}", temp[i].port).replace("{owner}", temp[i].owner);
				}
				ttype = FormatIcon(temp[i],ttype);
				raw_html += '<div class="sbm-grid-entity">' + ttype + '</div>';
			}
		}
		
		dtype = FormatIcon(data,dtype);
		
		raw_html += '<div class="sbm-grid-entity">' + dtype + '</div>';
		
		if(!row_filled && index == max) //last row has only single item, add a dummy to even the row
			raw_html += '<div class="sbm-grid-entity" />';
		
		console.log(raw_html);
		$('#fffuuu').append(raw_html); 
		temp = [];
		raw_html = "";
	}
}

function AddProfileListEntity(data){
	console.log("Add new list");
	var valid_desc = FormatEllipsis('desc-list',data.about);
	var dtype = null;
	var pcc = data.profilePic;
	if(pcc === null) pcc = "assets/images/profile_uk.png";
	
	if(data.jobs.length > 0){
		//prepare tags
		var tags = tag_entity.replace('{tag}',data.jobs[0]);
		if(data.jobs.length > 1)  tags += tag_entity.replace('{tag}',data.jobs[1]);
		if(data.jobs.length > 2)  tags += tag_entity.replace('{tag}',data.jobs[2]);
		dtype = profile_list.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", valid_desc).replace("{tags}", tags);
	}else{
		dtype = profile_list_no_tag.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", valid_desc);
	}
	dtype = FormatIcon(data,dtype);
	raw_html += dtype;
	$('.profile-list-container').append(raw_html);
	raw_html = "";
}

function AddProfileGridEntity(data){
	console.log(data.jobs);
	var row_filled = true;
	
	if(temp.length < max_col-1){ // store new data
		temp.push(data);
		row_filled = false;
	}
	
	var valid_desc = FormatEllipsis('desc-grid',data.about);
	
	var pcc = data.profilePic;
	if(pcc === null) pcc = "assets/images/profile_uk.png";
	
	if(row_filled || (profileIndex == profileCount)){// add 2 data as new row
		console.log("add new GRID: "+profileIndex+" : "+data.name + " max: " + profileCount);
		raw_html = "";
		if(row_filled){
			for (let i = 0; i < temp.length; i++) {
				var tcc = temp[i].profilePic;
				if(tcc === null) tcc = "assets/images/profile_uk.png";
				var ttype = null;
				if(temp[i].jobs.length > 0){
					//prepare tags
					var tags = tag_entity.replace('{tag}',temp[i].jobs[0]);
					if(temp[i].jobs.length > 1)  tags += tag_entity.replace('{tag}',temp[i].jobs[1]);
					if(temp[i].jobs.length > 2)  tags += tag_entity.replace('{tag}',temp[i].jobs[2]);
					ttype = profile_grid.replace("{name}", temp[i].name).replace("{img}", tcc).replace("{tags}", tags);
				}else{
					ttype = profile_grid_no_tag.replace("{name}", temp[i].name).replace("{img}", tcc);
				}
				ttype = FormatIcon(temp[i],ttype);
				raw_html += '<div class="sbm-grid-entity">' + ttype + '</div>';
			}
		}
		var dtype = null;
		if(data.jobs.length > 0){
			//prepare tags
			var tags = tag_entity.replace('{tag}',data.jobs[0]);
			if(data.jobs.length > 1)  tags += tag_entity.replace('{tag}',data.jobs[1]);
			if(data.jobs.length > 2)  tags += tag_entity.replace('{tag}',data.jobs[2]);
			dtype = profile_grid.replace("{name}", data.name).replace("{img}", pcc).replace("{tags}", tags);
		}else{
			dtype = profile_grid_no_tag.replace("{name}", data.name).replace("{img}", pcc);
		}
		dtype = FormatIcon(data,dtype);
		raw_html += '<div class="sbm-grid-entity">' + dtype + '</div>';
		
		if(!row_filled && profileIndex == profileCount) //last row has only single item, add a dummy to even the row
			raw_html += '<div class="sbm-grid-entity" />';
		
		$('.profile-grid-container').append(raw_html); 
		temp = [];
		raw_html = "";
	}
}

function AddWorkListEntity(data){
	console.log("Add new list");
	var pcc = data.profilePic;
	if(pcc === null) pcc = "assets/images/profile_uk.png";
	
	var valid_desc = FormatEllipsis('desc-list',data.about);
	var dtype = work_list.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", valid_desc).replace("{owner}", data.owner);
	dtype = FormatIcon(data,dtype);
	raw_html += dtype;

	$('.work-list-container').append(raw_html);
	raw_html = "";
}

function AddWorkGridEntity(data){
	var row_filled = true;
	
	if(temp.length < max_col-1){ // store new data
		temp.push(data);
		row_filled = false;
	}
	var valid_desc = FormatEllipsis('desc-grid',data.about);
	var pcc = data.profilePic;
	if(pcc === null) pcc = "assets/images/profile_uk.png";
	
	if(row_filled || (workIndex == workCount)){// add 2 data as new row
		console.log("add new GRID: "+workIndex+" : "+data.name + " max: " + workCount);
		raw_html = "";
		
		if(row_filled){
			for (let i = 0; i < temp.length; i++) {
				var pcc = temp[i].profilePic;
				if(pcc === null) pcc = "assets/images/profile_uk.png";
				var ttype = work_grid.replace("{name}", temp[i].name).replace("{img}", pcc).replace("{desc}", temp[i].port).replace("{owner}", temp[i].owner);
				ttype = FormatIcon(temp[i],ttype);
				raw_html += '<div class="sbm-grid-entity">' + ttype +'</div>';
			}
		}
		var dtype = work_grid.replace("{name}", data.name).replace("{img}", pcc).replace("{desc}", data.port).replace("{owner}", data.owner);
		dtype = FormatIcon(data,dtype);
		raw_html += '<div class="sbm-grid-entity">' + dtype + '</div>';
		
		if(!row_filled && workIndex == workCount) //last row has only single item, add a dummy to even the row
			raw_html += '<div class="sbm-grid-entity" />';
		
		
		$('.work-grid-container').append(raw_html); 
		temp = [];
		raw_html = "";
	}
}

function DisplayNotFound(){
	$('#result-count').text('จำนวน 0 รายการ');
	if(pageName == 'search'){
		if(view_type == 'grid')
			$('#content'+current_tab).find(">:first-child").append(not_found_search);
		else
			$('#content'+current_tab).find(">:last-child").append(not_found_search);
			
	}else{
		if(view_type == 'grid')
			$('#content'+current_tab).find(">:first-child").append(not_found_bookmark);
		else
			$('#content'+current_tab).find(">:last-child").append(not_found_bookmark);
	}
}

function ReinitializeTooltips(){
	console.log("ReinitializeTooltips!");
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[toggle-type="dynamic"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		  return new bootstrap.Tooltip(tooltipTriggerEl)
		})
}

//Load data from backend
/*function GetSearchBookmarkData(request){
	var key = pageName
	if(key == 'search'){
		key += "_"+Cookies.get('search-entry').toLowerCase();
 	}else{
		key += "_"+Cookies.get('username');
	}
	
	console.log("https://nisitfolio.s3.ap-southeast-1.amazonaws.com/"+"sample_"+key+"_"+request);

	fetch("https://nisitfolio.s3.ap-southeast-1.amazonaws.com/"+"sample_"+key+"_"+request,{
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
		setTimeout(function() { ReinitializeTooltips(); }, 500);
}

GetSearchBookmarkData("data");*/

function GetFormattedBookmarkData(datas){
	//alert('Format Bookmark!');
	//console.log(datas);
	var fData = [];
	datas.forEach((data) => {
		//alert(data.thatUserId);
		var datt = {};
		if(data.type == "profile") {
			datt['type'] = data.type;
			datt['thatUserId'] = data.thatUserId;
			datt['name'] = data.details.name;
			datt['profilePic'] = data.details.pic;
			datt['about'] = data.details.about;
			datt['jobs'] = data.details.tags;
			datt['totalBookmarks'] = data.totalBookmark;
			fData.push(datt);
		}else{
			datt['type'] = data.type;
			datt['thatUserId'] = data.thatUserId;
			datt['name'] = data.projectName;
			datt['profilePic'] = data.details.Port_Pic;
			datt['about'] = data.details.Port_Info;
			datt['owner'] = data.details.owner;
			datt['port'] = data.details.numberOfPic;
			datt['totalBookmarks'] = data.totalBookmark;
			fData.push(datt);
		}
	});
	return fData;
}

function GetFormattedSearchData(datas){
	var fData = [];
	datas.forEach((data) => {
		//alert(data.thatUserId);
		var datt = {};
		if(data.type == "profile") {
			datt['type'] = data.type;
			datt['thatUserId'] = data.thatUserId;
			datt['name'] = data.name;
			datt['profilePic'] = data.pic;
			datt['about'] = data.about;
			datt['jobs'] = data.tags;
			datt['bookmark'] = data.bookmark;
			fData.push(datt);
		}else{
			datt['type'] = data.type;
			datt['thatUserId'] = data.thatUserId;
			datt['name'] = data.name;
			datt['profilePic'] = data.pic[0].Pic[0];
			datt['about'] = data.about;
			datt['owner'] = data.owner;
			datt['port'] = data.pic.length;
			datt['bookmark'] = data.bookmark;
			fData.push(datt);
		}
	});
	return fData;
}

var userId = null;
//userId = '6142fd75f8b2b96640bc542d';
//alert('userId: '+$('#cachedId').text());
var sortType = "time";

userId = $('#cachedId').text();
GetSearchBookmarkData();
//alert(Cookies.get('login-token'););

var cacheDataTime = null;
var cacheDataTotal = null;

function ClearCache(){
	cacheDataTime = null; 
	cacheDataTotal = null;
	entityId=0;
	entityIdInfo=[];
}

function InitializeSBM(cacheData){
	profileCount = 0; workCount = 0;
	cacheData.forEach((data) => {
		if(data.type == "profile") profileCount += 1;
		else workCount += 1;
	});
	max = cacheData.length;
	
	var found = false;
	console.log(cacheData);
	console.log('BYAAA!!!!');
	ResetData();
	if(current_tab == 1) $('#result-count').text('จำนวน '+max+' รายการ');
	else if(current_tab == 2) $('#result-count').text('จำนวน '+profileCount+' รายการ');
	else  $('#result-count').text('จำนวน '+workCount+' รายการ');
	console.log(cacheData);
	cacheData.forEach((data) => {
		index += 1;
		console.log("check: "+data.name);
		if(data.type == "profile"){
			if(current_tab == 1){
				found = true;
				profileIndex += 1;
				if(view_type == 'grid'){
					AddMixedGridEntity(data);
				}else{
					AddMixedListEntity(data);
				}
			}else if(current_tab == 2){
				found = true;
				profileIndex += 1;
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
				found = true;
				workIndex += 1;
				if(view_type == 'grid'){
					AddMixedGridEntity(data);
				}else{
					AddMixedListEntity(data);
				}
			}else if(current_tab == 3){
				found = true;
				workIndex += 1;
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
	
	if(!found){
		DisplayNotFound();
	}
	if(currentTooltip != null)
		currentTooltip.tooltip('hide');
	
	ReinitializeTooltips();
	AddListenerToDynamicComponents();
	//setTimeout(function() { ReinitializeTooltips(); }, 500);
	//setTimeout(function() { AddListenerToDynamicComponents(); }, 500);
}

function GetSearchBookmarkData(){
	entityId = 0;
	
	if(sortType == 'time' && cacheDataTime != null){ // already fetch once
		InitializeSBM(cacheDataTime);
		return;
	}
	if(sortType == 'total' && cacheDataTotal != null){ // already fetch once
		InitializeSBM(cacheDataTotal);
		return;
	}
	
	var q = Cookies.get('search-entry');
	var path = pageName == 'search' ? "http://localhost:2000/search/top?q="+q+"&userId="+userId : "http://localhost:2000/bookmark/"+userId+"&&"+sortType;
	
	fetch(path,{
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

			if(pageName == "search"){
				if(sortType == 'time'){
					cacheDataTime = GetFormattedSearchData(datas);
					InitializeSBM(cacheDataTime);
				}
				else{
					cacheDataTotal = GetFormattedSearchData(datas);
					InitializeSBM(cacheDataTotal);
				}
			}else{
				if(sortType == 'time'){
					cacheDataTime = GetFormattedBookmarkData(datas);
					InitializeSBM(cacheDataTime);
				}
				else{
					cacheDataTotal = GetFormattedBookmarkData(datas);
					InitializeSBM(cacheDataTotal);
				}
			}
			
        }).catch((error) => {
			  console.log(error);
			  ResetData();
			  DisplayNotFound();
			});
		
}

$(function(){
   $('.tab-content').hide();
   $('#content1').show();
  $('#tab-1').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item-p').removeClass('tab-list-active');
	  $('#tab-1').addClass('tab-list-active')
	  $('#content1').show();
	  current_tab = 1;
	  GetSearchBookmarkData();
  });
  
  $('#tab-2').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item-p').removeClass('tab-list-active');
	  $('#tab-2').addClass('tab-list-active')
	  $('#content2').show();
	  current_tab = 2;
	  GetSearchBookmarkData();
  });
  
  $('#tab-3').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item-p').removeClass('tab-list-active');
	  $('#tab-3').addClass('tab-list-active')
	  $('#content3').show();
	  current_tab = 3;
	  GetSearchBookmarkData();
  });
});

$(function(){
    $(".dropdown-item").click(function(){
      $("#dropdownMenuButton1").text($(this).text());
      $("#dropdownMenuButton1").val($(this).text());
   });

   $("#sort-time").click(function(){ sortType = 'time'; ClearCache(); GetSearchBookmarkData(); });
   $("#sort-total").click(function(){ sortType = 'total'; ClearCache(); GetSearchBookmarkData(); });
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
	  GetSearchBookmarkData();
  });
});

function DeleteBookmark(id){
	console.log('DeleteBookmark: '+id);
	
	var delData = {};
	alert(id);
	var temp = id.split("&");
	delData['userId'] = userId;
	delData['type'] = temp[1];
	delData['thatUserId'] = temp[0];
	if(temp[1] != 'profile') delData['projectName'] = temp[2];
	
	fetch("http://localhost:2000/bookmark/saveBookmark",{
		method: "DELETE",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Credentials": true,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(delData),
	})
		.then(response =>  {
			//console.log(datas);
			console.log(response);
			if(pageName == "bookmark"){
				ClearCache();
				GetSearchBookmarkData();
			}
		})
		.catch((error) => {
			console.log('delete Error!');
			//this.setState({ redirect: "/landing" });
		});
}

function AddBookmark(id){
	console.log('AddBookmark: '+id);
	
	var addData = {};
	var temp = id.split("&");
	addData['userId'] = userId;
	addData['type'] = temp[1];
	addData['thatUserId'] = temp[0];
	if(temp[1] != 'profile') addData['projectName'] = temp[2];
	
	fetch("http://localhost:2000/bookmark/saveBookmark",{
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Credentials": true,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(addData),
	})
		.then(response =>  {
			//console.log(datas);
			console.log(response);
			//GetSearchBookmarkData();
		})
		.catch((error) => {
			console.log('add Error!');
			//this.setState({ redirect: "/landing" });
		});
}

function AddListenerToDynamicComponents(){
	if($('#tpId').text() != 'user' && pageName == 'search'){ // hide for public
		$('.obj-icon').hide();
		return;
	}
	
	if(view_type != 'grid'){
		$('.obj-icon').addClass('ic-margin');
	}else{
		$('.obj-icon').removeClass('ic-margin');
	}
	
	//alert(pageName);
	$('.tag').on('click', function(){
       //alert(event.target.text);
	   SearchByTag(event.target.text);
   });
   
   $(".obj-icon").unbind('click');
   $('.obj-icon').click(function() {
	  // alert(pageName);
	   if(pageName == "search"){
		  //console.log("change icon--!!!");
		  //alert(this.id);
		  var id = $(this).attr('id');
		  var nId = entityIdInfo[id].split("-");
		  console.log(entityIdInfo[id]);
		  //alert(id);
		   //console.log(cacheDataTime);
		  //console.log(cacheDataTime[id]);
		  if (nId[0] == 'true') {
			  //alert('remove!');
			$(this).attr('src', 'assets/images/bookmark_1.png');
			$(this).attr('data-bs-original-title', 'บันทึก');
			entityIdInfo[id] = entityIdInfo[id].replace('true','false');
			if(sortType == 'total')
				cacheDataTotal[id].bookmark = 'false';
			else
				cacheDataTime[id].bookmark = 'false';
			console.log("Remove bookmark!");
			DeleteBookmark(nId[1]);
		  }else if(nId[0] == 'false'){
			  //alert('add!');
			$(this).attr('src', 'assets/images/bookmark_2.png');
			$(this).attr('data-bs-original-title', 'ยกเลิกการบันทึก');
			entityIdInfo[id] = entityIdInfo[id].replace('false','true');
			if(sortType == 'total')
				cacheDataTotal[id].bookmark = 'true';
			else
				cacheDataTime[id].bookmark = 'true';
			console.log("Add bookmark!");
			AddBookmark(nId[1]);
		  }
	   }else{
		   var id = $(this).attr('id');
		   DeleteBookmark(entityIdInfo[id]);
	   }
	  $(this).tooltip('hide');
	  //setTimeout(function() { ReinitializeTooltips();  }, 500);
	  //$(this).tooltip('show'); });

	});
	
	$('.obj-icon').mouseover(function() {
		console.log('mouseover icon!');
		currentTooltip = $(this);
	});
}


function SearchByTag(text){
	console.log("tag clicked!");
	Cookies.set('search-entry', text);
	console.log("saved user's input: "+Cookies.get('search-entry')+"as cookies!");
	window.location.assign("/search");
}