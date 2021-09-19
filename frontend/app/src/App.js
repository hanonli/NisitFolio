import React from 'react';
import logo from './logo.svg';
import Routes from './routes';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

class App extends React.Component {
	render (){
		return (
			<div className="App">
				<LocalizationProvider dateAdapter={DateAdapter}>
					<Routes />
				</LocalizationProvider>
			</div>
		);
	}
}

export default App;
