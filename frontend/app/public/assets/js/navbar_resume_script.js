

    $('#icon-myresume-education, #icon-myresume-certi, #icon-myresume-skill, #icon-myresume-work, #icon-myresume-goal, #icon-myresume-resume' )
    .attr({
        
        'width': ' 10%',
        'height' : '50%',
 
    });
    $(".resumeblock").hover(function(){
        $(this).css("background-color", "#e6ba4e");
        }, function(){
        $(this).css("background-color", "#FFCE55");
      });
    $('.resumeicon').css({

        'padding-right' : '1vw',
    
    });
    $('#icon-myresume-education').attr('title', 'Education');
    $('#icon-myresume-certi').attr('title', 'Certificate');
    $('#icon-myresume-skill').attr('title', 'Skill');
    $('#icon-myresume-work').attr('title', 'Work');
    $('#icon-myresume-resume').attr('title', 'Resume');
    $('#icon-myresume-goal').attr('title', 'Goal');
    



$('.Home').css({
    'overflow':'hidden',
});
$('.MyResumeContent').css("padding-left",'20vw');
$('.Resume_sideNavbar').css("transition","0s");


$('.Resume_sideNavbar').css({
    "padding-top":"10vh",
    "padding-bottom":"0vh"
});
$('.resumeblock').css({
    "height": "12%",
    "padding-top" : "10%",
    "padding-left" : "10%",
    "font-size" : "1vh",
    "display" : "block",
});

$('.resumetext').css({
    'position': 'relative',
    'color' : 'black',
    'top' : '0.3vw',
    "font-size" : "1.1vw",
    'font-weight' : '300',
    "display" : "inline-block",
});