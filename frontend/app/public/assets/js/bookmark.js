console.log("Run bookmark script!");

function AddProfileEntity(data){
	console.log(data.tags);
	$('.Yahaha').append($('<div>'+ data.name + '</div>'));
}

function AddWorkEntity(data){
	console.log(data.owner);
}

/*Load data from backend*/
function GetBookmarkData(){
	fetch("http://localhost:3000/sample_bookmark_data",{
        method: "GET",
         headers: {
			//"Access-Control-Allow-Origin": "*",
			//"Access-Control-Allow-Methods": "*",
			//"Access-Control-Allow-Credentials": true,
			"Content-Type": "application/json"},
    })
		.then(response => response.json())
		.then(response => response.result)
		.then((datas) => {
			console.log(datas);
			datas.forEach((data) => {
				if(data.type == "profile")
					AddProfileEntity(data);
				else
					AddWorkEntity(data);
				
			});
        });
}

GetBookmarkData();

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