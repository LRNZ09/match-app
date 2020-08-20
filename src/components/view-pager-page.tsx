import { css } from '@emotion/native'
import React from 'react'
import { ScrollViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const flexStyle = css({
  alignItems: 'center',
  flex: 1,
  padding: 8,
  paddingBottom: 80,
})

const ViewPagerPage: React.FC<ScrollViewProps> = (props) => {
  const { contentContainerStyle, style } = props

  const insets = useSafeAreaInsets()

  const safeAreaStyle = { paddingTop: insets.top }

  return (
    <ScrollView
      {...props}
      // contentInsetAdjustmentBehavior='automatic'
      contentContainerStyle={[contentContainerStyle, flexStyle]}
      style={[style, safeAreaStyle]}
      scrollEventThrottle={32}
    />
  )
}

export default ViewPagerPage
