$(document).ready( function() {
    console.log('using resume script')
    $('#icon-myresume-education, #icon-myresume-certi, #icon-myresume-skill, #icon-myresume-work, #icon-myresume-goal, #icon-myresume' )
    .attr({
        
        'width': ' 40%',
        'height' : '40%',
        "padding-top" : "0vh",
        "margin-bottom" : "0vh"
    });
    $(".resumeblock").hover(function(){
        $(this).css("background-color", "#e6ba4e");
        }, function(){
        $(this).css("background-color", "#FFCE55");
      });

    $('#icon-myresume-education').attr('title', 'Education');
    $('#icon-myresume-certi').attr('title', 'Certificate');
    $('#icon-myresume-skill').attr('title', 'Skill');
    $('#icon-myresume-work').attr('title', 'Work');
    //$('#icon-myresume-education').attr('title', 'education');
    $('#icon-myresume-goal').attr('title', 'Goal');
    

});



$('.Home').css('overflow','hidden');
$('.MyResumeContent').css("padding-left",'6vw');
$('.Resume_sideNavbar').css("transition","0.3s");
$('.resumeblock').css({
    'width' : '6vw',
    'height' : '16.67vh',
    "padding-top" : "3.03vw",

});


$(window).on("scroll load resize", function(){
    
    if($(window).scrollTop() > 0){
        $('.Resume_sideNavbar').css("padding-top","0vh");
        $('.resumeblock').css({
            "height": "8.47vw",
            "padding-top" : "3.03vw",
        });

    }else{
        $('.Resume_sideNavbar').css({
            "padding-top":"3.4vw",
            "padding-bottom":"0vh"
        });
        $('.resumeblock').css({
            "height": "7.9vw",
            "padding-top" : "2.8vw",
        });

    }
});


