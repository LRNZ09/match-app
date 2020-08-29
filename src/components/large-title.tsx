import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

import { system } from '~/utils'

const LargeTitle = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.largeTitleWhiteObject

	return human.largeTitleObject
}, system)

export default LargeTitle
