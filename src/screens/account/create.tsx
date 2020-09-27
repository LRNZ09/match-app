import { css } from '@emotion/primitives'
import React, { useCallback, useRef } from 'react'
import { TextInput as RNTextInput, ScrollView } from 'react-native'

import { Button, Screen, TextInput } from '~/components'
import { ScreenComponent } from '~/interfaces'

const scrollViewStyle = css({
	padding: 16,
})

const AccountCreate: React.FC & ScreenComponent = () => {
	const emailTextInputRef = useRef<RNTextInput>()
	const passwordTextInputRef = useRef<RNTextInput>()

	const onNameSubmitEditing = useCallback(() => {
		emailTextInputRef.current?.focus()
	}, [])

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
					autoCapitalize='words'
					autoCompleteType='username'
					icon='person'
					onSubmitEditing={onNameSubmitEditing}
					placeholder='Name'
					returnKeyType='next'
					textContentType='username'
				/>
				<TextInput
					autoCapitalize='none'
					autoCompleteType='email'
					icon='mail'
					keyboardType='email-address'
					onSubmitEditing={onEmailSubmitEditing}
					placeholder='Email'
					ref={emailTextInputRef}
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

AccountCreate.screenOptions = {
	title: 'Create an account',
}

export default AccountCreate
