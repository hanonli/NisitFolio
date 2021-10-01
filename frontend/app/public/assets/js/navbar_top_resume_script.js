
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



$('.topnav_section1').css({
    'font-size' : '3.5vh',
    'padding-top': '-0.1vh',
    'padding-bottom': '0.3vh',
    'border' : '0.1vw solid black',
    'border-radius': '0.5vw',
    'background-color' : 'white',
})

$('.topnav_section2').css({
   'text-decoration' : 'None',
   'text-decoration-color' : 'None',
})


$('.resume_selectjob').css({
    'border' : '0.1vw solid black',
    'border-radius': '0.5vw',
    'display' : 'inline-block',
    'background-color' : 'white',
})

$('.resume_selectoption').css({
    'padding-top': '0.7vh',
    'padding-bottom': '0.2vh',
    'border' : '0.1vw solid black',
    'border-radius': '0.5vw',
    'display' : 'inline-block',
    'background-color' : 'white',
})

$('.resume_selectjob_block').css({
    'height': '4vh',
    'border-radius': '0.5vw',
    'padding-top': '1vh',
    'font-size' : '2.5vh',
    'display' : 'inline-block',

})


$('.resume_verticalline').css({
    'font-size' : '2.5vh',
    'border-left' : '0.2vw solid black',
    'height' : '10vh',
    'background-color' : 'white',
})

$('.resume_verticalline2').css({
    'font-size' : '2.5vh',
    'border-left' : '0.2vw solid black',
    'height' : '1vh',
    'background-color' : 'white',
})


$('#resume_selectjob1 ,#resume_selectjob2 ,#resume_selectjob3').css({
    'text-decoration' : 'None',
    'padding-top': '0.2vh',
    'padding-left': '3vh',
    'padding-right': '3vh',
    'border-radius' : '0.5vw',
    'color': 'black',
})



$('.icon-myresume' ).css({
    'width': '50px',
    'height' : '50px',
});

$('#icon-myresume-lock' ).css({
    'width': '45px',
    'height' : 'auto',
});


$('#icon-myresume-edit' ).css({
    'width': '45px',
    'height' : 'auto',
    'margin-top': '-1vh',
    'padding-top': '0.2vh',
    'padding-bottom': '0.5vh',
    'padding-left': '0.2vw',
    'padding-right': '0.2vw',
    'border-radius' : '0.5vw',

});

$('#icon-myresume-share' ).css({
    'width': '42px',
    'height' : 'auto',
    'margin-top': '-1.4vh',
});
$('#icon-myresume-share' ).click(function(){
    window.location = 'editprofile'
})






    
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

        $('#icon-myresume-edit' ).click(function(){
            window.location = 'editprofile'
        })
        $('#icon-myresume-edit' ).hover(function(){
            $(this).css("background-color", "gray");
            }, function(){
            $(this).css("background-color", "transparent");
        })
        


    });