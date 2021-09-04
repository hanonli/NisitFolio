/*For Javascript Desu*/
console.log("Artty!");
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
          $('.ddt7_2').hide();
          $('.ddt7_3').hide();
        }
        else if(sideskill_count == 1){
          $('.ddt7_2').show();
          $('.ddt7_3').hide();
        }
        else if(sideskill_count == 2){
          $('.ddt7_2').show();
          $('.ddt7_3').show();
        }
    });

 });

/*Tab1*/
$('#continue2').click(function () {    
  if(RequireCount_pass==1){     
    console.log('You Pass!');  
    PostRegis();
    //window.location.pathname = '/emailverify'

  }
  else{
    console.log('You Wrong!');
    $('.tab-content').hide();
    $('.tab-list-item').removeClass('tab-list-active');
    $('#tab-1').addClass('tab-list-active')
    $('#registab1-content').show();
  }
});

var startYear = 1950;
var endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--) {
    $('#bdyear').append($('<option />').val(i).html(i));
    $('#year_enjob').append($('<option />').val(i).html(i));
    $('#year_higher').append($('<option />').val(i).html(i));
    $('#year_secondary').append($('<option />').val(i).html(i));
}

var MaxM = 13;
var startM = 1;
for (j = startM; j < MaxM; j++) {
    $('#bdmonth').append($('<option />').val(j).html(j));
}


var MaxD = 32;
var startD = 1;
for (k = startD; k < MaxD; k++) {
    $('#bdday').append($('<option />').val(k).html(k));
}

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
    console.log('Name : ' + valt1);
  if(valt1 == ''){
    $('#re01').removeClass('is-valid');
    $('#re01').addClass('is-invalid');
  }
  else {
    $('#re01').removeClass('is-invalid');
    $('#re01').addClass('is-valid');
  }});
ret2 = document.getElementById('re02');                   
ret2.addEventListener('keyup', function(){
  var valt1 = $('#re02').val();
  console.log('Surname : ' + valt1);
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
  var valt1 = $('#re03').val();
  console.log('Email : ' + valt1);
  if(valt1 == ''){
    $('#re03').removeClass('is-valid');
    $('#re03').addClass('is-invalid');
  }
  else {
    $('#re03').removeClass('is-invalid');
    $('#re03').addClass('is-valid');
  }});
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
    console.log('Password Typing...');
    console.log('Length : ' + checknow);
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
    console.log('Length false : ' + checknow);
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
var min_abme_count = 0;
var el;

function countCharactersAbme() {                                    
  var textEntered, countRemaining, counter;          
  textEntered = document.getElementById('aboutme2').value;  
  counter = (180 - (textEntered.length));
  countRemaining = document.getElementById('charactersRemaining'); 
  console.log('Char left : ' + counter);
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
  console.log('L : ' + abme_count);
  
});

/*Tab3*/

/*Higher*/
regis3Higher_dropdwn1 = document.getElementById('regis3_selectdropdown1');                   
regis3Higher_dropdwn1.addEventListener('change', function(){
    var regis3_dropdwn1selected = $('#regis3_selectdropdown1').val();
  if(regis3_dropdwn1selected != ''){
    $('#regis3_selectdropdown1').addClass('is-valid');
  }});
  
ValidationUniversity = document.getElementById('ValidationUniversityFeedback');                   
ValidationUniversity.addEventListener('keyup', function(){
    var regis3_universityval = $('#ValidationUniversityFeedback').val();
    if(regis3_universityval == ''){
      $('#ValidationUniversityFeedback').removeClass('is-valid');
      $('#ValidationUniversityFeedback').addClass('is-invalid');
    }
    else {
      $('#ValidationUniversityFeedback').removeClass('is-invalid');
      $('#ValidationUniversityFeedback').addClass('is-valid');
    }});

ValidationFaculty = document.getElementById('ValidationFacultyFeedback');                   
ValidationFaculty.addEventListener('keyup', function(){
    var regis3_facultyval = $('#ValidationFacultyFeedback').val();
    if(regis3_facultyval == ''){
      $('#ValidationFacultyFeedback').removeClass('is-valid');
      $('#ValidationFacultyFeedback').addClass('is-invalid');
    }
    else {
      $('#ValidationFacultyFeedback').removeClass('is-invalid');
      $('#ValidationFacultyFeedback').addClass('is-valid');
    }});
/*
let regis3_HigherConfirm = document.getElementById('regis3_HigherConfirm');
var regis3_dropdwn1selected = $('#regis3_selectdropdown1').val();
var regis3_universityval = $('#ValidationUniversityFeedback').val();
console.log(11 + regis3_dropdwn1selected + regis3_universityval + 22)
if( regis3_dropdwn1selected != '' && regis3_universityval != '')
  regis3_HigherConfirm.disabled = true;
else
  regis3_HigherConfirm.disabled = false;
*/

 /*Lower*/
 regis3Secondary_dropdwn1 = document.getElementById('regis3_selectdropdown2');                   
 regis3Secondary_dropdwn1.addEventListener('change', function(){
     var regis3_dropdwn2selected = $('#regis3_selectdropdown2').val();
   if(regis3_dropdwn2selected != ''){
     $('#regis3_selectdropdown2').addClass('is-valid');
   }});

ValidationSchool = document.getElementById('ValidationSchoolFeedback');                   
ValidationSchool.addEventListener('keyup', function(){
    var regis3_schoolval = $('#ValidationSchoolFeedback').val();
    if(regis3_schoolval == ''){
      $('#ValidationSchoolFeedback').removeClass('is-valid');
      $('#ValidationSchoolFeedback').addClass('is-invalid');
    }
    else {
      $('#ValidationSchoolFeedback').removeClass('is-invalid');
      $('#ValidationSchoolFeedback').addClass('is-valid');
    }});

/*Tab7*/
var sskdd1 = '<div class="col-2">\
                <div class="bookmark-content">\
                <img class="obj-icon tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab7-1" id="valss1" alt="" width="30" height="30"/>\
                </div>\
              </div>\
              </div>\
              ';
var sskdd2 = '<div class="col-2">\
                <div class="bookmark-content">\
                <img class="obj-icon tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab7-2" id="valss2" alt="" width="30" height="30"/>\
                </div>\
              </div>\
              </div>\
              ';
var sskdd3 = '<div class="col-2">\
              <div class="bookmark-content">\
              <img class="obj-icon tooltips-item" src="assets/images/bin.png" type="button" data-bs-toggle="modal" toggle-type="dynamic"data-bs-target="#Modaltab7-3" id="valss3" alt="" width="30" height="30"/>\
              </div>\
            </div>\
            </div>\
            ';
var sideskilldropdown1_1 = '<div class="container-fluid dropbtn-box form-f " id="ssl_1">\
                              <div class="row">\
                                <div class="col-10">\
                                  <a>\
                                  ';
var sideskilldropdown1_2 = '<div class="container-fluid dropbtn-box form-f " id="ssl_2">\
                                  <div class="row">\
                                    <div class="col-10">\
                                      <a>\
                                      ';
var sideskilldropdown1_3 = '<div class="container-fluid dropbtn-box form-f " id="ssl_3">\
                              <div class="row">\
                                <div class="col-10">\
                                  <a>\
                                  ';
var sideskilldropdown2 = '</a>\
                          </div>\
                          ';
var sideskill_count=0;
var max_sideskill=3;
var sumsideskill='';
var valss_now='';
var valt7_1 = '';
var valt7_2 = '';
var valt7_3 = '';

/*$(document).on('change', 'input', function(){
    var options = $('datalist')[0].options;
    var val = $(this).val();
    for (let i=0;i<options.length;++i){
       if (options[i].value === val) {
          console.log("User selected: "+val+" -> Remove focus away.");
		      $('#sideskilllist').blur();
          sideskill_count += 1;
          console.log(val)
          if(sideskill_count == 1){
            $('#sideskilllist1').hide();          
            valss_now = $('#sideskilllist1').val();
            valt7_1 = valss_now;
            console.log(valss_now);
            sumsideskill = sideskilldropdown1_1 + valss_now + sideskilldropdown2 + sskdd1;
            console.log(sumsideskill);
            $('.dropdowntap7_1').append(sumsideskill);
            sumsideskill = '';
            $('#sideskilllist2').show();
          }
          else if(sideskill_count == 2){
            $('#sideskilllist2').hide(); 
            $('#sideskilllist3').show();
            valss_now = $('#sideskilllist2').val();
            valt7_2 = valss_now;
            vvv = valss_now.length;
            console.log(valss_now);
            console.log('Length : ' + vvv);
            sumsideskill = sideskilldropdown1_2 + valss_now + sideskilldropdown2 + sskdd2;
            console.log(sumsideskill);
            $('.dropdowntap7_2').append(sumsideskill);
            sumsideskill = '';
          }
          else if(sideskill_count == 3){
            $('#sideskilllist3').hide(); 
            valss_now = $('#sideskilllist3').val();
            valt7_3 = valss_now;
            console.log(valss_now);
            sumsideskill = sideskilldropdown1_3 + valss_now + sideskilldropdown2 + sskdd3;
            console.log(sumsideskill);
            $('.dropdowntap7_3').append(sumsideskill);
            sumsideskill = '';
          }
          break;
       }
    }
});*/
var Dropdownsideskill1 = '<div class="row ddt7_1">\
<div class="col-md-6">\
  <select class="form-select dropbtn fff" id="ch1">\
    <option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>\
    <option value="Technical">Technical</option>\
    <option value="Computer">Computer</option>\
    <option value="Analytical">Analytical</option>\
    <option value="Marketing">Marketing</option>\
    <option value="Presentation">Presentation</option>\
    <option value="Management">Management</option>\
    <option value="Writing">Writing</option>\
    <option value="Language">Language</option>\
    <option value="Design">Design</option>\
  </select>\
</div>\
<div class="col-md-6">\
  <select class="form-select dropbtn" id="sideskilllist1">\
    <option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>\
  </select>\
</div>\
</div>\
';

var Dropdownsideskill2 = '<div class="row ddt7_2">\
<div class="col-md-6">\
  <select class="form-select dropbtn fff" id="ch2">\
    <option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>\
    <option value="Technical">Technical</option>\
    <option value="Computer">Computer</option>\
    <option value="Analytical">Analytical</option>\
    <option value="Marketing">Marketing</option>\
    <option value="Presentation">Presentation</option>\
    <option value="Management">Management</option>\
    <option value="Writing">Writing</option>\
    <option value="Language">Language</option>\
    <option value="Design">Design</option>\
  </select>\
</div>\
<div class="col-md-6">\
  <select class="form-select dropbtn" id="sideskilllist2">\
    <option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>\
  </select>\
</div>\
</div>\
';

var Dropdownsideskill3 = '<div class="row ddt7_3">\
<div class="col-md-6">\
  <select class="form-select dropbtn fff" id="ch3">\
    <option selected disabled value="">เลือกหมวดทักษะเสริมที่ถนัด</option>\
    <option value="Technical">Technical</option>\
    <option value="Computer">Computer</option>\
    <option value="Analytical">Analytical</option>\
    <option value="Marketing">Marketing</option>\
    <option value="Presentation">Presentation</option>\
    <option value="Management">Management</option>\
    <option value="Writing">Writing</option>\
    <option value="Language">Language</option>\
    <option value="Design">Design</option>\
  </select>\
</div>\
<div class="col-md-6">\
  <select class="form-select dropbtn" id="sideskilllist3">\
    <option selected disabled value="">เลือกทักษะเสริมที่ถนัด</option>\
  </select>\
</div>\
</div>\
';

$(function(){
  $('#del_sideskill1').on('click', function(){
    console.log('EiEi this is Del1');
    console.log('SSK1 :' + valt7_1);
    console.log('SSK2 :' + valt7_2);
    console.log('SSK3 :' + valt7_3);
    $('#ssl_1').remove();
    $('.ddt7_1').remove();
    console.log('Sum SSK :' + sideskill_count + '!!!');
    if(sideskill_count==1){
      sumsideskill = Dropdownsideskill1;
      $('.dropdowntap7_1').append(sumsideskill);
      sumsideskill = '';
      $('.ddt7_2').hide();
    }
    else if(sideskill_count==2){
      $('.ddt7_2').remove();
      sumsideskill = sideskilldropdown1_1 + valt7_2 + sideskilldropdown2 + sskdd1;
      $('.dropdowntap7_1').append(sumsideskill);
      $('#ssl_2').remove();
      sumsideskill = Dropdownsideskill2;
      $('.dropdowntap7_2').append(sumsideskill);
      sumsideskill = '';
      $('.ddt7_3').hide();

    }
    sideskill_count -= 1;
  });
  $('#del_sideskill2').on('click', function(){
    console.log('EiEi this is Del2');
    $('#ssl_2').remove();
    sideskill_count -= 1;
  });
  $('#del_sideskill3').on('click', function(){
    console.log('EiEi this is Del3');
    $('#ssl_3').remove();
    $('#sideskilllist3').show();
    sideskill_count -= 1;
  });
});

$(function(){
  $('#sideskilllist1').on('change', function(){
    console.log('EiEi this is Sel1');
    valss_now = $('#sideskilllist1').val();
    valt7_1 = valss_now;
    //console.log(valss_now);
    sumsideskill = sideskilldropdown1_1 + valss_now + sideskilldropdown2 + sskdd1;
    $('.dropdowntap7_1').append(sumsideskill);
    sumsideskill = '';
    $('.ddt7_1').hide();
    $('.ddt7_2').show();
    sideskill_count += 1;
    console.log('Sum SSK ++:' + sideskill_count + '!');
    console.log(list_of_certi);
  });
  $('#sideskilllist2').on('change', function(){
    console.log('EiEi this is Sel2');
    valss_now = $('#sideskilllist2').val();
    valt7_2 = valss_now;
    console.log(valss_now);
    sumsideskill = sideskilldropdown1_2 + valss_now + sideskilldropdown2 + sskdd2;
    $('.dropdowntap7_2').append(sumsideskill);
    sumsideskill = '';
    $('.ddt7_2').hide();
    $('.ddt7_3').show();
    sideskill_count += 1;
    console.log('Sum SSK ++:' + sideskill_count + '!!');
  });
  $('#sideskilllist3').on('change', function(){
    console.log('EiEi this is Sel3');
    valss_now = $('#sideskilllist3').val();
    valt7_1 = valss_now;
    console.log(valss_now);
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

$('#province').change(function () {
  var selectedText1 = $(this).find("option:selected").text();
  console.log(selectedText1);
  GetDistrict(selectedText1);
});

function GetDistrict(text){
	fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/" + text +'/district',
		{ method: "GET", })
		.then(response => response.json())
		//.then(response => response.result)
		.then((raws) => {
			/*console.log(raws);*/
			raws.data.forEach((entrys) => {
				//console.log(entrys);
        var dis_now = entrys;
        $('#townny').append($('<option />').val(dis_now).html(dis_now));
			});

        }).catch((error) => {
			  console.log(error);
			});
		
}

function PostRegis(){
  fetch("http://localhost:2000/register",
		{ method: "POST",
		  body: JSON.stringify({
          Email:"nattayaporn.k@ku.th",
          Password:"nattayaporn123",
          ProfilePic:"",
          Privacy: "Private",
          isEmailConfirmed: false,
          Firstname:"Nattayaporn",
          Lastname:"Koonwattanapong",
          Birthday:"19/4/2001",
          Gender:"หญิง",
          AboutMe:"ลองpostปลอมๆนะครับผม อย่าได้นำพา งานยังไม่เสด2",
          Email2nd:"",
          Country:"ประเทศไทย",
          Province:"สุรินทร์",
          City:"ในเมือง",
          SoftSkill:["Photoshop","Drawing","Python"],
          CertName:["ชนะเลิศการแข่งขันคิดเลขเร็วแห่งชาติ","รองชนะเลิศการแข่งขันกระโดดเชือกหมู่"],
          CertPic:["pic1","pic2"],
          CertYear:[2008,2012],
          Degree:["ปริญญาตรี"],
          Facalty:["วิศวกรรมศาสตร์"],
          Field_of_study:["คอมพิวเตอร์"],
          Academy:["มหาวิทยาลัยเกษตรศาสตร์"],
          Grade:[2.50],
          Education_Start_Year:[2018],
          Education_End_Year:[],
          Work_JobName:[],
          Work_JobType:[],
          Company:[],
          Work_Start_Month:[],
          Work_End_Month:[],
          Work_Start_Year:[],
          Work_End_Year:[],
          Salary:[],
          Infomation:[],
          Job_Objective:["อยากเกิดเป็นแมวคนรวย"],
          Job_Score:[],
          Job_JobName:[],
          Job_SkillName:[]
      })}
  )
    .then(function (response) {
        window.location.pathname = '/emailverify'
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
    'Troubleshooting'], Computer: ['Python','C']};

    $(function(){
      $('#ch1').on('change', function(){
        console.log('Checkkaaaa');
        var chss_now = $('#ch1').val();
        cht7_1 = chss_now;
        console.log('I am :' + chss_now);
        //console.log(DropdownsideskillChoice[chss_now]);
        DropdownsideskillChoice[chss_now].forEach((entryc1) => {
          var ch_now1 = entryc1;
          //console.log('I am Choice:' + ch_now1);
          $('#sideskilllist1').append($('<option />').val(ch_now1).html(ch_now1));
        })
      });
      $('#ch2').on('change', function(){
        var chss_now = $('#ch2').val();
        cht7_2 = chss_now;
        DropdownsideskillChoice[chss_now].forEach((entryc2) => {
          var ch_now2 = entryc2;
          $('#sideskilllist2').append($('<option />').val(ch_now2).html(ch_now2));
        })
      });
      $('#ch3').on('change', function(){
        var chss_now = $('#ch3').val();
        cht7_3 = chss_now;
        DropdownsideskillChoice[chss_now].forEach((entryc3) => {
          var ch_now3 = entryc3;
          $('#sideskilllist3').append($('<option />').val(ch_now3).html(ch_now3));
        })
      });
    });