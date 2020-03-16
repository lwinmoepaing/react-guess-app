import React from 'react'
import { View, StyleSheet } from 'react-native'
import BodyText from '../components/BaseUI/BodyText'
import TitleText from '../components/BaseUI/TitleText'
import Card from '../components/BaseUI/Card'
import BaseButton from '../components/BaseUI/BaseButton'

const GameOverScreen = ({ round, restartGame }) => {
	const rightNumber = round[0]
	return (
		<View style={styles.container}>
			<Card style={styles.cardContainer}>
				<TitleText style={styles.text} center> Game Over </TitleText>
				<TitleText style={styles.text} center> Computer Think ({round.length}) Round </TitleText>
				<TitleText style={styles.text} center> Your Number is {rightNumber} </TitleText>
				<BaseButton onPress={restartGame}> Restart ? </BaseButton>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 12,
	},
	cardContainer: {
		padding: 10
	},
	text: {
		marginVertical: 10
	}
})

export default GameOverScreen
