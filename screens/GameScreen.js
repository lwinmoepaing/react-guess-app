import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Card from '../components/BaseUI/Card'
import BaseButton from '../components/BaseUI/BaseButton'
import BodyText from '../components/BaseUI/BodyText'
import Numb from '../components/Common/Numb'

// Get Random Method
const getRandom = (min, max, exclude) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	const random = Math.floor(Math.random() * (max - min)) + min
	if(exclude === random) {
		return getRandom(min, max, exclude)
	} else {
		return random
	}
}

const GameScreen = (props) => {
	// Manage Props
	const { selectedNumber, gameOver } = props
	// Set Current Minimun and Maximun
	const currentMin = useRef(1)
	const currentMax = useRef(100)

	// Generate Number
	const initialState = getRandom(1, 100, selectedNumber)
	const [ guessNumber, setGuessNumber] = useState(initialState)
	const [ countList, setCountList ] = useState([initialState.toString()])


	useEffect(() => {
		if(guessNumber === selectedNumber) {
			gameOver(countList)
		}
	}, [selectedNumber, guessNumber, gameOver])

	// User Choice Func
	const choiceNumber = (type) => {
		if(
			(type === 'less' && guessNumber < selectedNumber) ||
			(type === 'greater' && guessNumber > selectedNumber)
		) {
			Alert.alert('Ohh No You are Lying')
			return
		}

		if ( type === 'less') currentMax.current = guessNumber
		else currentMin.current = guessNumber + 1

		const getNumber = getRandom(
			currentMin.current,
			currentMax.current
		)
		setGuessNumber(getNumber)
		setCountList([getNumber.toString(), ...countList])
	}

	const ListItem = ({item, index}) => {
		return (
			<Card style={styles.listItem}>
				<BodyText style={{flex: 1}}>#{countList.length - index}</BodyText>
				<BodyText style={{flex: 1, textAlign: 'right'}}>{item}</BodyText>
			</Card>
		)
	}

	return (
		<View style={styles.Screen}>
			<View style={styles.GameContainer}>
				<Card style={styles.Content}>
					<BodyText center> Computer Guess </BodyText>
					<Numb> {guessNumber} </Numb>
					<View style={styles.ButtonContainer}>
						<BaseButton
							style={styles.Button}
							onPress={() => choiceNumber('less')}
						>
							<Ionicons name="md-remove" size={14} color="white" />  Less
						</BaseButton>
						<BaseButton
							style={styles.Button}
							onPress={() => choiceNumber('greater')}
						>
							<Ionicons name="md-add" size={14} color="white" /> Greater
						</BaseButton>
					</View>
				</Card>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					keyExtractor={(item,index) => `${index}-${item}`}
					renderItem={ListItem}
					data={countList}
					contentContainerStyle={styles.list}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	Screen: {
		flex: 1,
		alignItems: 'center',
	},
	GameContainer: {
		justifyContent: 'center',
	},
	Content: {
		width: 300,
		maxWidth: '100%',
		padding: 10
	},
	ButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	Button: {
		width: 120,
		maxWidth: '100%',
		borderRadius: 15
	},
	listContainer: {
		flex: 3,
		width: 330,
		maxWidth: '100%',
	},
	list: {
		flexGrow: 1,
    alignItems: 'center',
		justifyContent: 'flex-end',
		// borderColor: '#000',
		// borderWidth: 1
	},
	listItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
		justifyContent: 'space-between',
		width: 300,
		maxWidth: '100%',
		borderRadius: 4,
		elevation: 3
	}
})

export default GameScreen
