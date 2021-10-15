function setActiveLink($el) {
    $el.addClass('active');
    $el.click();
}

 $(document).ready(function() {

    // click  

    $('#icon-myresume-edit' ).click(function(){
        window.location = 'editprofile'
    })
    $('#icon-myresume-edit' ).hover(function(){
        $(this).css("background-color", "gray");
        }, function(){
        $(this).css("background-color", "transparent");
    })
        // top path
    $('.myresumetoppath').css({
        'position' : 'fixed',
        'z-index' : '10',
        'top' : '8vh',
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
        'font-size' : '3.5vh',
        'padding-top': '-0.1vh',
        'padding-bottom': '0.3vh',
        'border' : '0.1vw solid black',
        'border-radius': '0.5vw',
        'background-color' : 'white',
    })

    // | topnav right section |
    $('.topnav_section2').css({
        'text-decoration' : 'None',
        'text-decoration-color' : 'None',
    })



    // | topnav middle section |
    $('.resume_selectoption').css({
       'padding-top': '0.7vh',
        'padding-bottom': '0.2vh',
        'border' : '0.1vw solid black',
        'border-radius': '0.5vw',
        'display' : 'inline-block',
        'background-color' : 'white',
    })
                
    //  | vertical line |
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
     // | select resume |
    $('.resume_selectresume').css({
        'border' : '0.1vw solid black',
        'border-radius': '0.5vw',
        'display' : 'inline-block',
        'background-color' : 'white',
    })
    // | select resume block |

    $('.resume_selectresume_block').css({
        'height': '4vh',
        'border-radius': '0.5vw',
        'padding-top': '1vh',
        'font-size' : '2.5vh',
        'display' : 'inline-block',

    })


    // | select resume 1 2 3|
    $('#resume_selectresume1 ,#resume_selectresume2 ,#resume_selectresume3').css({
        'text-decoration' : 'None',
        'padding-top': '0.2vh',
        'padding-left': '3vh',
        'padding-right': '3vh',
        'border-radius' : '0.5vw',
        'color': 'black',
    })
        
    $('#resume_selectresume1').click(function(){
        $('#resume_selectresume2 ,#resume_selectresume3').removeClass('active')
        $(this).addClass('active')
        localStorage.setItem('active-resume', $(this).attr('active'));

    });
    $('#resume_selectresume2').click(function(){
        $('#resume_selectresume1 ,#resume_selectresume3').removeClass('active')
        $(this).addClass('active')
        localStorage.setItem('active-resume', $(this).attr('active'));
    });
    $('#resume_selectresume3').click(function(){
        $('#resume_selectresume1 ,#resume_selectresume2').removeClass('active')
        $(this).addClass('active')
        localStorage.setItem('active-resume', $(this).attr('active'));
    });        

    // loading aimation 

    // $('.resume-loadingScreen').css({
    //     'border': '16px solid #f3f3f3' ,
    //     'border-radius': '50%' ,
    //     'border-top' : '16px solid blue',
    //     'border-right': '16px solid green',
    //     'border-bottom': '16px solid red',
    //     'border-left' : '16px solid orange',
    //     'width': '120px',
    //     'height': '120px',
    //     'top' : '50vh',
    //     'left' : '50vw' ,
    //     'position' : 'absolute',
    // })

    // icom myresume

    $('.icon-myresume' ).css({
        'width': '50px',
        'height' : '50px',
    });
    //icon lock
    $('#icon-myresume-lock' ).css({
        'width': '45px',
        'height' : 'auto',
    });
    
    //iconedit
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


    

 }); 
 


 





