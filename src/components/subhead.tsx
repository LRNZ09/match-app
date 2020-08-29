import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

import { system } from '~/utils'

const Subhead = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.subheadWhiteObject

	return human.subheadObject
}, system)

export default Subhead
