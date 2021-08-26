"use strict";
	console.log("Js for landing page loaded!");

	$(document).ready(function() {
	  // .scroll() creates an event when the user scrolls
	  $(window).scroll(function() {
		  console.log("scroll!");

		// .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
		var scroll = $(window).scrollTop();

		var objectSelect = $('#shownav');

		// .offset() retrieves current position of element relative to document
		var objectPosition = objectSelect.offset().top;

		if (scroll > objectPosition) {
			console.log("SHOW NAV!");
			$('nav').removeClass('navAnimation');
		  $('nav').addClass('displayNav');
		} else {
			console.log("HIDE NAV!");
			$('nav').addClass('navAnimation');
		  $('nav').removeClass('displayNav');
		}
	  });
	});

	
