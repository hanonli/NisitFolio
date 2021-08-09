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

/*Tab7*/
var sideskilldropdown1 = '<input class="form-control dropbtn ssf" list="sideskillop" id="sideskilllist'
var sideskilldropdown2 = '" placeholder="เลือกทักษะเสริมที่ถนัด"></input>'
var sideskill_count=0;
var max_sideskill=3;
var sumsideskill='';

$(document).on('change', 'input', function(){
    var options = $('datalist')[0].options;
    var val = $(this).val();
    for (let i=0;i<options.length;++i){
       if (options[i].value === val) {
          console.log("User selected: "+val+" -> Remove focus away.");
		  $('#sideskilllist').blur();
          sideskill_count += 1;
          console.log(val)
          if(sideskill_count < max_sideskill){
            sumsideskill = sideskilldropdown1 + sideskill_count + sideskilldropdown2;
            console.log(sumsideskill);
            $('.dropdowntap7').append(sumsideskill); /*Append dropdown1,2*/
            break;
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

$('#del_sideskill').click(function() {
    $('.dropdowntap7').remove();
})
