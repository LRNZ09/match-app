import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { GoogleSignin } from '@react-native-community/google-signin'
import { NavigationContainer } from '@react-navigation/native'
import * as Sentry from '@sentry/react-native'
import { ThemeProvider } from 'emotion-theming'
import React, { useEffect } from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { SENTRY_DSN } from '~/constants'
import { Root } from '~/screens'
import { DarkTheme, LightTheme } from '~/theme'

const App: React.FC = () => {
	const colorScheme = useColorScheme()

	useEffect(() => {
		GoogleSignin.configure()
	}, [])

	useEffect(() => {
		if (!__DEV__)
			Sentry.init({
				dsn: SENTRY_DSN,
			})
	}, [])

	const theme = colorScheme === 'dark' ? DarkTheme : LightTheme

	return (
		<AppearanceProvider>
			<SafeAreaProvider>
				<ActionSheetProvider>
					<ThemeProvider theme={theme}>
						<PaperProvider theme={theme}>
							<NavigationContainer theme={theme}>
								<Root />
							</NavigationContainer>
						</PaperProvider>
					</ThemeProvider>
				</ActionSheetProvider>
			</SafeAreaProvider>
		</AppearanceProvider>
	)
}

export default App
