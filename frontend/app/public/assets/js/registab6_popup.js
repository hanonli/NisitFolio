/*For Javascript Desu*/

/*Tabs New*/
$(function () {
    $('.tab-content').hide();
    $('#tabP1-content').show();
    console.log("NhaHee!!!!");
    $('#tab-11').on('click', function () {
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-11').addClass('tab-list-active')
        $('#tabP1-content').show();
    });

    $('#tab-12').on('click', function () {
        $('.tab-content').hide();
        $('.tab-list-item').removeClass('tab-list-active');
        $('#tab-12').addClass('tab-list-active')
        $('#tabP2-content').show();
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

$(function () {
    $('#sideskillop').on('click', function () {
        $('#sideskilllist').blur();
    });
});

$('#datepicker').datepicker();
var date = $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val();
var date = $('#datepicker').datepicker('getDate');