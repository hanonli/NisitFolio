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
                                 <li class="tab-list-item tab-list-active" id="tab-1" type="button">ภาพรวม</li>
                                 <li class="tab-list-item" id="tab-2" type="button">งานที่1</li>
                                 <li class="tab-list-item" id="tab-3" type="button">งานที่2</li>
								  <li class="tab-list-item" id="tab-4" type="button">งานที่3</li>
                                 <li class="tab-list-item" id="tab-5" type="button">ทักษะเสริม</li>
                                </ol>
                            </div>
						</div>
					</div>
				</div>
				
				<div class="container-fluid yahaha">
					<div class="row text-center no-gutters">
					    <div class="col header round d-flex align-items-center justify-content-center">
							<div class="container-fluid">
								<div class="col d-flex flex-column align-items-center">
									<img class="not-found-icon" src="assets/images/outline_cancel_black_24dp 1.png" alt=""/>
								</div>
								<h1>Error 1010 syntax not 100%</h1>
							 </div>
					    </div>
					    <div class="col">
						    <div class="col header round yahaha-alt wrapper">
								<div class="container-fluid">
									<div class="col d-flex flex-column align-items-center">
										<img class="not-found-icon" src="assets/images/outline_cancel_black_24dp 1.png" alt=""/>
									</div>
									<h1>Error 1010 syntax not 100%</h1>
								</div>
							</div>
						    <div class="col header round space-alt-1 yahaha-alt wrapper">
								<div class="container-fluid">
									<div class="col d-flex flex-column align-items-center">
										<img class="not-found-icon" src="assets/images/outline_cancel_black_24dp 1.png" alt=""/>
									</div>
									<h1>Error 1010 syntax not 100%</h1>
								</div>
						    </div>
					    </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default BookmarkTabs;
