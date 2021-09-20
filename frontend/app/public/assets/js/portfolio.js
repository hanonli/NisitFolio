"use strict";
console.log("HELLO LV7!");
//alert('Homeaaa!');
  console.log("HELLO LV8!");
  var avatar = $('.port-pic-uploadable');
  var image = document.getElementById('image');
  var input = document.getElementById('input');
  var $alert = $('.alert');
  var $modal = $('#modal');
  var cropper;
	
	/*$('.port-pic-uploadable').on('click', function(){
		input.click();
    });*/
	
	$( ".port-pic-uploadable" ).click(function() {
	  input.click();
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
	  aspectRatio: 16/9,
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
		width: 320,
		height: 180,
	  });
	  initialAvatarURL = avatar.src;
	  avatar.src = canvas.toDataURL();
	  console.log(avatar.src);
	  $alert.removeClass('alert-success alert-warning');
	  canvas.toBlob(function (blob) {
		var formData = new FormData();

		formData.append('avatar', blob, 'avatar.jpg');
		console.log("HELLO LV5!");
	  });
	}
	//$(".port-pic-uploadable").click(function() { return false; });
	//$(".port-pic-uploadable").off(); 
	$(".port-pic-uploadable").off('click'); // turn off big upload section when adding new image
	//setTimeout(function() { alert('on!'); $( ".port-pic-uploadable" ).click(function() {input.click(); }); }, 1000);
	 $( ".port-pic-uploadable" ).click(function() {input.click(); });
	//$(".port-pic-uploadable").prop("onclick", null);
	//$(".port-pic-uploadable").click(function() {  alert(777); });
	//setTimeout(function() { $(".port-pic-uploadable").click(function() {  input.click(); }); }, 500);
	var count = $('.sortable-thumbnail .sortable-thumbnail-pic').length;
	//alert(count);
	if(count <1) {
		count = count+1
	};
	setTimeout(function() { document.getElementById('upload-id-'+count).src = avatar.src; }, 200);
  });
  
