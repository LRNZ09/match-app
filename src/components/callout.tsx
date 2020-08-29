import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

import { system } from '~/utils'

const Callout = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.calloutWhiteObject

	return human.calloutObject
}, system)

export default Callout
