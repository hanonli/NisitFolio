/*For Javascript Desu*/

/*Tabs New*/
$(function(){
    $('.tab-content').hide();
    $('#registab1-content').show();
    console.log("Yahaha!");
   $('#tab-1').on('click', function(){
       $('.tab-content').hide();
       $('.tab-list-item').removeClass('tab-list-active');
       $('#tab-1').addClass('tab-list-active')
       $('#registab1-content').show();
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
        if(sideskill_count == 0){
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
        }
    });

 });

/*Tab1*/

$('#continue2').click(function () {
  var BDDate= $('#basic-date-picker1').val();
  var last_sideskill = list_sideskill;
  var last_jobname=[],last_jobskill=[],last_jobscore=[],last_jobobj=[];
  //console.log(list_of_job);
  list_of_job.forEach((entry) => {
    //console.log(entry);
    last_jobname.push(entry.name_job);
    last_jobskill.push([entry.skill1,entry.skill2,entry.skill3]);
    last_jobscore.push([entry.score_skill1,entry.score_skill2,entry.score_skill3]);
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
  //console.log(last_jobname);
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
    window.location.pathname = '/emailverify'
    var FormRegis2 = {
      Email: $('#re03').val(),
      Password: $('#pass05').val(),
      ProfilePic: avatar1.src,
      Firstname: $('#re01').val(),
      Lastname: $('#re02').val(),
      Birthday: BDDate,
      Gender: $('#sexgen').val(),
      Aboutme: $('#aboutme2').val(),
      Email2nd:"-",
      Country:"ประเทศไทย",
      Province:$('#province').val(),
      City:$('#townny').val(),
      SoftSkill:last_sideskill,
      CertName:last_certname,
      CertPic:last_certpic,
      CertYear:last_certyear,
      //Degree:[],
      //Work_JobName: [],
      //Work_JobType:[],
      Degree:["อาชีวะศึกษา"],
      Facalty:["การเย็บปักถักร้อย"],
      Field_of_study:["ซ่อมตุ๊กตา"],
      Academy:["โรงเรียนหมีน้อย"],
      Grade:[3.01],
      Education_End_Year:[2017],
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
      Job_Score: Job_Score,
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
  counter = (180 - (textEntered.length));
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

$(function(){
  $('#del_sideskill1').on('click', function(){
    console.log('EiEi this is Del1');
    console.log(list_sideskill);
    $('#ssl_1').remove();
    $('.ddt7_1').remove();
    if(sideskill_count==1){
      sumsideskill = Dropdownsideskill1;
      list_sideskill[0]=list_sideskill[1];
      list_sideskill[1]="";
      $('.dropdowntap7_1').append(sumsideskill);
      sumsideskill = '';
      $('#sideskilllist1').hide();
      $('.ddt7_2').hide();
    }
    else if(sideskill_count==2){
      $('.ddt7_2').remove();
      sumsideskill = sideskilldropdown1_1 + list_sideskill[1] + sideskilldropdown2 + sskdd1;
      console.log(sumsideskill);
      $('.dropdowntap7_1').append(sumsideskill);
      list_sideskill[0]=list_sideskill[1];
      list_sideskill[1]="";
      $('#ssl_2').remove();
      sumsideskill = Dropdownsideskill2;
      $('.dropdowntap7_2').append(sumsideskill);
      $('#sideskilllist2').hide();
      sumsideskill = '';
      $('.ddt7_3').hide();
    }
    else if(sideskill_count==3){
      $('.ddt7_2').remove();
      $('.ddt7_3').remove();
      sumsideskill = sideskilldropdown1_1 + list_sideskill[1] + sideskilldropdown2 + sskdd1;
      $('.dropdowntap7_1').append(sumsideskill);
      sumsideskill = sideskilldropdown1_2 + list_sideskill[2] + sideskilldropdown2 + sskdd2;
      $('.dropdowntap7_2').append(sumsideskill);
      list_sideskill[0]=list_sideskill[1];
      list_sideskill[1]=list_sideskill[2];
      list_sideskill[2]="";
      $('#ssl_2').remove();
      $('#ssl_3').remove();
      sumsideskill = Dropdownsideskill3;
      $('.dropdowntap7_3').append(sumsideskill);
      sumsideskill = '';
      $('#sideskilllist3').hide();
    }
    console.log(list_sideskill);
    sideskill_count -= 1;
    console.log('Sum SSK :' + sideskill_count + '!!!');
  });
  $('#del_sideskill2').on('click', function(){
    console.log('EiEi this is Del2');
    $('#ssl_2').remove();
    $('.ddt7_2').remove();
    if(sideskill_count==2){
      $('.ddt7_2').remove();
      list_sideskill[1]="";
      sumsideskill = Dropdownsideskill2;
      $('.dropdowntap7_2').append(sumsideskill);
      $('#sideskilllist2').hide();
      sumsideskill = '';
      $('.ddt7_3').hide();
    }
    else if(sideskill_count==3){
      sumsideskill = sideskilldropdown1_2 + list_sideskill[2] + sideskilldropdown2 + sskdd2;
      $('.dropdowntap7_2').append(sumsideskill);
      list_sideskill[1]=list_sideskill[2];
      list_sideskill[2]="";
      $('#ssl_3').remove();
      sumsideskill = Dropdownsideskill3;
      $('.dropdowntap7_3').append(sumsideskill);
      sumsideskill = '';
      $('#sideskilllist3').hide();
    }
    console.log(list_sideskill);
    sideskill_count -= 1;
    console.log('Sum SSK :' + sideskill_count + '!!!');
  });
  $('#del_sideskill3').on('click', function(){
    console.log('EiEi this is Del3');
    $('#ssl_3').remove();
    $('.ddt7_3').remove();
    list_sideskill[2]="";
    sumsideskill = Dropdownsideskill3;
    $('.dropdowntap7_3').append(sumsideskill);
    $('#sideskilllist3').hide();
    sumsideskill = '';
    console.log(list_sideskill);
    sideskill_count -= 1;
    console.log('Sum SSK :' + sideskill_count + '!!!');
  });
});

$(function(){
  $('#sideskilllist1').on('change', function(){
    console.log('EiEi this is Sel1');
    valss_now = $('#sideskilllist1').val();
    list_sideskill[0]=valss_now;
    //console.log(valss_now);
    sumsideskill = sideskilldropdown1_1 + valss_now + sideskilldropdown2 + sskdd1;
    $('.dropdowntap7_1').append(sumsideskill);
    sumsideskill = '';
    $('.ddt7_1').remove();
    $('.ddt7_2').show();
    $('#sideskilllist2').hide();
    sideskill_count += 1;
    console.log('Sum SSK ++:' + sideskill_count + '!');
  });
  $('#sideskilllist2').on('change', function(){
    console.log('EiEi this is Sel2');
    valss_now = $('#sideskilllist2').val();
    list_sideskill[1]=valss_now;
    //console.log(valss_now);
    sumsideskill = sideskilldropdown1_2 + valss_now + sideskilldropdown2 + sskdd2;
    $('.dropdowntap7_2').append(sumsideskill);
    sumsideskill = '';
    $('.ddt7_2').hide();
    $('.ddt7_3').show();
    $('#sideskilllist3').hide();
    sideskill_count += 1;
    console.log('Sum SSK ++:' + sideskill_count + '!!');
  });
  $('#sideskilllist3').on('change', function(){
    console.log('EiEi this is Sel3');
    valss_now = $('#sideskilllist3').val();
    list_sideskill[2]=valss_now;
    //console.log(valss_now);
    sumsideskill = sideskilldropdown1_3 + valss_now + sideskilldropdown2 + sskdd3;
    $('.dropdowntap7_3').append(sumsideskill);
    sumsideskill = '';
    $('.ddt7_3').hide();
    sideskill_count += 1;
    console.log('Sum SSK ++:' + sideskill_count + '!!!');
  });
});

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
  
  var DropdownsideskillChoice = {'Technical': ['CAD',
    'Lean manufacturing',
    'Multivariate analysis',
    'Linear regression',
    'Prototyping',
    'Workflow development',
    'STEM skills',
    'Web: HTML, CSS, Javascript',
    'Payment processing',
    'Automated Billing Systems',
    'CRM Platforms',
    'Research',
    'Troubleshooting'],
     Computer: ['Python','C']};

    $(function(){
      $('#ch1').on('change', function(){
        console.log('Checkkaaaa');
        var chss_now = $('#ch1').val();
        cht7_1 = chss_now;
        console.log('I am :' + chss_now);
        //console.log(DropdownsideskillChoice[chss_now]);
        $('#ch1').hide();
        $('#sideskilllist1').show();
        Getchoicehardskill(chss_now,1);
        /*DropdownsideskillChoice[chss_now].forEach((entryc1) => {
          var ch_now1 = entryc1;
          //console.log('I am Choice:' + ch_now1);
          $('#ch1').hide();
          $('#sideskilllist1').show();
          $('#sideskilllist1').append($('<option />').val(ch_now1).html(ch_now1));
        })*/
      });
      $('#ch2').on('change', function(){
        var chss_now = $('#ch2').val();
        cht7_2 = chss_now;
        $('#ch2').hide();
        $('#sideskilllist2').show();
        Getchoicehardskill(chss_now,2);
        /*DropdownsideskillChoice[chss_now].forEach((entryc2) => {
          var ch_now2 = entryc2;
          $('#ch2').hide();
          $('#sideskilllist2').show();
          $('#sideskilllist2').append($('<option />').val(ch_now2).html(ch_now2));
        })*/
      });
      $('#ch3').on('change', function(){
        var chss_now = $('#ch3').val();
        cht7_3 = chss_now;
        $('#ch3').hide();
        $('#sideskilllist3').show();
        Getchoicehardskill(chss_now,3);
        /*DropdownsideskillChoice[chss_now].forEach((entryc3) => {
          var ch_now3 = entryc3;
          $('#ch3').hide();
          $('#sideskilllist3').show();
          $('#sideskilllist3').append($('<option />').val(ch_now3).html(ch_now3));
        })*/
      });
    });
    
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
    
 
var list_of_work = [];

function get_work_id(list_of_work, x) {
  //var x = 1;
  list_of_work.forEach(ele => {
      ele["work_pos"] = x;
      console.log("x:", x);
      x++;
  });
  return list_of_work;
}
/*
function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
*/
var choose_function4 = -1; //default

function show_all_work() {

  list_of_work.forEach(ele => {
      var grid_work1 = '<div class="t4-content">\
                          <h5 class="font-titlet4">{jobname_work}</h5>\
                          <div class="row">\
                              <div class="col-3 font-titlet3">\
                              <div class="font-titlet3">{company_work}</div>\
                              <div class="font-titlet3">เริ่มต้น {month_startwork}/{year_startwork}</div>\
                              <div class="font-titlet3">สิ้นสุด {month_endwork}/{year_endwork}</div>\
                              </div>\
                              <div class="col-9 font-titlet3">{inform_work}</div>\
                          </div>\
                          <div class="row">\
                              <div class="col-3 font-titlet3">เงินเดือน</div>\
                              <div class="col-9 font-titlet3">{salary_work} บาท</div>\
                          </div>';

      var grid_work2 = `
                          <div class="layer_icon1" id={no-list-work}>\
                             <button type="button" class="btn button1" id="edit-work"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
                             <button type="button" class="btn button2" id="del-work"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
                          </div>\
                      </div>`;
      grid_work2 = grid_work2.replace("{no-list-work}", ele["id"]);
      grid_work1 = grid_work1.replace("{no_work}", ele["work_pos"]);
      grid_work1 = grid_work1.replace("{jobname_work}", ele["work_jobname"]);
      grid_work1 = grid_work1.replace("{month_startwork}", ele["work_startmonth"]);
      grid_work1 = grid_work1.replace("{year_startwork}", ele["work_startyear"]);
      if(ele["work_company"]==""){
        grid_work1 = grid_work1.replace("{company_work}", '-');
      }
      else{
        grid_work1 = grid_work1.replace("{company_work}", ele["work_company"]);
      }
      if(ele["work_inform"]==""){
        grid_work1 = grid_work1.replace("{inform_work}", '-');
      }
      else{
        grid_work1 = grid_work1.replace("{inform_work}", ele["work_inform"]);
      }
      if(ele["work_salary"]=="0"){
        grid_work1 = grid_work1.replace("{salary_work}", '-');
      }
      else{
        grid_work1 = grid_work1.replace("{salary_work}", ele["work_salary"]);
      }
      if(ele["work_endyear"]=="0"){
        grid_work1 = grid_work1.replace("{year_endwork}", '-');
      }
      else{
        grid_work1 = grid_work1.replace("{year_endwork}", ele["work_endyear"]);
      }
      if(ele["work_endmonth"]=="0"){
        grid_work1 = grid_work1.replace("{month_endwork}", '-');
      }
      else{
        grid_work1 = grid_work1.replace("{month_endwork}", ele["work_endmonth"]);
      }
      $(".list-of-work").append(grid_work1 + grid_work2);
      console.log(`list_of_work:`, list_of_work);
  });
}
$(document).ready(function () {
  show_all_work();
});

//func add new work form
$(document).on("click", "#add_aca", function () {
  $("#work_jobname").removeClass("is-invalid");
  $("#work_jobtype").removeClass("is-invalid");
  $("#month_startwork").removeClass("is-invalid");
  $("#year_startwork").removeClass("is-invalid");
  choose_function3 = 2;
  //$('#registab4Modal').modal('toggle');
  $('#work_jobtype').prop('selectedIndex', 0);
  $('#year_startwork').prop('selectedIndex', 0);
  $('#year_endwork').prop('selectedIndex', 0);
  $('#month_startwork').prop('selectedIndex', 0);
  $('#month_endwork').prop('selectedIndex', 0);
  $('#work_salarytype').prop('selectedIndex', 0);
  $('#work_jobname').val('');
  $('#work_salary').val('');
  $('#work_inform').val('');
  $('#work_company').val('');
  //not sure
});

//func edit work
var for_editwork;
$(document).on("click", "#edit-work", function () {
  $("#work_jobname").removeClass("is-invalid");
  $("#work_jobtype").removeClass("is-invalid");
  $("#month_startwork").removeClass("is-invalid");
  $("#year_startwork").removeClass("is-invalid");
  id_list_work_edit = $(this).parents().attr('id');
  console.log(`edit:`, id_list_work_edit);
  choose_function4 = 1;
  $('#registab4Modal').modal('toggle');
  $('#submit-work').text('ยืนยัน');
  console.log(`choose: ${choose_function4}`);
  for_editwork = list_of_work.find(function (post, index_del) {
      if (post.id == id_list_work_edit){
        //console.log("Wow!!");
        return true;
      }
  });
  console.log(`for_editwork:`, for_editwork);
  $("#aca_name").val(for_editaca["aca_name"]);
  $("#aca_faculty").val(for_editaca["aca_faculty"]);
  if(for_editwork["work_inform"]=='none'){
    $("#work_inform").val('');
  }
  else{
    $("#work_inform").val(for_editwork["work_inform"]);
  }
  if(for_editwork["aca_grade"]=='0.00'){
    $("#aca_grade").val('');
  }
  else{
    $("#aca_grade").val(for_editwork["aca_grade"]);
  }
  document.getElementById("work_jobtype").selectedIndex = for_editwork["work_jobtype_select"];
  document.getElementById("work_salarytype").selectedIndex = for_editwork["work_salarytype_select"];
  document.getElementById("work_startyear").selectedIndex = for_editwork["work_startyear_select"];
  document.getElementById("work_startmonth").selectedIndex = for_editwork["work_startmonth_select"];
});


$(document).on("click", "#del-work", function () {
  id_list_work_del = $(this).parents().attr('id');
  console.log("id_list_work4:", id_list_work_del);
  $('#Modal_remove_work').modal('toggle');
});

$(document).on('click', "#sub_del_work", function () {
  var removeIndexA = list_of_work.findIndex(function (post, index_del) {
      if (post.id == id_list_work_del)
          return true;
  });
  console.log("id_list_work:", id_list_work_del);
  list_of_work.splice(removeIndexA, 1);
  console.log(`delete work id:`, removeIndexA);
  $('#Modal_remove_work').modal('hide');
  $(".list-of-work").empty();
  console.log(list_of_work);
  get_work_id(list_of_work, 1);
  show_all_work()
});


$(document).on('hide.bs.modal', "#registab4Modal", function () {
  //$('#registab4Modal').modal('toggle');
  $('#work_jobtype').prop('selectedIndex', 0);
  $('#year_startwork').prop('selectedIndex', 0);
  $('#year_endwork').prop('selectedIndex', 0);
  $('#month_startwork').prop('selectedIndex', 0);
  $('#month_endwork').prop('selectedIndex', 0);
  $('#work_salarytype').prop('selectedIndex', 0);
  $('#work_jobname').val('');
  $('#work_salary').val('');
  $('#work_inform').val('');
  $('#work_company').val('');
});

$(document).on('click', "#can_work_del", function () {
  $('#Modal_remove_work').modal('hide');
});

$(document).on("change", "#work_jobtype", function () {
  if (document.getElementById("work_jobtype").selectedIndex != 0) {
      $("#work_jobtype").removeClass("is-invalid");
  }
});

document.getElementById("submit-work").addEventListener("click", function () {
  jobname_work = document.getElementById("work_jobname").value;
  jobtype_work = document.getElementById("work_jobtype").value;
  work_startyear = document.getElementById("year_startwork").value;
  work_endyear = document.getElementById("year_endwork").value;
  work_startmonth = document.getElementById("month_startwork").value;
  work_endmonth = document.getElementById("month_endwork").value;
  $('#submit_work').text = 'ยืนยัน';
  var checkcase1 = true;
  if (document.getElementById("work_jobname").value == '') {
      $("#work_jobname").addClass("is-invalid");
      checkcase1 = false;
  }
  if (document.getElementById("work_jobtype").value == 'none') {
    $("#work_jobtype").addClass("is-invalid");
      checkcase1 = false;
  }
  if (document.getElementById("year_startwork").value == '0') {
    $("#year_startwork").addClass("is-invalid");
      checkcase1 = false;
  }
  if (document.getElementById("month_startwork").value == '0') {
    $("#month_startwork").addClass("is-invalid");
      checkcase1 = false;
  }
  if(checkcase1==false){
  }
  else {
      if (inform_work == '') {
          inform_work = 'none';
      }
      if (month_endwork == '') {
          month_endwork = 0;
      }
      if (year_endwork == '') {
          year_endwork = 0;
      }
      if (choose_function4 == 1) { //edit work after add
          console.log("edit!!!!!!");
          for_editwork["work_jobname"] = jobname_work;
          for_editwork["work_jobtype_select"] = $("#work_jobtype").prop('selectedIndex');
          for_editwork["work_salarytype_select"] = $("#work_salarytype").prop('selectedIndex');
          for_editwork["work_startyear_select"] = $("#work_startyear").prop('selectedIndex');
          for_editwork["work_endyear_select"] = $("#work_endyear").prop('selectedIndex');
          for_editwork["work_startmonth_select"] = $("#work_endyear").prop('selectedIndex');
          for_editwork["work_endmonth_select"] = $("#work_endmonth").prop('selectedIndex');
          for_editwork["work_inform"] = inform_work;
          for_editwork["work_salary"] = salary_work;
          //for_editwork["year_secondary"] = parseInt(year_aca);
      }
      else if (choose_function4 == 2) { //add aca in list
          list_of_aca.push({
              id: create_UUID(),
              work_pos: 0,
              work_jobname: jobname_work,
              work_jobtype: jobtype_work,
              work_company: company_job,
              work_jobtype_select: $("#work_jobtype").prop('selectedIndex'),
              work_salarytype: jobtype_work,
              work_salarytype_select: $("#work_salarytype").prop('selectedIndex'),
              work_startyear: year_startwork,
              work_startyear_select: $("#year_startwork").prop('selectedIndex'),
              work_startmonth: month_startwork,
              work_startmonth_select: $("#month_startwork").prop('selectedIndex'),
              work_endyear: year_endwork,
              work_endyear_select: $("#year_endwork").prop('selectedIndex'),
              work_endmonth: year_startwork,
              work_endmonth_select: $("#month_endwork").prop('selectedIndex'),
          });
          get_work_id(list_of_work, 1);
          console.log(list_of_work);
      }
      $('#work_jobtype').prop('selectedIndex', 0);
      $('#work_startyear').prop('selectedIndex', 0);
      $('#work_endyear').prop('selectedIndex', 0);
      $('#work_startmonth').prop('selectedIndex', 0);
      $('#work_endmonth').prop('selectedIndex', 0);
      $('#work_salarytype').prop('selectedIndex', 0);
      $('#work_jobname').val('');
      $('#work_salary').val('');
      $('#work_inform').val('');
      $('#registab4Modal').modal('hide');
      $(".list-of-work").empty();
      show_all_work()
  }
});
