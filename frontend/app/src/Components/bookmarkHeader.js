import React from 'react';
import { Link } from "react-router-dom";

class BookmarkHeader extends React.Component {
	render (){
		return (
			<div className="BookmarkHeader">
				<header class="header-white bookmark-header-fixed">
					<div class="container-fluid yahaha2">     
						<div class="row">
							<div class="col">
								<div class="topDataBk-content">
									<h1 class="name inline">Bookmark</h1>
									<h1 class="symbol inline">.</h1>
									<h1 class="name2 inline">"วรเมศ"</h1>
									<h1></h1>
								</div>
							</div>
						</div>        
					</div>
				</header>
			</div>
		);
	}
}

export default BookmarkHeader;