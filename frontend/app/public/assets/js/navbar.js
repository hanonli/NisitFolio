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
   
   $(".btn-search-static").click(function(){
		console.log("search button clicked!");
		Cookies.set('search-entry', $('#stupidSearch').val())
		console.log("saved user's input: "+Cookies.get('search-entry')+"as cookies!");
		var pageName = location.href.split("/").slice(-1); 
		if(pageName == 'search'){ // reload the page if user tries to search on search page
			window.location.reload();
		}
   });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  
  $('.tooltips-item').on('click', function () {
    $(this).tooltip('hide');
	console.log("HIDE!");
	})
	
  $('.tooltips-item').on('mouseover', function () {
    $(this).tooltip('show');
	console.log("SHOW!");
	})

})

//Enable tooltips everywhere
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		  return new bootstrap.Tooltip(tooltipTriggerEl)
		})
