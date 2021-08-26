import React from 'react';
import { Link } from "react-router-dom";

class BookmarkObject extends React.Component {
	render (){
		return (
			<div className="BookmarkObject">
				<header class="header round">
					<div class="container-fluid bookmark-margin">
						<div class="row">
							<div class="col-10">
								<img class="bookmark-profile-image float-start round" type='button' id="avatar" src="assets/images/work.jpg" alt="profile image" width="225" height="150"/>
								<div class="bookmark-content">
									<h1 class="name inline">Edgeworth</h1>
									<h2 class="bookmark-work-desc" >Portfolio - 4 รูปภาพ</h2>
									<h2 class="bookmark-work-desc" >ผลงานของ วรเมศ ผดุงเจริญ</h2>
								</div>
							</div>
							<div class="col-2">
								<div class="bookmark-content">
									<img class="obj-icon" src="assets/images/bin.png" alt="" width="35" height="35"/>
								</div>
							</div>
							
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default BookmarkObject;
