import firebase from '@react-native-firebase/app'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import {
	AccessToken,
	GraphRequest,
	GraphRequestManager,
	LoginManager,
} from 'react-native-fbsdk'
import Modal from 'react-native-modal'

import { signInOrShowCredentialAlert } from '~/auth'
import { authButtonStyle } from '~/styles'

import Button from './button'

const LOGIN_PERMISSIONS = ['email', 'public_profile']

const getFacebookUser = () =>
	new Promise<{ email: string; name: string }>(() => {
		new GraphRequestManager()
			.addRequest(
				new GraphRequest(
					'/me?fields=email,name',
					undefined,
					(error, result) => {
						if (error || !result) return Promise.reject(error)

						return Promise.resolve(result)
					},
				),
			)
			.start()
	})

const FacebookAuthButton: React.FC = () => {
	const [isModalVisible, setModalVisible] = useState(false)

	const onPress = useCallback(async () => {
		try {
			const { isCancelled } = await LoginManager.logInWithPermissions(
				LOGIN_PERMISSIONS,
			)
			if (isCancelled) return

			setModalVisible(true)

			const accessToken = await AccessToken.getCurrentAccessToken()
			if (!accessToken) return

			const credential = firebase.auth.FacebookAuthProvider.credential(
				accessToken.accessToken,
			)
			const { email } = await getFacebookUser()

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
				backgroundColor='rgb(54, 120, 234)'
				color='white'
				icon='material-facebook'
				style={authButtonStyle}
				onPress={onPress}
			/>

			<Modal useNativeDriver isVisible={isModalVisible}>
				<ActivityIndicator size='large' />
			</Modal>
		</>
	)
}

export default FacebookAuthButton
