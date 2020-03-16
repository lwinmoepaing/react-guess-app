import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { primary, secondary } from '../../constant/color'
import TitleText from '../BaseUI/TitleText'

const Header = () => {
	return (
		<View style={styles.container}>
			<TitleText style={styles.text}>
				Guess a Number
			</TitleText>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
		backgroundColor: primary,
		marginBottom: 10,
		width: '100%'
	},
	text: {
		textAlign: "center",
		padding: 15,
		color: '#ffffff'
	}
})

export default Header
