import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { useAuth } from '~/hooks'
import { AccountCreate, AccountLogin, Dashboard, Welcome } from '~/screens'

const DEFAULT_SCREEN_OPTIONS = {
	headerLargeTitle: true,
	headerStyle: {
		blurEffect: 'regular',
		backgroundColor: 'transparent',
	},
	headerTranslucent: true,
}

const Stack = createNativeStackNavigator()

const Root: React.FC = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
			{user ? (
				<Stack.Screen component={Dashboard} name='dashboard' />
			) : (
				<>
					<Stack.Screen
						component={Welcome}
						name='welcome'
						options={Welcome.screenOptions}
					/>
					<Stack.Screen
						component={AccountLogin}
						name='accountLogin'
						options={AccountLogin.screenOptions}
					/>
					<Stack.Screen
						component={AccountCreate}
						name='accountCreate'
						options={AccountCreate.screenOptions}
					/>
				</>
			)}
		</Stack.Navigator>
	)
}

export default Root
