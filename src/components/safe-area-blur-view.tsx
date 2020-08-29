import { css } from '@emotion/primitives'
import { BlurView, BlurViewProperties } from '@react-native-community/blur'
import React from 'react'
import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DEFAULT_AMOUNT = 100
const DEFAULT_TYPE = 'regular'

const insetBlurStyle = css({ position: 'absolute', left: 0, right: 0 })
const insetTopBlurStyle = css({ top: 0 })
const insetBottomBlurStyle = css({ bottom: 0 })

const SafeAreaBlurView: React.FC<BlurViewProperties> = (props) => {
	const { children, style, ...rest } = props

	const insets = useSafeAreaInsets()

	if (Platform.OS === 'ios')
		return (
			<>
				{children}

				<BlurView
					blurAmount={DEFAULT_AMOUNT}
					blurType={DEFAULT_TYPE}
					{...rest}
					style={[
						style,
						insetBlurStyle,
						insetTopBlurStyle,
						{ height: insets.top },
					]}
				/>
				<BlurView
					blurAmount={DEFAULT_AMOUNT}
					blurType={DEFAULT_TYPE}
					{...rest}
					style={[
						style,
						insetBlurStyle,
						insetBottomBlurStyle,
						{ height: insets.bottom },
					]}
				/>
			</>
		)

	return children
}

export default SafeAreaBlurView
