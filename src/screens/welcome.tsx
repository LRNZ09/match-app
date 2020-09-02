// Import ViewPager from '@react-native-community/viewpager'
import { css } from '@emotion/primitives'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { WelcomeImage } from '~/assets'
import Colors from '~/colors'
import {
	AppleAuthButton,
	EmailAuthButton,
	FacebookAuthButton,
	Flex,
	GoogleAuthButton,
	Headline,
	Icon,
	LargeTitleEmphasized,
	Screen,
	ViewPagerPage,
} from '~/components'

const flexStyle = css({ flex: 1 })

const Welcome: React.FC & typeof Screen = () => (
	<Screen>
		<LinearGradient
			colors={[
				Colors.frenchRose,
				Colors.brinkPink,
				Colors.lightCoral,
				Colors.congoPink,
				Colors.lightSalmon,
				Colors.mellowApricot,
				Colors.jasmine,
			]}
			end={{ x: 1, y: 0 }}
			start={{ x: 0, y: 1 }}
			style={flexStyle}
		>
			{/* <ViewPager initialPage={0} orientation='horizontal' style={flexStyle}>
          <ViewPagerPage>
            <LargeTitleEmphasized>Find Your Special Someone</LargeTitleEmphasized>
          </ViewPagerPage>

          <ViewPagerPage>
            <LargeTitleEmphasized>More profiles, more dates</LargeTitleEmphasized>
          </ViewPagerPage> */}

			<ViewPagerPage>
				<WelcomeImage height={400} width={300} />

				<Flex alignItems='center' flexDirection='row'>
					<Icon color='white' name='heart-circle' size={56} />
					<LargeTitleEmphasized color='white'>MatchApp</LargeTitleEmphasized>
				</Flex>

				<Headline color='white' p={2} textAlign='center'>
					Sign up now for the beta, and get notified as soon as the app launch!
				</Headline>

				<Flex flexDirection='row' m={3}>
					<AppleAuthButton />
					<FacebookAuthButton />
					<GoogleAuthButton />
					<EmailAuthButton />
				</Flex>
			</ViewPagerPage>
			{/* </ViewPager> */}
		</LinearGradient>
	</Screen>
)

Welcome.screenOptions = {
	headerLargeTitle: false,
	headerTitleStyle: { color: 'transparent' },
	headerTitle: 'Welcome',
}

export default Welcome
