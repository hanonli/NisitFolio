console.log("Run bookmark script!");

$(function(){
  $('div.list').hide();// hide it initially
  $('.layout-toggle').on('click', function(){
	  if (!$(this).hasClass('grid')) {
        $(this).attr('src', 'assets/images/outline_grid_view_black_48dp 2.png');
        $(this).addClass('grid')
      } else  {
        $(this).attr('src', 'assets/images/outline_format_list_bulleted_black_48dp 3.png');
        $(this).removeClass('grid')
      }

	  $('div.grid, div.list').toggle();
  });
});