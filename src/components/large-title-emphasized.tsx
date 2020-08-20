import styled from '@emotion/native'
import { Platform } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { iOSUIKit, material } from 'react-native-typography'

const LargeTitleEmphasized = styled.Text(() => {
  const colorScheme = useColorScheme()

  if (colorScheme === 'dark')
    return Platform.select({
      default: material.display1WhiteObject,
      ios: iOSUIKit.largeTitleEmphasizedWhiteObject,
    })

  return Platform.select({
    default: material.display1Object,
    ios: iOSUIKit.largeTitleEmphasizedObject,
  })
})

export default LargeTitleEmphasized
