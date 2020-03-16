import React, { useState } from 'react'
import { View } from 'react-native'
import { Asset } from 'expo-asset'
import { AppLoading } from 'expo'

// Font Loading
import * as Font from 'expo-font'
// Importing Screen
import Header from './components/Common/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFont = async () => {
	await Font.loadAsync({
		'bodyText': require('./assets/font/NanumGothic-Regular.ttf'),
		'titleText': require('./assets/font/NanumGothic-Bold.ttf'),
	})
}

const App = () => {
	const [ isFontLoading, setFontLoading ] = useState(true)
	const [ selectedNumb, setSelectedNumb ] = useState(null)
	const [ round, setRound ] = useState(null)

	const gameOver = (val) => {
		setRound(val)
		setSelectedNumb(null)
	}

	const restartGame = () => {
		setSelectedNumb(null)
		setRound(null)
	}

	let screen = <StartScreen setSelectedNumber={ (value) => setSelectedNumb(+value)} />
	if(selectedNumb) screen = <GameScreen gameOver={gameOver} selectedNumber={selectedNumb} />
	if(round) screen = <GameOverScreen round={round} restartGame={restartGame} />

	if(isFontLoading) {
		return <AppLoading
			startAsync={ () => fetchFont() }
			onFinish={ () => setFontLoading(false) }
			onError={console.error}
		/>
	}

	return (
		<View style={{flex: 1}}>
			<Header />
			{ screen }
		</View>
	)
}

export default App
