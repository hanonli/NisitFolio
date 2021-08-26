console.log("Stored search cookies: "+Cookies.get('search-entry')); //debug cookies

$(function(){
   
   $('.name2').text(Cookies.get('search-entry'));

});
