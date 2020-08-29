import AppleAuth, {
	AppleButton,
	AppleAuthRequestOperation,
	AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication'
import firebase from '@react-native-firebase/app'
import { useTheme } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'

import { signInOrShowCredentialAlert } from '~/auth'
import { authButtonStyle } from '~/styles'

const AppleAuthButton: React.FC = () => {
	const theme = useTheme()

	const [isModalVisible, setModalVisible] = useState(false)

	const onPress = useCallback(async () => {
		try {
			const {
				email,
				fullName,
				identityToken,
				nonce,
			} = await AppleAuth.performRequest({
				requestedOperation: AppleAuthRequestOperation.LOGIN,
				requestedScopes: [
					AppleAuthRequestScope.FULL_NAME,
					AppleAuthRequestScope.EMAIL,
				],
			})
			if (!identityToken) return

			setModalVisible(true)

			const credential = firebase.auth.AppleAuthProvider.credential(
				identityToken,
				nonce,
			)

			const userCredential = await signInOrShowCredentialAlert({
				credential,
				email,
			})
			if (!userCredential) return

			if (fullName) {
				const { user } = userCredential
				const displayName =
					fullName.nickname ??
					[fullName.givenName, fullName.middleName, fullName.familyName]
						.filter(Boolean)
						.join(' ')

				if (displayName) await user.updateProfile({ displayName })
			}
		} catch (error) {
			// Sentry.captureException(e)

			Alert.alert(error.code, error.message)
		} finally {
			setModalVisible(false)
		}
	}, [])

	if (!AppleAuth.isSupported) return null

	const buttonStyle = theme.dark
		? AppleButton.Style.WHITE
		: AppleButton.Style.BLACK

	return (
		<>
			<AppleButton
				buttonStyle={buttonStyle}
				buttonType={AppleButton.Type.CONTINUE}
				cornerRadius={theme.roundness}
				onPress={onPress}
				style={authButtonStyle}
			/>

			<Modal isVisible={isModalVisible} useNativeDriver>
				<ActivityIndicator size='large' />
			</Modal>
		</>
	)
}

export default AppleAuthButton
