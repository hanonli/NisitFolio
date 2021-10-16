// function setActiveLink($el) {
//     $el.addClass('active');
//     $el.click();
// }

 $(document).ready(function() {

    // click  

    // $('#icon-myresume-edit' ).click(function(){
    //     window.location = 'editprofile'
    // })
    // $('#icon-myresume-edit' ).hover(function(){
    //     $(this).css("background-color", "gray");
    //     }, function(){
    //     $(this).css("background-color", "transparent");
    // })
        // top path
    $('.myresumetoppath').css({
        'position' : 'fixed',
        'z-index' : '10',
        'top' : '8vh',
        'left' : '10vw',
        'width' : '100vw',
        'text-align' : 'center',
        'background-color' : 'transparent',
            
    })
        
    // top nav
    $('.Resume_topNavbar').css({
        'z-index': '5',
    })
    $('.resume_topnav').css({
        'padding-bottom': '0.4vh',
        'border-radius': '0.5vw',
        'display' : 'inline-block',
    })

    // | topnav left  section|
    $('.topnav_section1').css({
        'position' : 'relative',
        'height' : '45px',
        'width' : '45px',
        'padding-top': '0.7vh',
        'padding-bottom': '0.7vh',
        'background-color' : '#eaeaea',
        'border-radius': '0.6vw',

    })

    // | topnav right section |
    $('.topnav_section2').css({
        'position' : 'relative',
        'height' : '45px',
        'width' : 'auto',
        'padding-top': '0.5vh',
        'background-color' : '#eaeaea',
        'border-radius': '0.5vw',
    })

    // | topnav right section |
    $('.resume_selectoption').css({
        'border-radius': '0.5vw',
        'display' : 'inline-block',
        'background-color' : '#eaeaea',
       
    })
    // | topnav right section resume select |
    $('.resume_selectoption_block').css({
        'padding': '3px 10px 3px 10px',
        'font-size' : '2.5vh',
        'display' : 'inline-block',
        'text-decoration' : 'None',
        'text-decoration-color' : 'None',
    })

 
     // | select resume |
    $('.resume_selectresume').css({
        // 'border' : '0.1vw solid black',
        'border-radius': '0.5vw',
        'display' : 'inline-block',
        'background-color' : '#eaeaea',
    })

    // | select resume block |
    $('.resume_selectresume_block').css({
        'padding': '3px',
        'font-size' : '2.5vh',
        'display' : 'inline-block',
        'text-decoration' : 'None',
        'text-decoration-color' : 'None',

    })


    // | select resume text |
    $('.resume_selectresume_text').css({
        'display' : 'inline-block',
        'border-radius' : '0.5vw',  
    })


    // | select resume 1 2 3|
    $('#resume_selectresume1 ,#resume_selectresume2 ,#resume_selectresume3').css({
        'padding-left': '2vh',
        'padding-right': '2vh',
        'border-radius' : '0.5vw',
    })
        
    // $('#resume_selectresume1').click(function(){
    //     $('#resume_selectresume2 ,#resume_selectresume3').removeClass('active')
    //     $(this).addClass('active')
    //     localStorage.setItem('active-resume', $(this).attr('active'));

    // });
    // $('#resume_selectresume2').click(function(){
    //     $('#resume_selectresume1 ,#resume_selectresume3').removeClass('active')
    //     $(this).addClass('active')
    //     localStorage.setItem('active-resume', $(this).attr('active'));
    // });
    // $('#resume_selectresume3').click(function(){
    //     $('#resume_selectresume1 ,#resume_selectresume2').removeClass('active')
    //     $(this).addClass('active')
    //     localStorage.setItem('active-resume', $(this).attr('active'));
    // });        


                   
    //  | vertical line |
    $('.resume_verticalline').css({
        'margin-top': '3px',
        'margin-left': '3px',
        'padding-bottom': '3px',
        'font-size' : '25px',
        'border-left' : '0.1vw solid  black',
        'background-color' : '#eaeaea',
    })

    $('.resume_verticalline2').css({
        'margin-top': '3px',
        'margin-left': '3px',
        'padding-bottom': '3px',
        'font-size' : '25px',
        'border-left' : '0.1vw solid  black',
        'background-color' : '#eaeaea',
    })


    // icom myresume

 
    //icon
    $('#icon-myresume-private' ).attr({
        'width': '40px',
        'height' : '40px',
    });
    $('#icon-myresume-member' ).attr({
        'width': '40px',
        'height' : '40px',
    });
    $('#icon-myresume-public' ).attr({
        'width': '40px',
        'height' : '40px',
    });


    
    //icon-edit
    $('#icon-myresume-edit' ).attr({
        'width': '30px',
        'height' : '30px',
    
    });
    $('#icon-myresume-edit' ).css({
        'margin-left': '3px',
    
    });
    //icon-share
    $('#icon-myresume-share' ).attr({
        'width': '35px',
        'height' : '35px',
    });
    $('#icon-myresume-share' ).css({
        'margin-left': '-7px',
        'margin-right': '2px',

    
    });
    
    // $('#icon-myresume-share' ).click(function(){
    //     window.location = 'editprofile'
    // })



 }); 
 


 





