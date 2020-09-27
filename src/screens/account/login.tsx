import { css } from '@emotion/primitives'
import React, { useCallback, useRef } from 'react'
import { TextInput as RNTextInput, ScrollView } from 'react-native'

import { Button, Screen, TextInput } from '~/components'
import { ScreenComponent } from '~/interfaces'

const scrollViewStyle = css({
	padding: 16,
})

const AccountLogin: React.FC & ScreenComponent = () => {
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
					icon='mail'
					keyboardType='email-address'
					onSubmitEditing={onEmailSubmitEditing}
					placeholder='Email'
					returnKeyType='next'
					textContentType='username'
				/>
				<TextInput
					autoCapitalize='none'
					autoCompleteType='password'
					icon='lock-closed'
					placeholder='Password'
					ref={passwordTextInputRef}
					returnKeyType='done'
					secureTextEntry
					textContentType='password'
				/>

				<Button icon='enter'>Continue</Button>
			</ScrollView>
		</Screen>
	)
}

AccountLogin.screenOptions = {
	title: 'Sign in',
}

export default AccountLogin
