import styled from '@emotion/primitives'
import { useTheme } from '@react-navigation/native'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import {
	Platform,
	TextInput as RNTextInput,
	TextInputProperties,
} from 'react-native'
import { TextInput as PaperTextInput } from 'react-native-paper'

const StyledTextInput = styled(RNTextInput)((props) => {
	const { theme } = props

	return {
		alignItems: 'center',
		backgroundColor: theme.colors.card,
		borderBottomColor: theme.colors.border,
		borderBottomWidth: 1,
		color: theme.colors.text,
		flexDirection: 'row',
		flexGrow: 1,
		fontSize: 18,
		padding: 12,
		marginBottom: 16,
	}
})

const TextInputProps = {
	forwardedRef: PropTypes.any,
}

const TextInput: React.FC<
	TextInputProperties & InferProps<typeof TextInputProps>
> = (props) => {
	const { forwardedRef, ...rest } = props

	const theme = useTheme()

	const TextInputComponent = Platform.select({
		default: PaperTextInput,
		ios: StyledTextInput,
	})

	return (
		<TextInputComponent
			{...rest}
			ref={forwardedRef}
			enablesReturnKeyAutomatically
			clearButtonMode='while-editing'
			placeholderTextColor={theme.colors.placeholder}
			selectionColor={theme.colors.primary}
		/>
	)
}

const ForwardRefTextInput = React.forwardRef<RNTextInput, TextInputProperties>(
	(props, ref) => <TextInput {...props} forwardedRef={ref} />,
)

export default ForwardRefTextInput
