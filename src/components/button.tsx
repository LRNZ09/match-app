import styled, { css } from '@emotion/native'
import React from 'react'
import { Platform } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { iOSUIKit, material } from 'react-native-typography'

import Icon from './icon'

const buttonStyle = css({
  alignItems: 'center',
  borderRadius: 8,
  flexDirection: 'row',
  justifyContent: 'center',
  margin: 8,
  padding: 12,
})

const buttonChildrenStyle = css({ marginEnd: 8 })

const ButtonIcon = (props) => <Icon size={28} {...props} />

const ButtonText = styled.Text((props) => {
  const colorScheme = useColorScheme()

  let defaultStyle = Platform.select({
    default: material.buttonObject,
    ios: iOSUIKit.calloutObject,
  })

  if (colorScheme === 'dark')
    defaultStyle = Platform.select({
      default: material.buttonWhiteObject,
      ios: iOSUIKit.calloutWhiteObject,
    })

  return {
    ...defaultStyle,
    color: props.color ?? defaultStyle.color,
  }
})

const Button: React.FC<RectButtonProperties> = (props) => {
  const { backgroundColor, color, children, style, ...rest } = props

  const childrenCount = React.Children.count(children)

  return (
    <RectButton
      rippleColor={color}
      {...rest}
      style={[{ backgroundColor, color }, style, buttonStyle]}
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          backgroundColor,
          color,
          ...child.props,
          style: [
            child.props.style,
            childrenCount - 1 !== index && buttonChildrenStyle,
          ],
        })
      })}
    </RectButton>
  )
}

Button.Icon = ButtonIcon
Button.Text = ButtonText

export default Button
