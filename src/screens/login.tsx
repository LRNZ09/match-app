import { css } from '@emotion/primitives'
import React, { useCallback, useRef } from 'react'
import { TextInput as RNTextInput, ScrollView } from 'react-native'

import { Button, Screen, TextInput } from '~/components'

const scrollViewStyle = css({
	padding: 16,
})

const Login: React.FC & typeof Screen = () => {
	const passwordTextInputRef = useRef<RNTextInput>()

	const onEmailSubmitEditing = useCallback(() => {
		passwordTextInputRef.current?.focus()
	}, [])

	return (
		<Screen>
			<ScrollView
				contentContainerStyle={scrollViewStyle}
				contentInsetAdjustmentBehavior='automatic'
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
					secureTextEntry
					autoCapitalize='none'
					autoCompleteType='password'
					placeholder='Password'
					returnKeyType='done'
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
