import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import React from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { useAuth } from '~/hooks'
import { Dashboard, Welcome } from '~/screens'

const DEFAULT_SCREEN_OPTIONS = {
  headerLargeTitle: true,
  headerStyle: {
    blurEffect: 'regular',
    backgroundColor: 'transparent',
  },
  headerTranslucent: true,
}

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  const { user } = useAuth()
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme

  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
            {!user ? (
              <Stack.Screen
                component={Welcome}
                options={{ headerShown: false }}
                name='welcome'
              />
            ) : (
              <Stack.Screen component={Dashboard} name='dashboard' />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  )
}

export default App
