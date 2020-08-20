import styled, { css } from '@emotion/native'
import React from 'react'
import { Platform } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const buttonStyle = css({
  alignItems: 'center',
  backgroundColor: 'rgb(54, 120, 234)',
  borderRadius: 4,
  flexDirection: 'row',
  justifyContent: 'center',
  margin: 8,
  padding: 12,
})

const PlatformIconComponent = Platform.select({
  default: MaterialIcon,
  ios: Ionicon,
})

const Icon: React.FC<IconProps> = (props) => {
  const { name, ...rest } = props

  if (name.startsWith('material')) {
    const [, ...restName] = name.split('-')
    const materialName = restName.join('-')
    return <MaterialIcon {...rest} name={materialName} />
  }

  return (
    <PlatformIconComponent
      {...rest}
      // style={[style, buttonStyle]}
      // android_ripple={{ color: 'white', borderless: false, radius: 4 }}
    />
  )
}

export default Icon
