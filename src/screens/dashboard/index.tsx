import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { LargeTitleEmphasized } from '~/components'

import ProfileTab from './profile'

const Tab = Platform.select({
	default: createMaterialBottomTabNavigator,
	ios: createBottomTabNavigator,
})()

const HomeTab = () => <LargeTitleEmphasized>Home</LargeTitleEmphasized>
const HomeTabIcon = ({ color, size }) => (
	<Icon color={color} name='heart' size={size} />
)

const SearchTab = () => <LargeTitleEmphasized>Search</LargeTitleEmphasized>
const SearchTabIcon = ({ color, size }) => (
	<Icon color={color} name='search' size={size} />
)

const ProfileTabIcon = ({ color, size }) => (
	<Icon color={color} name='person' size={size} />
)

const Dashboard: React.FC = () => (
	<Tab.Navigator>
		<Tab.Screen
			component={HomeTab}
			name='match'
			options={{ tabBarIcon: HomeTabIcon }}
		/>
		<Tab.Screen
			component={SearchTab}
			name='search'
			options={{ tabBarIcon: SearchTabIcon }}
		/>
		<Tab.Screen
			component={ProfileTab}
			name='profile'
			options={{ tabBarIcon: ProfileTabIcon }}
		/>
	</Tab.Navigator>
)

export default Dashboard
