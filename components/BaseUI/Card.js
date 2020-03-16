import React from 'react'
import { StyleSheet, View } from 'react-native'
import { primary, secondary } from '../../constant/color'
const Card = (props) => {

	return (
		<View style={{
			...styles.container,
			...props.style
		}}>
			{ props.children }
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
		backgroundColor: "#ffffff"
	}
})

export default Card
