import 'react-native-gesture-handler'
import '@react-native-firebase/app'
import '@react-native-firebase/analytics'
import '@react-native-firebase/auth'
import '@react-native-firebase/crashlytics'

import Color from 'color'
import { AppRegistry, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { enableScreens } from 'react-native-screens'

import App from '~/app'

StatusBar.setBackgroundColor(Color('white').alpha(0.2).toString(), true)
StatusBar.setTranslucent(true)

enableScreens()

AppRegistry.registerComponent(DeviceInfo.getApplicationName(), () => App)
