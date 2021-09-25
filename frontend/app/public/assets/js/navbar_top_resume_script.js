
$('.myresumetoppath').css({
    'position' : 'fixed',
    'z-index' : '10',
    'top' : '8vh',
    'width' : '100vw',
    'text-align' : 'center',
    
    'background-color' : 'transparent',
    
})

$('.resume_topnav').css({
    'padding-bottom': '0.4vh',
    'border-radius': '0.5vw',
    'display' : 'inline-block',
})



$('.topnav_lock').css({
    'font-size' : '3.5vh',
    'padding-bottom': '0.5vh',
    'border' : '0.1vw solid black',
    'border-radius': '0.5vw',
    'background-color' : 'white',
})

$('.resume_selectjob').css({
    'border' : '0.1vw solid black',
    'border-radius': '0.5vw',
    'display' : 'inline-block',
    'background-color' : 'white',

})

$('.resume_selectjob_block').css({
    'height': '4vh',
    'border-radius': '0.5vw',
    'padding-top': '1.2vh',
    'font-size' : '2.5vh',
    'display' : 'inline-block',

})


$('.resume_verticalline').css({
    'border-left' : '0.2vw solid black',
    'height' : '10vh',
    'left' : '50vw',
    'background-color' : 'white',
    
 
})
$('#resume_selectjob1 ,#resume_selectjob2 ,#resume_selectjob3').css({
    'text-decoration' : 'None',
    'text-decoration-color' : 'None',
    'padding-top': '0.2vh',
    'padding-left': '3vh',
    'padding-right': '3vh',
    'border-radius' : '0.5vw',
    'color': 'black',
})



$('#icon-myresume-lock' ).attr({
    'width': '50vw',
    'height' : '50vh',
});
$('#icon-myresume-lock' ).css({
    'border-radius': '0.4vw',
    'margin-top': '-0.1vh',
});


    
    $(document).ready(function() {
        //hover
        // $('#resume_selectjob1').hover(function(){
        //     $(this).css("background-color", "gray");
        //     }, function(){
        //     $(this).css("background-color", "white");
        // });
        // $('#resume_selectjob2').hover(function(){
        //     $(this).css("background-color", "gray");
        //     }, function(){
        //     $(this).css("background-color", "white");
        // });
        // $('#resume_selectjob3').hover(function(){
        //     $(this).css("background-color", "gray");
        //     }, function(){
        //     $(this).css("background-color", "white");
        // });
        //click
        $('#resume_selectjob1').click(function(){
            $('#resume_selectjob2 ,#resume_selectjob3').removeClass('active')
            $(this).addClass('active')
        });
        $('#resume_selectjob2').click(function(){
            $('#resume_selectjob1 ,#resume_selectjob3').removeClass('active')
            $(this).addClass('active')
        });
        $('#resume_selectjob3').click(function(){
            $('#resume_selectjob1 ,#resume_selectjob2').removeClass('active')
            $(this).addClass('active')
        });

        $('.topnav_lock' ).click(function(){
            $('#icon-myresume-lock' ).toggleClass('active');
        });
        

        


    });