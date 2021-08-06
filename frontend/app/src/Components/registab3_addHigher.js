import React from 'react';
import './registtab3.css'

class Registab3_addHigher extends React.Component {
	render (){
		return (
			<div className="Registab3_addHigher">
				<h1>เพิ่มประวัติการศึกษา</h1>
                <div class='col-md-4' >
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">ปริญญาเอก</a></li>
                            <li><a class="dropdown-item" href="#">ปริญญาโท</a></li>
                            <li><a class="dropdown-item" href="#">ปริญญาตรี</a></li>
                            <li><a class="dropdown-item" href="#">ปริญญาจัตวา</a></li>
                            <li><a class="dropdown-item" href="#">ปริญญาใจ</a></li>
                        </ul>
                    </div>

                </div>
1
			
			</div>
			
		);
	}
}

export default Registab3_addHigher;