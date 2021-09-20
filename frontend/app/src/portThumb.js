import React from "react";

export default function PortThumb({ item }) {
  let backgroundColor = "#f5f5f5";
  let myId = "upload-id-"+item.id;
  let myPid = "pic-id-"+item.id;
  item.id === 1 && (backgroundColor = "#f4d6d2");
  //item.id === "2" && (backgroundColor = "#f5f5f5");

  return (
	<div>
		<div class="sortable-thumbnail" style={Object.assign({}, { backgroundColor })}>
			<img class="sortable-thumbnail-pic" id={myId} src="assets/images/img_upload.png" alt="" />
			<img class="delete-upload-icon" id={myPid} src="assets/images/outline_cancel_black_24dp 1.png" alt="" />
		</div>
		
		 
		
		<div class="sortable-label">
		  {item.id}
		</div>
	</div>
  );
}