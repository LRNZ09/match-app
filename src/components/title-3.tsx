import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

const Title3 = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.title3WhiteObject

	return human.title3Object
})

export default Title3
