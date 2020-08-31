import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StatusBar, StatusBarProps } from 'react-native'
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript'

interface ScreenComponent {
	screenOptions?: NativeStackNavigationOptions
}

const Screen: React.FC<StatusBarProps> & ScreenComponent = (props) => {
	const { children, ...rest } = props

	const theme = useTheme()

	const defaultBarStyle = theme.dark ? 'light-content' : 'dark-content'

	return (
		<>
			<StatusBar
				animated
				translucent
				barStyle={defaultBarStyle}
				showHideTransition='slide'
				{...rest}
			/>

			{children}
		</>
	)
}

export default Screen
