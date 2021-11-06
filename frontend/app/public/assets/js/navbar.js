console.log("start navbar script");
console.log(Cookies.get('name')); //debug cookies

$(function(){
	
	$('.sf').submit(function() {
		return false;
	});

    $(".btn-search").click(function(){
		//alert(44);
		//alert($('#search-input').val().length);
		if($('#search-input').val().length < 1) 
			return;
		//alert(588);
		console.log("search button clicked!");
		Cookies.set('search-entry', $('#search-input').val())
		console.log("saved user's input: "+Cookies.get('search-entry')+"as cookies!");
		var pageName = location.href.split("/").slice(-1); 
		if(pageName == 'search'){ // reload the page if user tries to search on search page
			window.location.reload();
		}else{
			window.location = '/search';
		}
   });
   
   $(".btn-search-static").click(function(){
	    if($('#stupidSearch').val().length < 1) return;
		console.log("search button clicked!");
		Cookies.set('search-entry', $('#stupidSearch').val())
		console.log("saved user's input: "+Cookies.get('search-entry')+"as cookies!");
		var pageName = location.href.split("/").slice(-1); 
		if(pageName == 'search'){ // reload the page if user tries to search on search page
			window.location.reload();
		}else{
			window.location = '/search';
		}
   });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  
  $('.tooltips-item').on('click', function () {
    $(this).tooltip('hide');
	console.log("HIDE ON CLICK!");
	})

	$('.tooltips-item').on('mouseleave', function () {
    $(this).tooltip('hide');
	console.log("HIDE ON LEAVE!");
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
