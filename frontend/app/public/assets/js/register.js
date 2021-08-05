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
$('#continue1').prop('disabled', true);
$('#continue2').prop('disabled', true);

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

/*Tab7*/
var sideskilldropdown = '<input class="form-control dropbtn ssf" list="sideskillop" id="sideskilllist" placeholder="เลือกทักษะเสริมที่ถนัด"></input>'
var sideskill_count=0;
var max_sideskill=3;

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
            $('.dropdowntap7').append(sideskilldropdown);
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

