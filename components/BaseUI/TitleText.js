import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TitleText = (props) => {
	const styleList = [
		styles.text,
		props.style
	]

	if(props.center === true) styleList.push(styles.textCenter)

	return (
		<Text style={styleList}> {props.children} </Text>
	)
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'titleText'
	},
	textCenter: {
		textAlign: 'center'
	}
})

export default TitleText
