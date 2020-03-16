import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
	return (
		<TextInput {...props} style={[styles.inputStyle, props.style]} />
	)
}

const styles = StyleSheet.create({
	inputStyle: {
		borderBottomWidth: 1,
		borderRadius: 3,
		borderColor: '#000000',
		marginVertical: 4,
		textAlign: 'center',
		alignSelf: 'center',
		padding: 3
	},
})

export default Input
