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
    console.log(FormRegis);
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

function PostRegis(){
  fetch("http://localhost:2000/register",
		{ method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
		  body: JSON.stringify(FormRegis)}
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
    
    const FormRegis = {
      Email:"rungnattayaporn40@gmail.com",
      Password:"nattayaporn1234",
      ProfilePic:"data:image/png;base64,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",
      Privacy: "Public",
      isEmailConfirmed: false,
      Firstname:"Natty",
      Lastname:"Koonwatty",
      Birthday:"23/10/2000",
      Gender:"หญิง",
      AboutMe:"ลองpostปลอมๆนะครับผม อย่าได้นำพา งานยังไม่เสด ver2",
      Email2nd:"",
      Country:"ประเทศไทย",
      Province:"สุรินทร์",
      City:"ในเมือง",
      SoftSkill:["Web","Painting","C"],
      CertName:["ชนะเลิศการแข่งขันท่องสูตรคูณแห่งชาติ","รองชนะเลิศการแข่งขันปิงปองพาราลิมปิก"],
      CertPic:["pic11","pic21"],
      CertYear:[2009,2013],
      Degree:["ปริญญาตรี"],
      Facalty:["วิทยาศาสตร์"],
      Field_of_study:["คอมพิวเตอร์"],
      Academy:["มหาวิทยาลัยเกษตรศาสตร์ บางเขน"],
      Grade:[2.55],
      Education_Start_Year:[2019],
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
      Job_Objective:["อยากได้หัวหน้าที่ไม่กดขี่ลูกน้อง"],
      Job_Score:[],
      Job_JobName:[],
      Job_SkillName:[]
  }
    const FormRegis2 = {
      Email:"rungnattayaporn40@gmail.com",
      Password:"nattayaporn1234",
      Firstname:"Natty",
      Lastname:"Koonwatty",
      Birthday:"23/10/2000",
      Gender:"หญิง",
      SoftSkill:[],
      CertName:[],
      Degree:[],
      Work_JobName: [],
      Job_JobName: []
  }
    
    console.log(JSON.stringify(FormRegis));
    console.log(JSON.stringify(FormRegis2));