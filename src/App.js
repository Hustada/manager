import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers  from './reducers';
import firebase from 'firebase';


class App extends Component {
	componentWillMount() {
			const config = {
	    apiKey: 'AIzaSyBDqdv2SV-LR4YbgbC1xxYHPBvBCm_xDn4',
	    authDomain: 'manager-40e63.firebaseapp.com',
	    databaseURL: 'https://manager-40e63.firebaseio.com',
	    projectId: 'manager-40e63',
	    storageBucket: 'manager-40e63.appspot.com',
	    messagingSenderId: '860908591557'
	  };
  	firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;