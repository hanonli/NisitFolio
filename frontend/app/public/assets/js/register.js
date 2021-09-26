/*For Javascript Desu*/
window.onload = () => {
  const myInput1 = document.getElementById('pass05');
  const myInput2 = document.getElementById('pass06');
  myInput1.onpaste = e => e.preventDefault();
  myInput2.onpaste = e => e.preventDefault();
 }

/*Tabs New*/
$(function(){
    $('.tab-content').hide();
    $('#registab1-content').show();
    $('#basic-date-picker1').attr('placeholder','วัน/เดือน/ปี');
    console.log("Yahaha!");
   $('#tab-1').on('click', function(){
       $('.tab-content').hide();
       $('.tab-list-item').removeClass('tab-list-active');
       $('#tab-1').addClass('tab-list-active')
       $('#registab1-content').show();
       $('#basic-date-picker1').attr('placeholder','วัน/เดือน/ปี');
   });
   
   $('#tab-2').on('click', function(){
       $('.tab-content').hide();
       $('.tab-list-item').removeClass('tab-list-active');
       $('#tab-2').addClass('tab-list-active')
       $('#registab2-content').show();
   });
   
   $('#tab-3').on('click', function(){
       $('.tab-content').hide();
       $('.tab-list-item').removeClass('tab-list-active');
       $('#tab-3').addClass('tab-list-active')
       console.log("Eiei3");
       $('#registab3-content').show();
   });

    $('#tab-4').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-4').addClass('tab-list-active')
        $('#registab4-content').show();
    });

    $('#tab-5').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-5').addClass('tab-list-active')
        $('#registab5-content').show();
    });

    $('#tab-6').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-6').addClass('tab-list-active')
        $('#registab6-content').show();
    });

    $('#tab-7').on('click', function(){
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-7').addClass('tab-list-active')
        $('#registab7-content').show();
        /*if(sideskill_count == 0){
          $('#sideskilllist1').hide();
          $('.ddt7_2').hide();
          $('.ddt7_3').hide();
        }
        else if(sideskill_count == 1){
          $('#sideskilllist2').hide();
          $('.ddt7_3').hide();
        }
        else if(sideskill_count == 2){
          $('#sideskilllist3').hide();
        }*/
    });

 });

/*Tab1*/

$('#continue2').click(function () {
  var BDDate= $('#basic-date-picker1').val();
  var last_province= $('#province').val();
  var last_city = $('#townny').val();
  var last_aboutme = $('#aboutme2').val();
  var last_sideskill = list_sideskill;
  if(last_province==null){
    last_province='';
  }
  if(last_city==null){
    last_city='';
  }
  if(last_aboutme==null){
    last_aboutme='';
  }
  var last_jobname=[],last_jobskill=[],last_jobscore=[],last_jobobj=[];
  //console.log(list_of_job);
  list_of_job.forEach((entry) => {
    //console.log(entry);
    last_jobname.push(entry.name_job);
    last_jobskill.push([entry.skill1,entry.skill2,entry.skill3]);
    //last_jobscore.push([parseFloat(entry.score_skill1).toFixed(1),parseFloat(entry.score_skill2).toFixed(1),parseFloat(entry.score_skill3).toFixed(1)]);
    var total_skill_score = new Float32Array(3);
        if (entry.skill1 != "none") {
            total_skill_score[0] = entry.score_skill1;
        }
        else {
            total_skill_score[0] = 0;
        }
        if (entry.skill2 != "none") {
            total_skill_score[1] = entry.score_skill2;
        }
        else {
            total_skill_score[1] = 0;
        }
        if (entry.skill3 != "none") {
            total_skill_score[2] = entry.score_skill3;
        }
        else {
            total_skill_score[2] = 0;
        }
    last_jobscore.push([total_skill_score[0],total_skill_score[1],total_skill_score[2]]);
    last_jobobj.push([entry.obj1,entry.obj2,entry.obj3]);
  });
  var last_certname=[],last_certpic=[],last_certyear=[];
  //console.log(list_of_certi);
  list_of_certi.forEach((entryy) => {
    //console.log(entryy);
    last_certname.push(entryy.name_certi);
    last_certpic.push(entryy.path_file_certi);
    last_certyear.push(entryy.year_certi);
  });
  var last_degree=[],last_faculty=[],last_fos=[],last_aca=[],last_grade=[],last_eduyear=[];
  list_of_aca.forEach((entry) => {
    //console.log(entry);
    last_degree.push(entry.aca_degree);
    last_faculty.push(entry.aca_faculty);
    last_fos.push(entry.aca_field);
    last_aca.push(entry.aca_name);
    //last_grade.push(entry.aca_grade);
    last_eduyear.push(entry.aca_year);
    var total_grade_aca = new Float32Array(1);
      total_grade_aca[0] = entry.grade;
      last_grade.push(total_grade_aca[0]);
  });
  list_of_high.forEach((entry) => {
    //console.log(entry);
    last_degree.push(entry.high_degree);
    last_faculty.push(entry.high_faculty);
    last_fos.push(entry.high_field);
    last_aca.push(entry.high_name);
    //last_grade.push(entry.high_grade);
    last_eduyear.push(entry.high_year);
    var total_grade_high = new Float32Array(1);
      total_grade_high[0] = entry.grade;
      last_grade.push(total_grade_high[0]);
  });
  //console.log('grade = ' + last_grade);
  //console.log(last_eduyear);
  //console.log(last_jobname);
  var last_typework=[],last_company=[],last_typesalary=[],last_salary=[],last_yearstart=[],last_monthstart=[],last_yearend=[],last_monthend=[],last_inform=[];
  list_of_work.forEach((entry) => {
    //console.log(entry);
    //last_typework.push(entry.type_work);
    //last_company.push(entry.company_work);
    //last_fos.push(entry.aca_field);
    //last_aca.push(entry.aca_name);
    //last_grade.push(entry.aca_grade);
    //last_eduyear.push(entry.aca_year);
    //var total_grade_aca = new Float32Array(1);
    //  total_grade_aca[0] = entry.grade;
    //  last_grade.push(total_grade_aca[0]);
  });
  if(avatar1.src=="http://localhost:3000/assets/images/Circleuploadprofile.png"){
    avatar1.src="http://localhost:3000/assets/images/profile_uk.png";
  }
  if(list_sideskill[0]==''){
    var last_sideskill = [];
  }
  else if(list_sideskill[1]==''){
    var last_sideskill = [list_sideskill[0]];
  }
  else if(list_sideskill[2]==''){
    var last_sideskill = [list_sideskill[0],list_sideskill[1]];
  }
  if(RequireCount_pass==1){     
    console.log('You Pass!'); 
    //window.location.pathname = '/emailverify'
    var FormRegis2 = {
      Email: $('#re03').val(),
      Password: $('#pass05').val(),
      ProfilePic: avatar1.src,
      Firstname: $('#re01').val(),
      Lastname: $('#re02').val(),
      Birthday: BDDate,
      Gender: $('#sexgen').val(),
      Aboutme: last_aboutme,
      Email2nd:"-",
      Country:"ประเทศไทย",
      Province:last_province,
      City:last_city,
      SoftSkill:[],
      CertName:last_certname,
      CertPic:last_certpic,
      CertYear:last_certyear,
      //Degree:[],
      //Work_JobName: [],
      //Work_JobType:[],
      Degree:last_degree,
      Facalty:last_faculty,
      Field_of_study:last_fos,
      Academy:last_aca,
      Grade:last_grade,
      Education_End_Year:last_eduyear,
      Work_JobName:["เขียนเว็บ"],
      Work_JobType:["ฟรีแลนซ์"],
      Company:["freelance.com"],
      Work_Start_Month:[1],
      Work_End_Month:[5],
      Work_Start_Year:[2007],
      Work_End_Year:[2012],
      Salary:[15000],
      SalaryType:["รายได้เป็นงาน"],
      Infomation:["จะดีมากถ้าลูกค้าไม่เรื่องมาก"],
      Job_JobName:last_jobname,
      Job_SkillName: last_jobskill,
      Job_Score: last_jobscore,
      //Job_Score: last_jobscore,
      Job_Objective:last_jobobj,
    }
    console.log(FormRegis2);
    //console.log(Regis3_form);
    //console.log(Regis3_form2);
    //console.log(Registab4);
    console.log(JSON.stringify(FormRegis2));
    PostRegis(FormRegis2);
  }
  else{
    console.log('You Wrong!');
    $('.tab-content').hide();
    $('.tab-list-item').removeClass('tab-list-active');
    $('#tab-1').addClass('tab-list-active')
    $('#registab1-content').show();
  }
});

/*var startYear = 1950;
var endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--) {
    //$('#bdyear').append($('<option />').val(i).html(i));
    //$('#year_startjob').append($('<option />').val(i).html(i));
    //$('#year_endjob').append($('<option />').val(i).html(i));
    //$('#year_higher').append($('<option />').val(i).html(i));
    //$('#year_secondary').append($('<option />').val(i).html(i));
}

var MaxM = 13;
var startM = 1;
for (j = startM; j < MaxM; j++) {
    $('#bdmonth').append($('<option />').val(j).html(j));
}

var MaxD = 32;
var MaxD2 = 30;
var startD = 1;
for (k = startD; k < MaxD; k++) {
    $('#bdday').append($('<option />').val(k).html(k));
}
*/

"use strict";
	console.log("HELLO LV3!");

		console.log("HELLO LV4!");
      var avatar1 = document.getElementById('avatar1');
      var image = document.getElementById('image');
      var input = document.getElementById('input');
      var $alert = $('.alert');
      var $modal = $('#modal');
      var cropper;
		
		avatar1.addEventListener('click', function () {
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
            reader.onload = function () {
              done(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }
      });

      $modal.on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
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
            width: 150,
            height: 150,
          });
          initialAvatarURL = avatar1.src;
          avatar1.src = canvas.toDataURL();
          console.log(avatar1.src);
          $alert.removeClass('alert-success alert-warning');
          canvas.toBlob(function (blob) {
            var formData = new FormData();

            formData.append('avatar1', blob, 'avatar1.jpg');
			console.log("HELLO LV5!");
            /*$.ajax('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              data: formData,
              processData: false,
              contentType: false,

              xhr: function () {
                var xhr = new XMLHttpRequest();

                xhr.upload.onprogress = function (e) {
                  
                };

                return xhr;
              },

              success: function () {
                $alert.show().addClass('alert-success').text('Upload success');
              },

              error: function () {
                avatar.src = initialAvatarURL;
                $alert.show().addClass('alert-warning').text('Upload error');
              },

              complete: function () {
                
              },
            });*/
          });
        }
      });

ret1 = document.getElementById('re01');                   
ret1.addEventListener('keyup', function(){
    var valt1 = $('#re01').val();
    //console.log('Name : ' + valt1);
  if(valt1 == ''){
    $('#re01').removeClass('is-valid');
    $('#re01').addClass('is-invalid');
    console.log(FormRegis);
  }
  else {
    $('#re01').removeClass('is-invalid');
    $('#re01').addClass('is-valid');
  }});
ret2 = document.getElementById('re02');                   
ret2.addEventListener('keyup', function(){
  var valt1 = $('#re02').val();
  //console.log('Surname : ' + valt1);
  if(valt1 == ''){
    $('#re02').removeClass('is-valid');
    $('#re02').addClass('is-invalid');
  }
  else {
    $('#re02').removeClass('is-invalid');
    $('#re02').addClass('is-valid');
  }});
ret3 = document.getElementById('re03');                   
ret3.addEventListener('keyup', function(){
  var input=$(this);
  //console.log('Email : ' + input);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("is-invalid").addClass("is-valid");}
	else{input.removeClass("is-valid").addClass("is-invalid");}
});
var passw = 0;
var min_pass_count = 8;
var max_pass_count = 20;
var RequireCount_pass = 0;
function checkPass() {                                    
  var textEntered1, textEntered2, checknow, result1;      
  textEntered1 = document.getElementById('pass05').value;    
  textEntered2 = document.getElementById('pass06').value;
  checknow = textEntered1.length;
  if(textEntered2 == '') {
    //console.log('Password Typing...');
    //console.log('Length : ' + checknow);
    if(checknow < min_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
    }
    else if(checknow > max_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
    }
    else{
      $('#pass05').removeClass('is-invalid');
      $('#pass05').addClass('is-valid');
    }
  }
  else if(textEntered1 == textEntered2) {
    console.log('Password TRUE');
    if(checknow < min_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
      RequireCount_pass = 0;
    }
    else if(checknow > max_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
      $('#pass06').removeClass('is-valid');
      $('#pass06').addClass('is-invalid');
      RequireCount_pass = 0;
    }
    else{
      $('#pass05').removeClass('is-invalid');
      $('#pass05').addClass('is-valid');
      $('#pass06').removeClass('is-invalid');
      $('#pass06').addClass('is-valid');
      RequireCount_pass = 1;
    }
  }
  else {
    console.log('Password FALSE');
    /*$('#pass06').addClass('red_markEp2');*/
    //console.log('Length false : ' + checknow);
    if(checknow < min_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
    }
    else if(checknow > max_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
    }
    else{
      $('#pass05').removeClass('is-invalid');
      $('#pass05').addClass('is-valid');
    }
    $('#pass06').removeClass('is-valid');
    $('#pass06').addClass('is-invalid');
  }
}
pa1 = document.getElementById('pass05'); 
pa2 = document.getElementById('pass06');                   
pa1.addEventListener('keyup', checkPass, false);
pa2.addEventListener('keyup', checkPass, false);

/*Tab2*/
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
el = document.getElementById('aboutme2');                   
el.addEventListener('keyup', countCharactersAbme, false);

$('.aboutmee').on('change', 'input', function(){
  var abme = $('.aboutmee').val();
  var abme_count = abme.length;
  //console.log('L : ' + abme_count);
  
});


/*Tab7*/
var list_sideskill = ["","",""];
/*
$(document).on("change", "#selectT7", function () {
  if (document.getElementById("selectT7").selectedIndex != 0) {
      $("#selectT7").removeClass("is-invalid");
      removeOptions('selectT7');
  }
});
*/
var sskdd1 = '<div class="col-2">\
                <div class="delbtn">\
                <img class="obj-icon tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab7-1" id="valss1" alt="" width="30" height="30"/>\
                </div>\
              </div>\
              </div>\
              ';
var sskdd2 = '<div class="col-2">\
                <div class="delbtn">\
                <img class="obj-icon tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab7-2" id="valss2" alt="" width="30" height="30"/>\
                </div>\
              </div>\
              </div>\
              ';
var sskdd3 = '<div class="col-2">\
              <div class="delbtn">\
              <img class="obj-icon tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab7-3" id="valss3" alt="" width="30" height="30"/>\
              </div>\
            </div>\
            </div>\
            ';
var sideskilldropdown1_1 = '<div class="container-fluid dropbtn-box form-f " id="ssl_1">\
                              <div class="row">\
                                <div class="col-10">\
                                  <a class="textT7B">\
                                  ';
var sideskilldropdown1_2 = '<div class="container-fluid dropbtn-box form-f " id="ssl_2">\
                                  <div class="row">\
                                    <div class="col-10">\
                                      <a class="textT7B">\
                                      ';
var sideskilldropdown1_3 = '<div class="container-fluid dropbtn-box form-f " id="ssl_3">\
                              <div class="row">\
                                <div class="col-10">\
                                  <a class="textT7B">\
                                  ';
var sideskilldropdown2 = '</a>\
                          </div>\
                          ';
var sideskill_count=0;
var max_sideskill=3;
var sumsideskill='';
var valss_now='';

var Dropdownsideskill1 = '<div class="row ddt7_1">\
<div class="col-md-12">\
  <select class="form-select dropbtn fff" id="ch1">\
    <option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>\
		<option value="Computer_Technology">Computer_Technology</option>\
		<option value="Hard_Communication%20Skills">Hard_Communication Skills</option>\
		<option value="Data_Analysis">Data_Analysis</option>\
	  <option value="Certifications_and_Licenses">Certifications_and_Licenses</option>\
		<option value="Marketing">Marketing</option>\
		<option value="Project_Management">Project_Management</option>\
		<option value="Design">Design</option>\
		<option value="Cloud_Computing">Cloud_Computing</option>\
		<option value="Writing">Writing</option>\
		<option value="Mobile_&_Web_Development">Mobile&_Web_Development</option>\
  	<option value="Network_Structure&_Security">NetworkStructure&_Security</option>\
  </select>\
</div>\
<div class="col-md-12">\
  <select class="form-select dropbtn" id="sideskilllist1">\
    <option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>\
  </select>\
</div>\
</div>\
';

var Dropdownsideskill2 = '<div class="row ddt7_2">\
<div class="col-md-12">\
  <select class="form-select dropbtn fff" id="ch2">\
    <option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>\
		<option value="Computer_Technology">Computer_Technology</option>\
		<option value="Hard_Communication%20Skills">Hard_Communication Skills</option>\
		<option value="Data_Analysis">Data_Analysis</option>\
	  <option value="Certifications_and_Licenses">Certifications_and_Licenses</option>\
		<option value="Marketing">Marketing</option>\
		<option value="Project_Management">Project_Management</option>\
		<option value="Design">Design</option>\
		<option value="Cloud_Computing">Cloud_Computing</option>\
		<option value="Writing">Writing</option>\
		<option value="Mobile_&_Web_Development">Mobile&_Web_Development</option>\
  	<option value="Network_Structure&_Security">NetworkStructure&_Security</option>\
  </select>\
</div>\
<div class="col-md-12">\
  <select class="form-select dropbtn" id="sideskilllist2">\
    <option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>\
  </select>\
</div>\
</div>\
';

var Dropdownsideskill3 = '<div class="row ddt7_3">\
<div class="col-md-12">\
  <select class="form-select dropbtn fff" id="ch3">\
  <option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>\
  <option value="Computer_Technology">Computer_Technology</option>\
  <option value="Hard_Communication%20Skills">Hard_Communication Skills</option>\
  <option value="Data_Analysis">Data_Analysis</option>\
  <option value="Certifications_and_Licenses">Certifications_and_Licenses</option>\
  <option value="Marketing">Marketing</option>\
  <option value="Project_Management">Project_Management</option>\
  <option value="Design">Design</option>\
  <option value="Cloud_Computing">Cloud_Computing</option>\
  <option value="Writing">Writing</option>\
  <option value="Mobile_&_Web_Development">Mobile&_Web_Development</option>\
  <option value="Network_Structure&_Security">NetworkStructure&_Security</option>\
  </select>\
</div>\
<div class="col-md-12">\
  <select class="form-select dropbtn" id="sideskilllist3">\
    <option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>\
  </select>\
</div>\
</div>\
';

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

function Getchoicehardskill(typeC,number){
	fetch("http://localhost:2000/register/" + typeC +"/hardskill",
		{ method: "GET", })
		.then(response => response.json())
		//.then(response => response.result)
		.then((raws) => {
      console.log("http://localhost:2000/register/" + typeC +"/hardskill");
			console.log(raws);
			raws.forEach((entryss) => {
				//console.log(entryss);
        //console.log(entryss.THName);
        var dis_now = entryss.THName;
        if(number==1){
          $('#sideskilllist1').append($('<option />').val(dis_now).html(dis_now));
        }
        else if(number==2){
          $('#sideskilllist2').append($('<option />').val(dis_now).html(dis_now));
        }
        else if(number==3){
          $('#sideskilllist3').append($('<option />').val(dis_now).html(dis_now));
        }
			});
        }).catch((error) => {
			  console.log(error);
			});
}

function PostRegis(pack){
  fetch("http://localhost:2000/register",
		{ method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
		  body: JSON.stringify(pack)}
  )
    .then(function (response) {
        //window.location.pathname = '/emailverify'
        setInterval(window.location = "http://localhost:3000/emailverify", 10000);
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch((error) => {
      res.status(500)
      .json({
          message:error
      })
  })
  }

    var FormRegis = {
      Email:"kohamatrio@gmail.com",
      Password:"artty678",
      ProfilePic:null,
      Firstname:"Artty",
      Lastname:"wannasleep",
      Birthday:"26/10/1998",
      Gender:"ชาย",
      AboutMe:"สวัสดีครับ ผมชื่ออาร์ท อาร์ต อาต อาท จะเรียกไรก็เรียกเถอะครับ ตั้งใจมาเรียนคณะนี้เพราะชอบเขียนโค้ด เวลาว่างชอบไปตีปิงปองแล้วก็เที่ยวกับเพื่อนครับ",
      Email2nd:"artty678@gmail.com",
      Country:"ประเทศไทย",
      Province:"จันทบุรี",
      City:"ในเมือง",
      SoftSkill:["Web","Painting","C"],
      CertName:["ชนะเลิศการแข่งขันจีบสาวแห่งชาติ","รองชนะเลิศการแข่งขันปิงปองโอลิมปิก","ชนะเลิศการแข่งขันเขียนโค้ดความเร็วแสง"],
      CertPic:["picart11","picart2","picart3"],
      CertYear:[2016,2013,2018],
      Degree:["ปริญญาตรี"],
      Facalty:["วิศวกรรมศาสตร์"],
      Field_of_study:["คอมพิวเตอร์"],
      Academy:["มหาวิทยาลัยเกษตรศาสตร์ บางเขน"],
      Grade:[2.98],
      Education_Start_Year:[2019],
      Education_End_Year:[],
      Work_JobName:["นักพัฒนาเกม","โปรแกรมเมอร์","ยูทูปเบอร์"],
      Work_JobType:["ฟรีแลนซ์","พนักงานบริษัท","ธุรกิจส่วนตัว",],
      Company:["Artty FL","Nisitfolio","WriteCodeWithArtty Channel"],
      Work_Start_Month:[4,5,6],
      Work_End_Month:[4,5,6],
      Work_Start_Year:[2013,2016,2019],
      Work_End_Year:[2015,2018,2020],
      Salary:[45000,28000,38000],
      Infomation:["เหนื่อยแต่เงินดี","ใช้แรงงานเยี่ยงทาสแต่ไม่คุ้มเท่าไหร่","เป็นเจ้านายตัวเอง ทำงานตามใจฉัน"],
      Job_Objective:[["อยากได้งานทีละงานที่มีเดดไลน์ชัดเจน","ไม่ทักเรื่องงานในวันหยุด","สวัสดิการดี"]],
      Job_Score:[[9,10,8.8]],
      Job_JobName:[["โปรแกรมเมอร์"]],
      Job_SkillName:[["C","JQuery","HTML"]]
  }
    

  $(document).ready(function(){
    console.log('script for registab3 loaded')
  });
  
  let startYear3 = 1970;
  let endYear3 = new Date().getFullYear();
  for (i = endYear3; i > startYear3; i--) {
    $('#year_higher').append($('<option />').val(i).html(i));
    $('#year_secondary').append($('<option />').val(i).html(i));
    $('#year_startwork').append($('<option />').val(i).html(i));
    $('#year_endwork').append($('<option />').val(i).html(i));
  }
  
  /*$('handleHigherSubmit').on('click',function() {
    $("#registab3Modal1").modal("hide");
  
  });
  
  $('handleSecondaryubmit').on('click',function() {
    $("#registab3Modal2").modal("hide");
  });
  */
  var list_of_sideskill = [];
  