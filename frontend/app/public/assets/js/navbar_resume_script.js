console.log('using resume script')
$( ".MyResumeContent" ).ready(function() {
    $('.MyResumeContent').css("padding-left",'50px');
});


let toggle=false;
$( "#slidenav" ).click(function() {
    // alert(`toggle ${toggle}`)
    if(!toggle){
        // alert('toggle open')
        $("#sideNav").css("width", "50%");
        $("#icon-slide_right").css("transform", "rotate(180deg)");
        $(".sidenav-centered").css("left", "98%");
    }
    else if(toggle){
        // alert('toggle close')
        $("#sideNav").css("width", "40px");
        $("#icon-slide_right").css("transform", "rotate(0deg)");
        $(".sidenav-centered").css("left", "50%");
    }
    toggle=!toggle;  
});

  
