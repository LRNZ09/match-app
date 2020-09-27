// import firebase from '@react-native-firebase/app'
import { useNavigation } from '@react-navigation/core'
import React, { useCallback } from 'react'

import { authButtonStyle } from '~/styles'

import Button from './button'

const EmailAuthButton: React.FC = () => {
	const navigation = useNavigation()

	const onPress = useCallback(async () => {
		navigation.navigate('accountCreate')
	}, [navigation])

	return (
		<Button
			backgroundColor='sandybrown'
			color='white'
			icon='mail'
			style={authButtonStyle}
			onPress={onPress}
		/>
	)
}

export default EmailAuthButton
