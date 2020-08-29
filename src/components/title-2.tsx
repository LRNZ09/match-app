import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

const Title2 = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.title2WhiteObject

	return human.title2Object
})

export default Title2
