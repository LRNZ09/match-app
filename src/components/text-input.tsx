import styled, { css } from '@emotion/primitives'
import { useTheme } from '@react-navigation/native'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import {
	Platform,
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
} from 'react-native'
import { TextInput as PaperTextInput } from 'react-native-paper'

import Flex from './flex'
import Icon from './icon'

const textInputIconStyle = css({ marginEnd: 8 })

const StyledTextInput = styled(RNTextInput)((props) => {
	const { theme } = props

	return {
		color: theme.colors.text,
		fontSize: 18,
	}
})

const TextInputProps = {
	forwardedRef: PropTypes.any,
	icon: PropTypes.string,
}

const TextInput: React.FC<
	RNTextInputProps & InferProps<typeof TextInputProps>
> = (props) => {
	const { forwardedRef, icon, ...rest } = props

	const theme = useTheme()

	const TextInputComponent = Platform.select({
		default: PaperTextInput,
		ios: StyledTextInput,
	})

	return (
		<Flex
			alignItems={'center'}
			backgroundColor={theme.colors.card}
			borderBottomColor={theme.colors.border}
			borderBottomWidth={1}
			flexDirection={'row'}
			flexGrow={1}
			marginBottom={4}
			padding={3}
		>
			{icon && (
				<Icon
					color={theme.colors.placeholder}
					name={icon}
					size={16}
					style={textInputIconStyle}
				/>
			)}
			<TextInputComponent
				{...rest}
				ref={forwardedRef}
				enablesReturnKeyAutomatically
				clearButtonMode='while-editing'
				placeholderTextColor={theme.colors.placeholder}
				selectionColor={theme.colors.primary}
			/>
		</Flex>
	)
}

const ForwardRefTextInput = React.forwardRef<RNTextInput, typeof TextInput>(
	(props, ref) => <TextInput {...props} forwardedRef={ref} />,
)

export default ForwardRefTextInput
