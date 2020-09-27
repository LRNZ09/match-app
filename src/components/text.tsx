import styled from '@emotion/primitives'
import { materialColors } from 'react-native-typography'

import { system } from '~/utils'

// const Text = styled.Text((props) => {
// 	const { theme } = props

// 	if (theme.dark) return human.largeTitleWhiteObject

// 	return human.largeTitleObject
// }, system)

const Text = styled.Text((props) => {
	const { theme } = props

	if (theme.dark)
		return {
			color: materialColors.whitePrimary,
		}

	return {
		color: materialColors.blackPrimary,
	}
}, system)

export default Text
