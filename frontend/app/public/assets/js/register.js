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

/*let continue1 = document.getElementById('continue1');
let buttonagree = document.getElementById('agree1');

continue1.disabled = true; //setting button state to disabled

buttonagree.addEventListener("click", stateHandle);

function stateHandle() {
    if (document.querySelector("#continue1").value === "") {
        continue1.disabled = true; //button remains disabled
    } else {
        continue1.disabled = false; //button is enabled
    }
}

*/

/*Tab7*/

$(document).on('change', 'input', function(){
    var options = $('datalist')[0].options;
    var val = $(this).val();
    for (let i=0;i<options.length;++i){
       if (options[i].value === val) {
          console.log("User selected: "+val+" -> Remove focus away.");
		  $('#sideskilllist').blur();
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

$('#datepicker').datepicker();
var date = $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val();
var date = $('#datepicker').datepicker('getDate');