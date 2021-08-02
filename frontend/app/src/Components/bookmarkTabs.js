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
                    <div class="container-fluid yahaha2">
                        <div class="row">
                            <div class="col">
                                <ol class="tab-list">
                                 <li class="tab-list-item tab-list-active" id="tab-1" type="button">ทั้งหมด</li>
                                 <li class="tab-list-item" id="tab-2" type="button">ผู้ใช้</li>
                                 <li class="tab-list-item" id="tab-3" type="button">ผลงาน</li>
                                 <div class="float-end">
                                    <img class="layout-toggle gridOn" src="assets/images/outline_format_list_bulleted_black_48dp 3.png" alt="" width="40" height="40" type="button" />
									<button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">เรียงตามล่าสุด</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                       <li><a class="dropdown-item" href="#">เรียงตามความนิยม</a></li>
                                       <li><a class="dropdown-item" href="#">เรียงตามล่าสุด</a></li>
                                       <li><a class="dropdown-item" href="#">เรียงตามตัวอักษร</a></li>
                                    </ul>
									<div class="float-end" id="result-count">
										จำนวน 4 รายการ
									</div>
                                 </div>
								 
                                </ol>
                            </div>
						</div>
					</div>
				</div>
						   
						<div class="tab-content bookmark-content-scroll" id="content1"> 
							<div class="container-fluid yahaha">
							<header class="header round">
									<div class="container-fluid d-flex flex-column justify-content-center not-found">
										<div class="row">
											<div class="col d-flex flex-column align-items-center">
												<img class="not-found-icon" src="assets/images/outline_cancel_black_24dp 1.png" alt=""/>
											</div>
										</div>
										<div class="row">
											<div class="col d-flex flex-column align-items-center">
												<h1>ขออภัยด้วยแต่เราไม่พบข้อมูลการค้นหาของคุณ</h1>
											</div>
										</div>
									</div>
								</header>
								<br></br>
								<div class="grid mixed-grid-container">

								</div>
								
								<div class="list mixed-list-container">
								
								</div>
								
							</div>
						</div> 
						<div class="tab-content bookmark-content-scroll" id="content2"> 
							<div class="container-fluid yahaha">
							  <div class="grid profile-grid-container">
									
								</div>
								
								<div class="list profile-list-container">
									
								</div>
							</div>
						</div> 
						<div class="tab-content bookmark-content-scroll" id="content3"> 
							<div class="container-fluid yahaha">
								<div class="grid work-grid-container">
									
								</div>
								
								<div class="list work-list-container">
									
								</div>
							</div>
						</div> 
			</div>
		);
	}
}

export default BookmarkTabs;
