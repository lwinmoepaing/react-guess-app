import React from 'react'
import { View, StyleSheet} from 'react-native'
import { secondary } from '../../constant/color'
import BodyText from '../BaseUI/BodyText'

const Numb = (props) => {
	return (
		<View style={styles.container}>
			<BodyText style={styles.bodyText}>
				{props.children}
			</BodyText>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bodyText: {
		fontSize: 18,
		borderWidth: 2,
		borderColor: secondary,
		padding: 15,
		borderRadius: 5,
		textAlign: "center"
	}
})

export default Numb
