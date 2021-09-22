$(document).ready( function() {

    $('#icon-myresume-education, #icon-myresume-certi, #icon-myresume-skill, #icon-myresume-work, #icon-myresume-goal, #icon-myresume-resume' )
    .attr({
        
        'width': ' 40vw',
        'height' : '40vh',
        "padding-top" : "0vh",
        "margin-bottom" : "0vh"
    });
    $(".resumeblock").hover(function(){
        $(this).css("background-color", "#e6ba4e");
        }, function(){
        $(this).css("background-color", "#FFCE55");
      });
    $('.resumeicon').css('padding-right' , '1vw');
    $('#icon-myresume-education').attr('title', 'Education');
    $('#icon-myresume-certi').attr('title', 'Certificate');
    $('#icon-myresume-skill').attr('title', 'Skill');
    $('#icon-myresume-work').attr('title', 'Work');
    $('#icon-myresume-resume').attr('title', 'Resume');
    $('#icon-myresume-goal').attr('title', 'Goal');
    

});



$('.Home').css({
    'overflow':'hidden',
});
$('.MyResumeContent').css("padding-left",'20vw');
$('.Resume_sideNavbar').css("transition","0s");
$('.resumeblock').css({
    'color' : 'black',
    'font-weight' : '300',
    'font-size' : '64px',
    'width' : '20vw',
    'height' : '16.67vh',
    "padding-top" : "5.03vw",
    "padding-left" : "2vw",
    "display" : "block",
    "font-size" : "1vw"
});


$(window).on("scroll load resize", function(){
    
    if($(window).scrollTop() > 0){
        $('.Resume_sideNavbar').css("padding-top","15vh");
        $('.resumeblock').css({
            "height": "6vw",
            "padding-top" : "2vw",
        });

    }else{
        $('.Resume_sideNavbar').css({
            "padding-top":"15vh",
            "padding-bottom":"0vh"
        });
        $('.resumeblock').css({
            "height": "6vw",
            "padding-top" : "2vw",
        });

    }
});


