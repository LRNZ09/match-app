import styled from '@emotion/primitives'
import { human } from 'react-native-typography'

const Title = styled.Text((props) => {
	const { theme } = props

	if (theme.dark) return human.title1WhiteObject

	return human.title1Object
})

export default Title
