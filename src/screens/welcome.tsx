import { css } from '@emotion/native'
// import ViewPager from '@react-native-community/viewpager'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Title } from 'react-native-paper'

import Colors from '~/colors'
import {
  AppleAuthButton,
  LargeTitleEmphasized,
  FacebookAuthButton,
  GoogleAuthButton,
  SafeAreaBlurView,
  ViewPagerPage,
} from '~/components'
import { View } from 'react-native'

const flexStyle = css({ flex: 1 })

const Welcome: React.FC = () => {
  return (
    <LinearGradient
      colors={[
        Colors.shockingPinkCrayola,
        Colors.persianPink,
        Colors.salmonPink,
        Colors.mellowApricot,
        Colors.mustard,
      ]}
      style={flexStyle}
    >
      <SafeAreaBlurView>
        {/* <ViewPager initialPage={0} orientation='horizontal' style={flexStyle}>
          <ViewPagerPage>
            <LargeTitleEmphasized>Find Your Special Someone</LargeTitleEmphasized>
          </ViewPagerPage>

          <ViewPagerPage>
            <LargeTitleEmphasized>More profiles, more dates</LargeTitleEmphasized>
          </ViewPagerPage> */}

        <ViewPagerPage>
          <LargeTitleEmphasized>
            Sign up now for the beta, and get notified
          </LargeTitleEmphasized>
          <Title>Continue with:</Title>

          <View style={{ flexDirection: 'row' }}>
            <AppleAuthButton />
            <FacebookAuthButton />
            <GoogleAuthButton />
          </View>
        </ViewPagerPage>
        {/* </ViewPager> */}
      </SafeAreaBlurView>
    </LinearGradient>
  )
}

export default Welcome
