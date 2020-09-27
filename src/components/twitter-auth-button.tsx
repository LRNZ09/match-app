import firebase from '@react-native-firebase/app'
// import { useNavigation } from '@react-navigation/core'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Alert, NativeModules } from 'react-native'
import Modal from 'react-native-modal'

import { signInOrShowCredentialAlert } from '~/auth'
import { authButtonStyle } from '~/styles'

import Button from './button'

const { RNTwitterSignIn } = NativeModules

const TwitterAuthButton: React.FC = () => {
	const [isModalVisible, setModalVisible] = useState(false)

	const onPress = useCallback(async () => {
		try {
			const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn()

			setModalVisible(true)

			const credential = firebase.auth.TwitterAuthProvider.credential(
				authToken,
				authTokenSecret,
			)

			await signInOrShowCredentialAlert({ credential })
		} catch (error) {
			console.warn(error.code)
			// Sentry.captureException(e)

			Alert.alert(error.code, error.message)
		} finally {
			setModalVisible(false)
		}
	}, [])
	return (
		<>
			<Button
				backgroundColor='rgb(29, 161, 242)'
				color='white'
				icon='logo-twitter'
				onPress={onPress}
				style={authButtonStyle}
			/>

			<Modal useNativeDriver isVisible={isModalVisible}>
				<ActivityIndicator size='large' />
			</Modal>
		</>
	)
}

export default TwitterAuthButton
