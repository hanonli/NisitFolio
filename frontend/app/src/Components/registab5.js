import React from 'react';
import './register.css';
import PopUp_certi from './popUp_certificate'

class Registab5 extends React.Component {
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
			<div className="Registab5">
				<div class="regis-box-content">
					<h1>hihi</h1>
					<button onClick={this.togglePopup.bind(this)}>show popup</button>
					{this.state.showPopup ?
						<PopUp_certi text='Close Me' closePopup={this.togglePopup.bind(this)} />
						: null
					}
				</div>
			</div>
		);
	}
}

export default Registab5;