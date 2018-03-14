import React from 'react';
import { TextInput, View, Text } from 'react-native';
	
	//pass in label text as prop
	const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
		const { inputStyle, lableStyle, containerStyle } = styles;

		return(
			<View style={containerStyle}>
				<Text style={lableStyle}>{label}</Text>
				<TextInput
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					autoCorrect={false}
					style={inputStyle}
					value={value}
					onChangeText={onChangeText}
				/>
			</View>
		);
	};
//both input and text are children of the view tag
//whenver we have siblings with a flex property. Thats how we allocate a proportion of available space to each one. add the values of flex 2 + 1 equals 3. So 1/3 and 2/3 for each respectively.

	const styles = {
		inputStyle: {
			color: '#000',
			paddingRight: 5,
			paddingLeft: 5,
			fontSize: 18,
			lineHeight: 23,
			flex: 2
		},
		lableStyle: {
			fontSize: 18,
			paddingLeft: 20,
			flex: 1
		},
		containerStyle: {
			height: 40,
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center'
		}

	};




export { Input };
