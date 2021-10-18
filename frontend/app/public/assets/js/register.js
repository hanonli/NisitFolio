/*For Javascript Desu*/
window.onload = () => {
  //const myInput1 = document.getElementById('pass05');
  const myInput2 = document.getElementById('pass06');
  //myInput1.onpaste = e => e.preventDefault();
  myInput2.onpaste = e => e.preventDefault();
 }

/*Tabs New*/
$(function(){
    //$('.tab-content').hide();
    $('#registab1-content').show();
    $('#continue2').show();
    $('#basic-date-picker1').attr('placeholder','วัน/เดือน/ปี');
    $('#ddt7s').hide();
    $('#toggleEmailW').hide();
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
    });

 });

/*Tab1*/
var RequestCount_email=0;
$('#continue2').click(function () {
  $('#ssl1').removeClass('borderred');
  $('#ssl2').removeClass('borderred');
  $('#ssl3').removeClass('borderred');
  var RequestCount_email=0;
  var BDDate= $('#basic-date-picker1').val();
  var last_province= $('#province').val();
  var last_city = $('#townny').val();
  var last_aboutme = $('#aboutme2').val();
  var last_sideskill = [];
  var last_typesideskill = [];
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
    if(entry.skill1=="none"&&entry.skill2=="none"&&entry.skill3!="none"){
      entry.skill1 = entry.skill3;
      entry.score_skill1 = entry.score_skill3;
      entry.skill3 = "none";
      entry.score_skill3 = "2.5";
  }
  else if(entry.skill1=="none"&&entry.skill2!="none"&&entry.skill3=="none"){
      entry.skill1 = entry.skill2;
      entry.score_skill1 = entry.score_skill2;
      entry.skill2 = "none";
      entry.score_skill2 = "2.5";
  }
  else if(entry.skill1=="none"&&entry.skill2!="none"&&entry.skill3!="none"){
      entry.skill1 = entry.skill2;
      entry.score_skill1 = entry.score_skill2;
      entry.skill2 = entry.skill3;
      entry.score_skill2 = entry.score_skill3;
      entry.skill3 = "none";
      entry.score_skill3 = "2.5";
  }
  else if(entry.skill1!="none"&&entry.skill2=="none"&&entry.skill3!="none"){
      entry.skill2 = entry.skill3;
      entry.score_skill2 = entry.score_skill3;
      entry.skill3 = "none";
      entry.score_skill3 = "2.5";
  }
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
    if(entry.obj1==""&&entry.obj2==""&&entry.obj3!=""){
      entry.obj1 = entry.obj3;
      entry.obj3 = "";
    }
    else if(entry.obj1==""&&entry.obj2!=""&&entry.obj3==""){
        entry.obj1 = entry.obj2;
        entry.obj2 = "";
    }
    else if(entry.obj1==""&&entry.obj2!=""&&entry.obj3!=""){
        entry.obj1 = entry.obj2;
        entry.obj2 = entry.obj3;
        entry.obj3 = "";
    }
    else if(entry.obj1!=""&&entry.obj2==""&&entry.obj3!=""){
        entry.obj2 = entry.obj3;
        entry.obj3 = "";
    }       
    if(entry.obj1==""){
        entry.obj1 = "none";
    }
    if(entry.obj2==""){
        entry.obj2 = "none";
    }
    if(entry.obj3==""){
        entry.obj3 = "none";
    }        
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
    //last_grade.push(parseFloat(entry.aca_grade));
    last_eduyear.push(entry.aca_year);
    var total_grade_aca = new Float32Array(1);
    total_grade_aca[0] = entry.aca_grade;
    //console.log(total_grade_aca[0]);
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
    total_grade_high[0] = entry.high_grade;
    last_grade.push(total_grade_high[0]);
  });
  //console.log('grade = ' + last_grade);
  //console.log(last_eduyear);
  //console.log(last_jobname);
  var last_poswork=[],last_typework=[],last_company=[],last_typesalary=[],last_salary=[],last_yearstart=[],last_monthstart=[],last_yearend=[],last_monthend=[],last_inform=[];
  list_of_work.forEach((entry) => {
    //console.log(entry);
    last_poswork.push(entry.pos_work);
    last_typework.push(entry.type_work);
    last_company.push(entry.company_work);
    last_typesalary.push(entry.type_salary_work);
    last_salary.push(entry.salary_work);
    last_yearstart.push(entry.year_startwork);
    last_monthstart.push(entry.month_startwork);
    last_inform.push(entry.inform_work);
    if(entry.regist4_cb==true){
      last_yearend.push(9999);
      last_monthend.push(99);
    }
    else if(entry.year_endwork==NaN){
      last_yearend.push(0);
      last_monthend.push(0);
    }
    else{
      last_yearend.push(entry.year_endwork);
      last_monthend.push(entry.month_endwork);
    }
  });
  var ssss1 = Cookies.get('sideskill1');
  var tssss1 = Cookies.get('typesideskill1');
  var ssss2 = Cookies.get('sideskill2');
  var tssss2 = Cookies.get('typesideskill2');
  var ssss3 = Cookies.get('sideskill3');
  var tssss3 = Cookies.get('typesideskill3');
  console.log('type'+tssss1+'+'+tssss2+'+'+tssss3);
  console.log('skill'+ssss1+'+'+ssss2+'+'+ssss3);
  var checkTab7 = 0;
  if(ssss1==''){
    var last_sideskill = [];
    var last_typesideskill = [];
    checkTab7 = 1;
  }
  else if(ssss1==ssss2&&ssss1==ssss3){
    $('.tab-content').hide();
    $('.tab-list-item').removeClass('tab-list-active');
    $('#tab-7').addClass('tab-list-active')
    $('#registab7-content').show();
    $('#ssl1').addClass('borderred');
    $('#ssl2').addClass('borderred');
    $('#ssl3').addClass('borderred');
    checkTab7 = 0;
  }
  else if(ssss1==ssss2&&ssss1!=""&&ssss2!=""){
    $('.tab-content').hide();
    $('.tab-list-item').removeClass('tab-list-active');
    $('#tab-7').addClass('tab-list-active')
    $('#registab7-content').show();
    $('#ssl1').addClass('borderred');
    $('#ssl2').addClass('borderred');
    checkTab7 = 0;
  }
  else if(ssss1==ssss3&&ssss1!=""&&ssss3!=""){
    $('.tab-content').hide();
    $('.tab-list-item').removeClass('tab-list-active');
    $('#tab-7').addClass('tab-list-active')
    $('#registab7-content').show();
    $('#ssl1').addClass('borderred');
    $('#ssl3').addClass('borderred');
    checkTab7 = 0;
  }
  else if(ssss3==ssss2&&ssss3!=""&&ssss2!=""){
    $('.tab-content').hide();
    $('.tab-list-item').removeClass('tab-list-active');
    $('#tab-7').addClass('tab-list-active')
    $('#registab7-content').show();
    $('#ssl3').addClass('borderred');
    $('#ssl2').addClass('borderred');
    checkTab7 = 0;
  }
  else if(ssss2==''){
    var last_sideskill = [ssss1];
    var last_typesideskill = [tssss1];
    checkTab7 = 1;
  }
  else if(ssss3==''){
    var last_sideskill = [ssss1,ssss2];
    var last_typesideskill = [tssss1,tssss2];
    checkTab7 = 1;
  }
  else{
    var last_sideskill = [ssss1,ssss2,ssss3];
    var last_typesideskill = [tssss1,tssss2,tssss3];
    checkTab7 = 1;
  }
  if($('#re03').val()!=""){
    console.log("http://localhost:2000/kuay/"+$('#re03').val())
    fetch("http://localhost:2000/kuay/"+$('#re03').val(),
		{ method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
		}
  )
    .then(function (response) {
        //window.location.pathname = '/emailverify'
        console.log(response);
        //alert(checkcaseEmail);
         if (!response.ok) {
          if(response.statusText='Unauthorized' && checkcaseEmail==1){
            //alert("ใช้อีเมลนี้ได้จ้า");
            $('#re03').removeClass('is-invalid');
            $('#re03').addClass('is-valid');
            //alert(RequestCount_email);
            RequestCount_email=1;
            //alert(RequestCount_email);
            //$('#toggleEmailW').hide();
          }
        }
        else{
          //alert("มีอีเมลนี้แล้วในระบบ");
          //window.location.href = "http://localhost:3000/emailverify";
          $('#re03').removeClass('is-valid');
          $('#re03').addClass('is-invalid');
          $('#re03').removeClass('margin-bottom1');
          //$('#re03').addClass('margin-bottom2');
          $('#toggleEmailW').show();
          RequestCount_email=0;
        }
        //alert(RequestCount_email);
        return response,RequestCount_email;
    })
  }
  setTimeout(() => {
    if($('#re03').hasClass('is-valid')){
    RequestCount_email=1;
  }
  //alert(RequireCount_pass +'+' +RequestCount_email+'+'+checkTab7);
  if(RequireCount_pass==1 && RequestCount_email==1 && checkTab7 == 1){     
    if(avatar1.src=="http://localhost:3000/assets/images/Circleuploadprofile.png"){
      var last_avatar="http://localhost:3000/assets/images/profile_uk.png";
    }
    else{
      var last_avatar=avatar1.src;
    }
    console.log('You Pass!'); 
    Cookies.set('Email-verify',$('#re03').val());
    var saveEmail = Cookies.get('Email-verify');
    //alert(saveEmail);
    //window.location.pathname = '/emailverify'
    var FormRegis2 = {
      Email: $('#re03').val(),
      Password: $('#pass05').val(),
      ProfilePic: last_avatar,
      ProfilePicBase64: last_avatar,
      Firstname: $('#re01').val(),
      Lastname: $('#re02').val(),
      Birthday: BDDate,
      Gender: $('#sexgen').val(),
      AboutMe: last_aboutme,
      Email2nd:"-",
      Country:"ประเทศไทย",
      Province:last_province,
      City:last_city,
      SoftSkill:last_sideskill,
      SoftSkillType: last_typesideskill,
      CertName:last_certname,
      CertPic:last_certpic,
      CertYear:last_certyear,
      Degree:last_degree,
      Facalty:last_faculty,
      Field_of_study:last_fos,
      Academy:last_aca,
      Grade:last_grade,
      Education_End_Year:last_eduyear,
      Work_JobName:last_poswork,
      Work_JobType:last_typework,
      Company:last_company,
      Work_Start_Month:last_monthstart,
      Work_End_Month:last_monthend,
      Work_Start_Year:last_yearstart,
      Work_End_Year:last_yearend,
      Salary:last_salary,
      SalaryType:last_typesalary,
      Infomation:last_inform,
      Job_JobName:last_jobname,
      Job_SkillName: last_jobskill,
      Job_Score: last_jobscore,
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
},1000);
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
var checkcaseEmail=0;            
ret3.addEventListener('keyup', function(){
  var input=$(this);
  //console.log('Email : ' + input);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){
    input.removeClass("is-invalid").addClass("is-valid");
    checkcaseEmail=1;
  }
	else{
    input.removeClass("is-valid").addClass("is-invalid");
    checkcaseEmail=0;
  }
});
/*
ret3.addEventListener('keyup',function(){
  var input=$(this).val();
  //alert(input);
  fetch("http://localhost:2000/kuay/"+input,
		{ method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
		}
  )
    .then(function (response) {
        //window.location.pathname = '/emailverify'
        //alert(response.message);
        if (!response.ok) {
          if(response.statusText='Unauthorized'){
            //alert("ใช้อีเมลนี้ได้จ้า");
            $('#re03').removeClass('is-invalid');
            $('#re03').addClass('is-valid');
          }
          //throw Error(response.statusText);
        }
        else{
          //alert("มีอีเมลนี้แล้วในระบบ");
        //window.location.href = "http://localhost:3000/emailverify";
         $('#re03').removeClass('is-valid');
         $('#re03').addClass('is-invalid');
        }
        return response;
    }).catch(function(error) {
        console.log(error);
    });
})*/
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
/*
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
*/
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
/*
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
*/
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
        //alert(response.message);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        else{
          console.log("ok");
          window.location.href = "http://localhost:3000/emailverify";
        }
        return response;
    }).catch(function(error) {
        console.log(error);
    });
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
   