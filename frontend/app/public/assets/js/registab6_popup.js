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
