import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

import { system } from '~/utils'

const Headline = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.headlineWhiteObject

	return human.headlineObject
}, system)

export default Headline
