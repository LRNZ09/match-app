import { GoogleSignin } from '@react-native-community/google-signin'
import firebase from '@react-native-firebase/app'
import React, { useCallback, useState } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'

import { signInOrShowCredentialAlert } from '~/auth'
import { authButtonStyle } from '~/styles'

import Button from './button'

const GoogleAuthButton: React.FC = () => {
	const [isModalVisible, setModalVisible] = useState(false)

	const onPress = useCallback(async () => {
		try {
			// Get the users ID token
			const {
				idToken,
				user: { email },
			} = await GoogleSignin.signIn()

			setModalVisible(true)

			// Create a Google credential with the token
			const credential = firebase.auth.GoogleAuthProvider.credential(idToken)

			// Sign-in the user with the credential
			await signInOrShowCredentialAlert({ credential, email })
		} catch (error) {
			// Sentry.captureException(e)

			Alert.alert(error.code, error.message)
		} finally {
			setModalVisible(false)
		}
	}, [])

	return (
		<>
			<Button
				backgroundColor='whitesmoke'
				color='dimgray'
				icon='logo-google'
				onPress={onPress}
				style={authButtonStyle}
			/>

			<Modal isVisible={isModalVisible} useNativeDriver>
				<ActivityIndicator size='large' />
			</Modal>
		</>
	)
}

export default GoogleAuthButton
