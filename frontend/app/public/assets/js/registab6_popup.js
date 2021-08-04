/*For Javascript Desu*/

/*Tabs New*/
$(function () {
    $('.tab-content-job').hide();
    $('#tabP1-content-job').show();
    console.log("NhaHee!!!!");
    $('#tab-1-job').on('click', function () {
        $('.tab-content-job').hide();
        $('.tab-list-item-job').removeClass('tab-list-active-job');
        $('#tab-1-job').addClass('tab-list-active-job')
        $('#tabP1-content-job').show();
    });

    $('#tab-2-job').on('click', function () {
        $('.tab-content-job').hide();
        $('.tab-list-item-job').removeClass('tab-list-active-job');
        $('#tab-2-job').addClass('tab-list-active-job')
        $('#tabP2-content-job').show();
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