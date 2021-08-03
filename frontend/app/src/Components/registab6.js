import React from 'react';
import './register.css';
import PopUp_Job_interest from './popUpJobInterest';

class Registab6 extends React.Component {
	constructor() {
		super();
		this.state = {
			showPopup: false
		};
	}
	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}
	render() {
		return (
			<div className="Registab6">
				<div class="regis-box-content">
					<h1>hihi</h1>
					<button onClick={this.togglePopup.bind(this)}>show popup</button>
					{this.state.showPopup ?
						<PopUp_Job_interest text='Close Me' closePopup={this.togglePopup.bind(this)} />
						: null
					}
				</div>
			</div>
		);
	}
}

export default Registab6;