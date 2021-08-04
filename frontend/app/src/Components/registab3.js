import React from 'react';
import './registertab3.css'

class Registab3 extends React.Component {
	render (){
		return (
			<div className="Registab3">
				<div className='textbox-container justify-content-center'>
					
						<div className='textbox'>
							<h1>อุดมศึกษา</h1>

							<button type="button" class="btn item-align-center" >
								<img id='icon-plus-circle'  src="assets/images/+.png"></img>
							</button>
						</div>

						<div className='textbox'>
							<h1>มัธยมศึกษา</h1>
							<button type="button" class="btn item-align-center" >
								<img id='icon-plus-circle'  src="assets/images/+.png"></img>
							</button>
						</div>

				</div>
			</div>
		);
	}
}

export default Registab3;