import React from "react";

export default function PortThumb({ item }) {
  let backgroundColor = "#f5f5f5";
  let myId = "upload-id-"+item.id;
  let _myId = "upload-oid-"+item.id;
  let myPid = "pic-id-"+item.id;
  item.id === 1 && (backgroundColor = "#f4d6d2");
  let myLabel = item.id === 1 ? item.id+' (ภาพหน้าปก)' : item.id;
  //item.id === "2" && (backgroundColor = "#f5f5f5");

  return (
	<div className="sortItem">
		<div class="sortable-thumbnail" style={Object.assign({}, { backgroundColor })}>

				<div class="sortable-thumbnail-pic port-sort-shadow" id={myId} > 
					<img class="sortable-thumbnail-pic-overlay" id={_myId} src="assets/images/outline_cancel_black_24dp 1.png" alt="" />
					<img class="sortable-thumbnail-pic-underlay" src="assets/images/black.jpg" alt="" />
				</div>
			<div class="sortable-thumbnail-overlay" />
			<img class="delete-upload-icon" id={myPid} src="assets/images/remove_button.png" alt="" />
		</div>
		
		 
		
		<div class="sortable-label">
		  {myLabel}
		</div>
	</div>
  );
}
