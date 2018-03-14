import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


// if you pass one component to another it will show up as 'props.children'
// "Touchable "" is just an fancy name for button with some user feedback
const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};


const styles = {
	buttonStyle: {
		//expand content as much as it can
		flex: 1,
		alignSelf: 'stretch', // position self. stretch to fill limits of container
		backgroundColor: "#fff",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},

	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

//Since we are using index.js file to export these components, we cant use 'default' here
export { Button };
