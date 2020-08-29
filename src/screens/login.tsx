import React, { useRef, useCallback } from 'react'
import { ScrollView, TextInput as RNTextInput } from 'react-native'

import { Button, Screen, TextInput } from '~/components'

const Login: React.FC & typeof Screen = () => {
	const passwordTextInputRef = useRef<RNTextInput>(null)

	const onEmailSubmitEditing = useCallback(() => {
		passwordTextInputRef.current?.focus()
	}, [])

	return (
		<Screen>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				contentContainerStyle={{ padding: 16 }}
			>
				<TextInput
					autoCapitalize='none'
					autoCompleteType='username'
					keyboardType='email-address'
					placeholder='Email'
					returnKeyType='next'
					textContentType='username'
					onSubmitEditing={onEmailSubmitEditing}
				/>
				<TextInput
					ref={passwordTextInputRef}
					autoCapitalize='none'
					autoCompleteType='password'
					placeholder='Password'
					returnKeyType='done'
					secureTextEntry
					textContentType='password'
				/>

				<Button icon='enter'>Continue</Button>
			</ScrollView>
		</Screen>
	)
}

Login.screenOptions = {
	headerTitle: 'Sign with your email',
}

export default Login
