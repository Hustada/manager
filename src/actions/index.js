//Action Creator Rules
//- Action creatroes are functions
//-Must return action
//-An action is an object with a 'type' property

//Action Creatro Rules with Thunk
// The above rules OR
//-action creators are functions
//-must return a function <--new
//-this function will be called with 'dispatch'

import firebase from 'firebase';
import { EMAIL_CHANGED,
				 PASSWORD_CHANGED,
				 LOGIN_USER_SUCCESS,
				 LOGIN_USER_FAIL
} from './types';


export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password).then(user =>loginUserSuccess(dispatch, user))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password).then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
		});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};