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
				<div class="tab-inline bookmark-tabs-fixed">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <ol class="tab-list">
                                 <li class="tab-list-item tab-list-active" id="tab-1" type="button">ทั้งหมด</li>
                                 <li class="tab-list-item" id="tab-2" type="button">ผู้ใช้</li>
                                 <li class="tab-list-item" id="tab-3" type="button">ผลงาน</li>
                                 <div class="float-end">
                                    <img class="layout-toggle" src="assets/images/outline_format_list_bulleted_black_48dp 3.png" alt="" width="40" height="40" type="button" />
									<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">เรียงตามล่าสุด</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                       <li><a class="dropdown-item" href="#">เรียงตามความนิยม</a></li>
                                       <li><a class="dropdown-item" href="#">เรียงตามล่าสุด</a></li>
                                       <li><a class="dropdown-item" href="#">เรียงตามตัวอักษร</a></li>
                                    </ul>
                                    จำนวน 4 รายการ
                                 </div>
                                </ol>
                            </div>
						</div>
					</div>
				</div>
						   
						<div class="tab-content bookmark-content-scroll" id="content1"> 
							<div class="container-fluid">
								<div class="grid">
									<div class="row">
										<div class="col-md-6"><BookmarkProfileGrid /></div>
										<div class="col-md-6"><BookmarkWorkGrid /></div>
									</div>
							  
									<div class="row bookmark-row-top-buffer">
										<div class="col-md-6"><BookmarkProfileGrid /></div>
										<div class="col-md-6"><BookmarkWorkGrid /></div>
									</div>
								</div>
								
								<div class="list">
									<div class="row">
										<div class="col-md-12"><BookmarkProfileList /></div>
									</div>
							  
									<div class="row bookmark-row-top-buffer">
										<div class="col-md-12"><BookmarkProfileList /></div>
									</div>
									  
									<div class="row bookmark-row-top-buffer">
										<div class="col-md-12"><BookmarkWorkList /></div>
									</div>
									  
									<div class="row bookmark-row-top-buffer">
										<div class="col-md-12"><BookmarkWorkList /></div>
									</div>
								</div>
								
							</div>
						</div> 
						<div class="tab-content" id="content2"> 
							<div class="container-fluid">
							  <div class="grid">
									<div class="row">
										<div class="col-md-6"><BookmarkProfileGrid /></div>
										<div class="col-md-6"><BookmarkProfileGrid /></div>
									</div>
								</div>
								
								<div class="list">
									<div class="row">
										<div class="col-md-12"><BookmarkProfileList /></div>
									</div>
							  
									<div class="row bookmark-row-top-buffer">
										<div class="col-md-12"><BookmarkProfileList /></div>
									</div>
								</div>
							</div>
						</div> 
						<div class="tab-content" id="content3"> 
							<div class="container-fluid">
								<div class="grid">
									<div class="row">
										<div class="col-md-6"><BookmarkWorkGrid /></div>
										<div class="col-md-6"><BookmarkWorkGrid /></div>
									</div>
								</div>
								
								<div class="list">
									<div class="row">
										<div class="col-md-12"><BookmarkWorkList /></div>
									</div>
							  
									<div class="row bookmark-row-top-buffer">
										<div class="col-md-12"><BookmarkWorkList /></div>
									</div>
								</div>
							</div>
						</div> 
			</div>
		);
	}
}

export default BookmarkTabs;
