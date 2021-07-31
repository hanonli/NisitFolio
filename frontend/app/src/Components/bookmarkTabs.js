import React from 'react';
import { Link } from "react-router-dom";
import BookmarkProfileGrid from './bookmarkProfileGrid';
import BookmarkWorkGrid from './bookmarkWorkGrid';
import BookmarkProfileList from './bookmarkProfileList';
import BookmarkWorkList from './bookmarkWorkList';
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
									<BookmarkProfileGrid />
								</div>
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
							  </div>

							</div>
						</div> 
						<div label="ผู้ใช้"> 
							<div class="container-fluid">
							  <div class="row">
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
								<div class="col-md-6">
									<BookmarkProfileGrid />
								</div>
							  </div>
							</div>
						</div> 
						<div label="ผลงาน"> 
							<div class="container-fluid">
							  <div class="row">
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
							  </div>
							  
							  <div class="row bookmark-row-top-buffer">
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
								<div class="col-md-6">
									<BookmarkWorkGrid />
								</div>
							  </div>
							  
							</div>
						</div> 
						
						<div label="โซนทดสอบ"> 
							<div class="container-fluid">
							  <div class="row">
								<div class="col-md-12">
									<BookmarkProfileList />
								</div>
							  </div>
							   <div class="row bookmark-row-top-buffer">
								<div class="col-md-12">
									<BookmarkWorkList />
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
