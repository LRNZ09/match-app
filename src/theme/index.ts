import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native'
import _ from 'lodash'
import {
	DefaultTheme as PaperLightTheme,
	DarkTheme as PaperDarkTheme,
} from 'react-native-paper'
import { iOSColors } from 'react-native-typography'

import Colors from '~/colors'

const LightTheme = _.merge(
	// *
	{},
	NavigationLightTheme,
	PaperLightTheme,
	{
		// primaryColor: iOSColors.blue,
		// primaryLightColor: color(iOSColors.blue).lighten(0.5).string(),
		// disabledColor: color(iOSColors.blue).lighten(0.8).string(),
		// backgroundColor: iOSColors.white,
		// barColor: iOSColors.lightGray,
		// dividerColor: iOSColors.midGray,
		// textColor: iOSColors.black,
		// placeholderColor: iOSColors.gray,
		// footnoteColor: iOSColors.gray,
		// footnoteBackgroundColor: iOSColors.customGray,
		// positiveColor: iOSColors.green,

		colors: {
			primary: Colors.frenchRose,
		},
		space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
	},
)

const DarkTheme = _.merge(
	// *
	{},
	LightTheme,
	NavigationDarkTheme,
	PaperDarkTheme,
	{
		// primaryColor: iOSColors.orange,
		// primaryLightColor: color(iOSColors.orange).lighten(0.5).string(),
		// disabledColor: color(iOSColors.orange).lighten(0.8).string(),
		// backgroundColor: 'rgb(17,29,33)',
		// barColor: 'rgb(29,58,63)',
		// dividerColor: iOSColors.gray,
		// textColor: iOSColors.white,
		// placeholderColor: iOSColors.gray,
		// footnoteColor: iOSColors.lightGray,
		// footnoteBackgroundColor: 'rgb(17, 29, 33)',
		// positiveColor: iOSColors.green,
		//   dark: true,
		colors: {
			primary: Colors.lightSalmon,
			background: iOSColors.black,
		},
	},
)

export { DarkTheme, LightTheme }
