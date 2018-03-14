// Header is considered a child component.
// Import libaries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//justifyContent property is used to position elements vertically(up or down)
//flex-end pushed to bottom
//flex-center - middle
//flex-start - top(default usually)

//alignItems: position elements left and right
//flex-start(default)
//flex-center - middle
//flex-end - right

// Make a component
// pass in props component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;


	return (
		<View style={viewStyle}>
			<Text style = {textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0 , height: 2},
		shadowOpacity: 0.5, 
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	},
};



// Make component available to other parts of the app
export { Header };