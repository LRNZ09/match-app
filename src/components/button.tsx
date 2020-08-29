import styled, { css } from '@emotion/primitives'
import { useTheme } from '@react-navigation/native'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Platform } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { iOSUIKit, material } from 'react-native-typography'

import { system } from '~/utils'

import Icon from './icon'

const StyledRectButton = styled(RectButton)((props) => {
	const { theme } = props

	return {
		alignItems: 'center',
		backgroundColor: theme.colors.primary,
		borderRadius: theme.roundness,
		color: theme.colors.card,
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
			default: material.buttonObject,
			ios: iOSUIKit.calloutObject,
		})

	return Platform.select({
		default: material.buttonWhiteObject,
		ios: iOSUIKit.calloutWhiteObject,
	})
}, system)

const ButtonProps = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	icon: PropTypes.string,
}

const Button: React.FC<
	RectButtonProperties & InferProps<typeof ButtonProps>
> = (props) => {
	const theme = useTheme()

	const {
		backgroundColor = theme.colors.primary,
		children,
		color = theme.colors.card,
		icon,
		...rest
	} = props

	const childrenCount = React.Children.count(children)

	return (
		<StyledRectButton
			backgroundColor={backgroundColor}
			color={color}
			rippleColor={color}
			{...rest}
		>
			{icon && (
				<Icon
					color={color}
					name={icon}
					size={24}
					style={childrenCount > 0 && buttonIconStyle}
				/>
			)}
			<ButtonText color={color}>{children}</ButtonText>
		</StyledRectButton>
	)
}

export default Button
