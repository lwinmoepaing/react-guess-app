import React, { useState } from 'react'
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Alert,
	Keyboard,
} from 'react-native'
import Card from '../components/BaseUI/Card'
import { primary } from '../constant/color'
import TitleText from '../components/BaseUI/TitleText'
import BaseButton from '../components/BaseUI/BaseButton'
import Input from '../components/BaseUI/Input'
import Numb from '../components/Common/Numb'

const StartScreen = (props) => {
	const [number, setNumber] = useState(null)
	const [chooseNumber, setChooseNumber ] = useState(null)

	const inputOnChange = (value) => {
 		setNumber(value.replace(/[^0-9]/g, ''))
	}

	const resetNumber = () => {
		setNumber(null)
	}

	const keyBoardDismiss = () => {
		Keyboard.dismiss()
	}

	const onSubmitNumber = () => {
		if(isNaN(number) || number < 1 || number > 99 ) {
			Alert.alert(
				'Warning',
				'[ Number Must Be Between 0 and 100 ]',
				[
					{
						text: 'Cancel',
						style: 'cancel',
					}
				],
				{ cancelable: true }
			)
			return
		}
		setNumber(null)
		setChooseNumber(number)
		Keyboard.dismiss()
	}

	let confirmBox;

	if(chooseNumber) {
		confirmBox = (
		<Card style={styles.content}>
			<TitleText style={styles.textCenter}> You Selected </TitleText>
			<Numb>{chooseNumber}</Numb>
			<BaseButton
				style={{ padding: 10 }}
				onPress={() => { props.setSelectedNumber(chooseNumber)}}
			>Start Game</BaseButton>
		</Card>
		)
	}

	return (
		<TouchableWithoutFeedback onPress={keyBoardDismiss}>
			<View style={styles.container}>
				{/* Choose Number Container */}
				<Card style={styles.content}>
					<TitleText style={styles.textCenter}>Choose Number</TitleText>
					<Input
						value={number}
						blurOnSubmit
						keyboardType="number-pad"
						autoCorrect={false}
						autoCapitalize="none"
						maxLength={2}
						onChangeText={inputOnChange}
					/>

					<View style={styles.buttonContainer}>
						<BaseButton
							color="secondary"
							style={styles.buttonStyle}
							onPress={resetNumber}
						>Reset</BaseButton>
						<BaseButton
							style={styles.buttonStyle}
							onPress={onSubmitNumber}
						>Select</BaseButton>
					</View>
				</Card>

				{/* If User Choose  */}
				{ confirmBox }
				</View>
		</TouchableWithoutFeedback>

	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		width: 300,
		maxWidth: '100%',
		padding: 15,
		marginVertical: 5,
	},
	textCenter: {
		textAlign: 'center',
		marginBottom: 5
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between'
	},
	buttonStyle: {
		width: 130,
		maxWidth: '100%',
		marginVertical: 4,
		padding: 8,
	}
})

export default StartScreen
