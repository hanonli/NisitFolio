import React from 'react';
import { Link } from "react-router-dom";

class BookmarkObjectList extends React.Component {
	render (){
		return (
			<div className="BookmarkObjectList">
				<header class="header round">
					<div class="container-fluid bookmark-margin">
						<div class="row">
							<div class="col-5">
								<img class="bookmark-profile-image img-fluid float-start rounded-circle" type='button' id="avatar" src="assets/images/profile.jpg" alt="profile image" />
								<input type="file" class="sr-only" id="input" accept="image/*" name="image" hidden />
								<div class="bookmark-content-profile">
									<h1 class="name inline">วรเมศ ผดุงเจริญ</h1><br></br>
								</div>
							</div>
							<div class="col-5 bookmark-list-column d-flex align-items-center justify-content-center">
								<div class="bookmark-content">
									<h2 class="bookmark-desc" >I'm an ordinary ordinary guy who wants to be a great developer. However, one day I met another guy named Fa_ and I realize that he has already achieved my dream. However, one day I met another guy named Fa_ and I realize that he has already achieved my dream.</h2> 
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">Full Stack Developer</a>
									<a class="btn btn-cta-secondary btn-small round margin-right-s" href="#" target="_blank">CEO of KU Happy Place</a>
									<a class="btn btn-cta-secondary btn-small round" href="#" target="_blank">PE Teacher</a>
								</div>
							</div>
							<div class="col-2">
								<div class="bookmark-content">
									<img class="obj-icon" src="assets/images/bin.png" alt="" width="35" height="35"/>
									<br></br>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default BookmarkObjectList;
