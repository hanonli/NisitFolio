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
          $('#sideskilllist2').hide();
          $('#sideskilllist3').hide();
        }
        else if(sideskill_count == 1){
          $('#sideskilllist2').show();
          $('#sideskilllist3').hide();
        }
        else if(sideskill_count == 2){
          $('#sideskilllist2').show();
          $('#sideskilllist3').show();
        }
    });

   

 });

/*Zone Agreement*/

//Program to disable or enable a button 
//$('#continue1').prop('disabled', true);
//$('#continue2').prop('disabled', true);

$('#agree1').click(function () {           
    $('#continue1').prop('disabled', false);
  });

/*Tab1*/
let startYear = 1950;
let endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--) {
    $('#bdyear').append($('<option />').val(i).html(i));
}

let MaxM = 13;
let startM = 1;
for (j = startM; j < MaxM; j++) {
    $('#bdmonth').append($('<option />').val(j).html(j));
}


let MaxD = 32;
let startD = 1;
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
            reader.onload = function (e) {
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
function checkPass(e) {                                    
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
    }
    else if(checknow > max_pass_count){
      $('#pass05').removeClass('is-valid');
      $('#pass05').addClass('is-invalid');
      $('#pass06').removeClass('is-valid');
      $('#pass06').addClass('is-invalid');
    }
    else{
      $('#pass05').removeClass('is-invalid');
      $('#pass05').addClass('is-valid');
      $('#pass06').removeClass('is-invalid');
      $('#pass06').addClass('is-valid');
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

function countCharactersAbme(e) {                                    
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
var sideskilldropdown1_1 = '<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl_1">\
                              <div class="row">\
                                <div class="col-10">\
                                  <a>\
                                  ';
var sideskilldropdown1_2 = '<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl_2">\
                                  <div class="row">\
                                    <div class="col-10">\
                                      <a>\
                                      ';
var sideskilldropdown1_3 = '<div class="container-fluid dropbtn-box form-f margin-bottom1" id="ssl_3">\
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

$(document).on('change', 'input', function(){
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
            console.log(valss_now);
            sumsideskill = sideskilldropdown1_3 + valss_now + sideskilldropdown2 + sskdd3;
            console.log(sumsideskill);
            $('.dropdowntap7_3').append(sumsideskill);
            sumsideskill = '';
          }
          break;
       }
    }
});

/*
$('.xxx').click(function () {           
    alert("Hello! I am an alert box!!");
        $('#sideskilllist').blur();
  });
*/
/*$('#del_sideskill').click(function() {
  var valss = $(this).val();
  if(valss == $('#valss1').val()){
    $('.dropdowntap7_1').remove();
  }
  else if(valss == $('#valss2').val()){
    $('.dropdowntap7_2').remove();
  }
  else if(valss == $('#valss3').val()){
    $('.dropdowntap7_3').remove();
  }
    
})
*/


/* $('#valss1').on('click', function(){
      console.log('EiEi this is Bin1');
      $('#del_sideskill1').on('click', function(){
        console.log('EiEi this is Del1');
        $('#ssl_1').remove();
        sideskill_count -= 1;
})});
    
$('#valss2').on('click', function(){
        $('#del_sideskill2').on('click', function(){
          $('#ssl_2').remove();
          sideskill_count -= 1;
    })});
    
    $('#valss3').on('click', function(){
          $('#del_sideskill3').on('click', function(){
            $('#ssl_3').remove();
            sideskill_count -= 1;
    })});
*/
$(function(){
  $('#del_sideskill1').on('click', function(){
    console.log('EiEi this is Del1');
    console.log(valt7_1);
    console.log(valt7_2);
    console.log(valt7_3);
    $('#ssl_1').remove();
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
    sideskill_count -= 1;
  });
});
