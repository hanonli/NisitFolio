$(document).ready( function() {
    console.log('using resume script')
    $('#icon-myresume-education, #icon-myresume-certi, #icon-myresume-skill, #icon-myresume-work, #icon-myresume-goal, #icon-myresume' )
    .attr({
        'margin' : '100px 100px 100px 100px',
        'width': '40px',
        'height' : '40px',
    });
    $("a").hover(function(){
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
$('.MyResumeContent').css("padding-left",'6%');


$("#icon-myresume").attr('title', 'Bookmark');
$("#icon-myresume").attr('title', 'Education');

$(window).on("scroll load resize", function(){
    if($(window).scrollTop() > 0){
        $('.Resume_sideNavbar').css("padding-top","40px");
        $('.Resume_sideNavbar').css("transition","0.3s");
    }else{
        $('.Resume_sideNavbar').css("padding-top","80px");
        $('.Resume_sideNavbar').css("transition","0.3s");
    }
});




// let toggle=false;
// $( "#slidenav" ).click(function() {
//     // alert(`toggle ${toggle}`)
//     if(!toggle){
//         // alert('toggle open')
//         $("#sideNav").css("width", "50%");
//         $('.MyResumeContent').css("width","80%")
//         $("#icon-slide_right").css("transform", "rotate(180deg)");
//         $(".sidenav-centered").css("left", "97%");
//         $('.MyResumeContent').css("padding-left","50%");
//         $('.MyResumeContent').css("padding-left","50%");


//     }
//     else if(toggle){
//         // alert('toggle close')
//         $("#sideNav").css("width", "100px");
//         $("#icon-slide_right").css("transform", "rotate(0deg)");
//         $(".sidenav-centered").css("left", "80%");
//         $('.MyResumeContent').css("padding-left","100px");
//     }
//     toggle=!toggle;  
// });

  
