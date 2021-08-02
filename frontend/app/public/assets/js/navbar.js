console.log("start navbar script");
console.log(Cookies.get('name')); //debug cookies

$(function(){

    $(".btn-search").click(function(){
		console.log("search button clicked!");
		Cookies.set('search-entry', $('#search-input').val())
		console.log("saved user's input: "+Cookies.get('search-entry')+"as cookies!");
		var pageName = location.href.split("/").slice(-1); 
		if(pageName == 'search'){ // reload the page if user tries to search on search page
			window.location.reload();
		}
   });

});
