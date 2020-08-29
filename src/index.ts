import 'react-native-gesture-handler'
import '@react-native-firebase/app'
import '@react-native-firebase/analytics'
import '@react-native-firebase/auth'
import '@react-native-firebase/crashlytics'

import { GoogleSignin } from '@react-native-community/google-signin'
import * as Sentry from '@sentry/react-native'
import Color from 'color'
import { AppRegistry, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { enableScreens } from 'react-native-screens'

import App from '~/app'

enableScreens()
GoogleSignin.configure()
if (!__DEV__)
	Sentry.init({
		dsn:
			'https://628a8473d83a4a80a3e9e91182591ffd@o353577.ingest.sentry.io/5397643',
	})
StatusBar.setBackgroundColor(Color('white').alpha(0.2).toString(), true)
StatusBar.setTranslucent(true)
AppRegistry.registerComponent(DeviceInfo.getApplicationName(), () => App)
