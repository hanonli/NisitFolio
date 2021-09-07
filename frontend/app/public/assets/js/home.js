"use strict";
	console.log("HELLO LV3!");

		console.log("HELLO LV4!");
      var avatar = document.getElementById('avatar');
      var image = document.getElementById('image');
      var input = document.getElementById('input');
      var $alert = $('.alert');
      var $modal = $('#modal');
      var cropper;
		
		avatar.addEventListener('click', function () {
			input.click();
			// console.log("Click on profile!");
		});

      input.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input.value = '';
          image.src = url;
          $alert.hide();
          $modal.modal('show');
        };
        var reader;
        var file;
        var url;

        if (files && files.length > 0) {
          file = files[0];

          if (URL) {
            done(URL.createObjectURL(file));
          } else if (FileReader) {
            reader = new FileReader();
            reader.onload = function (e) {
              done(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }
      });

      $modal.on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
          aspectRatio: 1,
          viewMode: 1,
        });
      }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
      });

      document.getElementById('crop').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        $modal.modal('hide');
        if (cropper) {
          canvas = cropper.getCroppedCanvas({
            width: 150,
            height: 150,
          });
          initialAvatarURL = avatar.src;
          avatar.src = canvas.toDataURL();
		  console.log(avatar.src);
          $alert.removeClass('alert-success alert-warning');
          canvas.toBlob(function (blob) {
            var formData = new FormData();

            formData.append('avatar', blob, 'avatar.jpg');
			console.log("HELLO LV5!");
            /*$.ajax('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              data: formData,
              processData: false,
              contentType: false,

              xhr: function () {
                var xhr = new XMLHttpRequest();

                xhr.upload.onprogress = function (e) {
                  
                };

                return xhr;
              },

              success: function () {
                $alert.show().addClass('alert-success').text('Upload success');
              },

              error: function () {
                avatar.src = initialAvatarURL;
                $alert.show().addClass('alert-warning').text('Upload error');
              },

              complete: function () {
                
              },
            });*/
          });
        }
      });
	  
	/*function GetAnalyticsData(){
		fetch("http://localhost:2000/analytics/main/610d3832ca49ebf4cdfed02e/",{
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"},
		})
			.then(response => response.json())
			.then((datas) => {
				console.log(datas);
			});
	}
	GetAnalyticsData();*/
	var id = "610d3832ca49ebf4cdfed02a";
	var sortType = "time";
	
	/*function GetBookmarkData(){
		fetch("http://localhost:2000/bookmark/"+id+"&&"+sortType,{
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"},
		})
			.then(response => response.json())
			.then((datas) => {
				console.log(datas);
			});
	}
	GetBookmarkData();*/
	
	const data = 
	{ userId: '610d3832ca49ebf4cdfed02f',
	  link: 'https://yahaha.com/',
	  type: 'user',
	  thatUserId: '610d3832ca49ebf4cdfed032'
	};
	
	/*function PostBookmarkData(){
		fetch("http://localhost:2000/bookmark/saveBookmark",{
			method: "POST",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then((datas) => {
				console.log(datas);
			});
	}
	PostBookmarkData();*/
	
	/*function DeleteBookmarkData(){
		fetch("http://localhost:2000/bookmark/saveBookmark",{
			method: "DELETE",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then((datas) => {
				console.log(datas);
			});
	}
	DeleteBookmarkData();*/
	//var testt = ['ABC','DEF','GHI'];
	
	function GetHomepageData(){
		var token = Cookies.get('login-token'); 
		fetch("http://localhost:2000/homepage/",{
			method: "GET",
			headers: {
				'Authorization': 'Bearer '+token,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then((datas) => {
				//console.log(datas);
				console.log(datas.Firstname);
				console.log(datas.Lastname);
				console.log(datas.AboutMe);
				console.log(datas.ProfilePic);
				console.log(datas.Job_JobName);
				$('#fetch-name').text(datas.Firstname+' '+datas.Lastname);
				$('#fetch-desc').text(datas.AboutMe);
				$('#avatar').attr("src", datas.ProfilePic);
				datas.Job_JobName.forEach((entry) => {
					console.log('HHHH');
					$('#tags-container').append('<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">'+entry+'</a>');
				});
			});
	}
	GetHomepageData();
	
	/*function GetBookmarkData(request){
	fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces",
		{ method: "GET", })
		.then(response => response.json())
		//.then(response => response.result)
		.then((raw) => {
			console.log(raw);
			raw.data.forEach((entry) => {
				console.log(entry.province);
			});

        }).catch((error) => {
			  console.log(error);
			  ResetData();
			  DisplayNotFound();
			});
		
		setTimeout(function() { ReinitializeTooltips(); },500);
		setTimeout(function() { AddListenerToDynamicComponents(); }, 500);
		
}*/
	    
	  
	    /*$('button span').parent().click(function () {
			if($('button span').hasClass('navbar-toggler-icon'))
			{
			   $('#bookmark').text('Bookmark'); 
			}
			else
			{      
				$('button').html('<span class="navbar-toggler-icon"></span> Open'); 
			}
		}); */
		
		/*$(".hoverable-icon").mouseover(function () {
		  $(this).attr('src', $(this).data("hover"));
		}).mouseout(function () {
		  $(this).attr('src', $(this).data("src"));
		});*/


	  
