import React from 'react';
import { Link } from "react-router-dom";
import BookmarkObjectGrid from './bookmarkObjectGrid';
import BookmarkObjectList from './bookmarkObjectList';
import TabBookmark from "./TabBookmark"; 

class BookmarkTabs extends React.Component {
	render (){
		return (
			<div className="BookmarkTabs">
				<TabBookmark> 
						<div label="ทั้งหมด"> 
							<div class="container-fluid">
							  <div class="row">
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
								<div class="col-md-6">
									<BookmarkObjectGrid />
								</div>
							  </div>

							</div>
						</div> 
						<div label="ผู้ใช้"> 
							<div class="container-fluid">
							  <div class="row">
								<div class="col-md-12">
									<BookmarkObjectList />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-12">
									<BookmarkObjectList />
								</div>
							  </div>
							</div>
						</div> 
						<div label="ผลงาน"> 
							<div class="container-fluid">
							  <div class="row">
								<div class="col-md-12">
									<BookmarkObjectList />
								</div>
							  </div>
							</div>
						</div> 

					</TabBookmark> 
			</div>
		);
	}
}

export default BookmarkTabs;
