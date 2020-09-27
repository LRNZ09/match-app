import { css } from '@emotion/primitives'
import React, { useCallback } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Colors from '~/colors'
import {
	AppleAuthButton,
	TextButton,
	EmailAuthButton,
	FacebookAuthButton,
	Flex,
	GoogleAuthButton,
	Headline,
	Icon,
	LargeTitleEmphasized,
	Screen,
} from '~/components'
import TwitterAuthButton from '~/components/twitter-auth-button'
import { ScreenComponent, ScreenComponentProps } from '~/interfaces'

const flexStyle = css({ flex: 1 })

const Welcome: React.FC & ScreenComponent = () => {
	const insets = useSafeAreaInsets()

	return (
		<Screen>
			<LinearGradient
				colors={[Colors.redSalsa, Colors.amaranthPink]}
				end={{ x: 1, y: 0 }}
				start={{ x: 0, y: 1 }}
				style={flexStyle}
			>
				<Flex
					alignItems='center'
					flex={1}
					justifyContent='center'
					// https://github.com/software-mansion/react-native-screens/tree/master/native-stack#measuring-headers-height-on-ios
					mt={insets.top + 44}
					padding={4}
				>
					<Flex alignItems='center' flexDirection='row' mb={2}>
						<Icon color='white' name='heart-circle' size={56} />
						<LargeTitleEmphasized color='white'>MatchApp</LargeTitleEmphasized>
					</Flex>

					<Headline color='white' mb={4} textAlign='center'>
						Sign up now for the beta, and get notified as soon as the app
						launch!
					</Headline>

					<Flex flexDirection='row'>
						<AppleAuthButton />
						<FacebookAuthButton />
						<GoogleAuthButton />
						<TwitterAuthButton />
						<EmailAuthButton />
					</Flex>
				</Flex>
			</LinearGradient>
		</Screen>
	)
}

const WelcomeHeaderRight: React.FC<ScreenComponentProps> = (props) => {
	const { navigation } = props

	const onPress = useCallback(() => {
		navigation.navigate('accountLogin')
	}, [navigation])

	return <TextButton onPress={onPress}>Already a member?</TextButton>
}

Welcome.screenOptions = (screenProps) => ({
	headerLargeTitle: false,
	headerTitleStyle: { color: 'transparent' },
	headerRight: (props) => <WelcomeHeaderRight {...screenProps} {...props} />,
	title: 'Welcome',
})

export default Welcome
