import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers  from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
			<Provider store={ store }>
				<Router />
			</Provider>
		);
	}
}

export default App;