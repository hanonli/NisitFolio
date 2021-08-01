console.log("Run bookmark script!");

$(function(){
  $('#tab-1').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-1').addClass('tab-list-active')
	  $('#content1').show();
  });
  
  $('#tab-2').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-2').addClass('tab-list-active')
	  $('#content2').show();
  });
  
  $('#tab-3').on('click', function(){
	  $('.tab-content').hide();
	  $('.tab-list-item').removeClass('tab-list-active');
	  $('#tab-3').addClass('tab-list-active')
	  $('#content3').show();
  });
});

 $(function(){

    $(".dropdown-item").click(function(){
      $("#dropdownMenuButton1").text($(this).text());
      $("#dropdownMenuButton1").val($(this).text());

   });

});

$(function(){
  $('div.list').hide();// hide it initially
  $('.layout-toggle').on('click', function(){
	  if (!$(this).hasClass('gridOn')) {
        $(this).attr('src', 'assets/images/outline_grid_view_black_48dp 2.png');
        $(this).addClass('gridOn')
		$('div.list').hide();
		$('div.grid').show();
      } else  {
        $(this).attr('src', 'assets/images/outline_format_list_bulleted_black_48dp 3.png');
        $(this).removeClass('gridOn')
		$('div.grid').hide();
		$('div.list').show();
      }

	  $('div.grid, div.list').toggle();
  });
});