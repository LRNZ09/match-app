import 'react-native-gesture-handler'
import '@react-native-firebase/app'
import '@react-native-firebase/analytics'
import '@react-native-firebase/auth'
import '@react-native-firebase/crashlytics'

import * as Sentry from '@sentry/react-native'
import Color from 'color'
import { AppRegistry, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { enableScreens } from 'react-native-screens'

import App from '~/app'
import { SENTRY_DSN } from '~/constants'

Sentry.init({
	debug: __DEV__,
	dsn: SENTRY_DSN,
	release: DeviceInfo.getReadableVersion(),
	sampleRate: __DEV__ ? 0 : 1,
})

StatusBar.setBackgroundColor(Color('white').alpha(0.2).toString(), true)
StatusBar.setTranslucent(true)

enableScreens()

AppRegistry.registerComponent(DeviceInfo.getApplicationName(), () => App)
