import {
	RouteProp,
	ParamListBase,
	NavigationProp,
} from '@react-navigation/core'
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript'

export interface ScreenComponentProps {
	navigation: NavigationProp<Record<string, undefined>>
	route: RouteProp<ParamListBase, string>
}

export interface ScreenComponent {
	screenOptions?:
		| NativeStackNavigationOptions
		| ((props: ScreenComponentProps) => NativeStackNavigationOptions)
}
