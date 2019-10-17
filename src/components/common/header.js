import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyles, viewStyle } = styles;

  return <View style={viewStyle}>
		<Text style={textStyles}>{props.headerText}</Text>
	</View>
};

const styles = {
	viewStyle: {
		backgroundColor: "tan",
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyles: {
		fontSize: 40
	}
}

export { Header };