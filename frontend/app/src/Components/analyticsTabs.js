import React from 'react';
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import BookmarkProfileGrid from './bookmarkProfileGrid';
import BookmarkWorkGrid from './bookmarkWorkGrid';
import BookmarkProfileList from './bookmarkProfileList';
import BookmarkWorkList from './bookmarkWorkList';
import TabBookmark from "./TabBookmark"; 

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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
								<Bar data={data} width={100} height={500} options={{ maintainAspectRatio: false }} />
							 </div>
					    </div>
					    <div class="col">
						    <div class="col header round yahaha-alt wrapper">
								<Bar data={data} width={50} height={150} options={{ maintainAspectRatio: false }} />
							</div>
						    <div class="col header round space-alt-1 yahaha-alt wrapper">
								<Bar data={data} width={50} height={150} options={{ maintainAspectRatio: false }} />
						    </div>
					    </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default BookmarkTabs;
