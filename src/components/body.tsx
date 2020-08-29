import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

import { system } from '~/utils'

const Body = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.bodyWhiteObject

	return human.bodyObject
}, system)

export default Body
