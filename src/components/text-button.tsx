import styled, { css } from '@emotion/primitives'
import { useTheme } from '@react-navigation/native'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Platform } from 'react-native'
import {
	BorderlessButtonProperties,
	BorderlessButton,
} from 'react-native-gesture-handler'
import { iOSUIKit, material } from 'react-native-typography'

import { system } from '~/utils'

import Icon from './icon'

const StyledBorderlessButton = styled(BorderlessButton)((props) => {
	const { theme } = props

	return {
		alignItems: 'center',
		borderRadius: theme.roundness,
		color: theme.colors.text,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 8,
	}
}, system)

const buttonIconStyle = css({ marginEnd: 8 })

const ButtonText = styled.Text((props) => {
	const { theme } = props

	if (theme.dark)
		return Platform.select({
			default: material.buttonWhiteObject,
			ios: iOSUIKit.calloutWhiteObject,
		})

	return Platform.select({
		default: material.buttonObject,
		ios: iOSUIKit.calloutObject,
	})
}, system)

const ButtonProps = {
	color: PropTypes.string,
	icon: PropTypes.string,
}

const TextButton: React.FC<
	BorderlessButtonProperties & InferProps<typeof ButtonProps>
> = (props) => {
	const theme = useTheme()

	const { children, color = theme.colors.text, icon, ...rest } = props

	const childrenCount = React.Children.count(children)

	return (
		<StyledBorderlessButton color={color} rippleColor={color} {...rest}>
			{icon && (
				<Icon
					color={color}
					name={icon}
					size={24}
					style={childrenCount > 0 && buttonIconStyle}
				/>
			)}
			<ButtonText color={color}>{children}</ButtonText>
		</StyledBorderlessButton>
	)
}

export default TextButton
