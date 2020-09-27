import { useTheme } from '@react-navigation/native'
import React from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Icon: React.FC<IconProps> = (props) => {
	const theme = useTheme()

	const { color = theme.colors.text, name, ...rest } = props

	if (name.startsWith('material')) {
		const [, ...restName] = name.split('-')
		const materialName = restName.join('-')

		return <MaterialIcon {...rest} color={color} name={materialName} />
	}

	return <Ionicon {...rest} color={color} name={name} />
}

export default Icon
