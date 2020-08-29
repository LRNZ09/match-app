import { css } from '@emotion/primitives'
import React from 'react'
import { ScrollViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const viewPagerPageStyle = css({
	alignItems: 'center',
	padding: 24,
})

const ViewPagerPage: React.FC<ScrollViewProps> = (props) => {
	const { contentContainerStyle, ...rest } = props

	return (
		<ScrollView
			{...rest}
			contentInsetAdjustmentBehavior='automatic'
			contentContainerStyle={[contentContainerStyle, viewPagerPageStyle]}
		/>
	)
}

export default ViewPagerPage
