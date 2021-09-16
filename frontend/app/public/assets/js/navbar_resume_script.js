console.log('using resume script')
$(".Home" ).ready(function() {
    $('.Home').css('overflow','hidden');

});

$(".MyResumeContent" ).ready(function() {
    $('.MyResumeContent').css("padding-left",'40px');
});


let toggle=false;
$( "#slidenav" ).click(function() {
    // alert(`toggle ${toggle}`)
    if(!toggle){
        // alert('toggle open')
        $("#sideNav").css("width", "50%");
        $('.MyResumeContent').css("width","80%")
        $("#icon-slide_right").css("transform", "rotate(180deg)");
        $(".sidenav-centered").css("left", "97%");
        $('.MyResumeContent').css("padding-left","50%");
        $('.MyResumeContent').css("padding-left","50%");


    }
    else if(toggle){
        // alert('toggle close')
        $("#sideNav").css("width", "40px");
        $("#icon-slide_right").css("transform", "rotate(0deg)");
        $(".sidenav-centered").css("left", "50%");
        $('.MyResumeContent').css("padding-left","40px");
    }
    toggle=!toggle;  
});

  
