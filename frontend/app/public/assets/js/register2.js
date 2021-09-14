
/*Zone Agreement*/

$('#agree1').click(function () {
    console.log('I am Agree!');  
    $('#continue1').prop('disabled', false);
  });
  
/*AAA = document.getElementById('agree1');
AAAbt = document.getElementById('continue1');
AAA.addEventListener('change', function(){
  console.log('I am Agreeeeeeeeeeee!');  
  /*$('#continue1').prop('disabled', false);
  AAAbt.disabled = false;
});*/
$('#continue1').click(function () {           
  window.location.pathname = '/register'
});

/*emailvrify*/
$('#resendEmail').click(function () {           
  setInterval('window.location.pathname = "/successregis"', 3000);
});