import React from 'react';
import { Link } from "react-router-dom";

class BookmarkObject extends React.Component {
	render (){
		return (
			<div className="BookmarkObject">
				<header class="header round">
					<div class="container-fluid bookmark-margin">
						<div class="row">
							<div class="col">
								<img class="bookmark-profile-image img-fluid float-start rounded-circle" type='button' id="avatar" src="assets/images/profile.jpg" alt="profile image" />
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
								<div class="bookmark-content">
									<h1 class="name inline">วรเมศ ผดุงเจริญ</h1>
									<img class="obj-icon" src="assets/images/bin.png" alt="" width="35" height="35"/>
									<br></br>
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">Full Stack Developer</a>
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">CEO of KU Happy Place</a>
									<a class="btn btn-cta-secondary btn-small round" href="#" target="_blank">PE Teacher</a>
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
