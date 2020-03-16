import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import BodyText from './BodyText'
import { primary, secondary } from '../../constant/color'

const BaseButton = (props) => {

	let styleList = [styles.container]
	// Check Secondary Or Primary
	styleList = props.color !== 'secondary' ?
		[...styleList, styles.primary, props.style]
		:
		[...styleList, styles.secondary, props.style]
	// Set Text Color
  const textColor = props.color !== 'secondary' ? '#ffffff' : '#000000'

	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={styleList}
			activeOpacity={0.5}
		>
			<BodyText style={{ color: textColor, ...styles.textCenter}}>{props.children}</BodyText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
		borderRadius: 3
	},
	primary: {
		backgroundColor: primary,
		color: '#ffffff'
	},
	secondary: {
		backgroundColor: secondary
	},
	textCenter: {
		textAlign: 'center'
	}
})

export default BaseButton
