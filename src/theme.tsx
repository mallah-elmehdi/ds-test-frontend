import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	semanticTokens: {
		colors: {
			error: 'red.500',
			primary: {
				default: '#1b254b',
				_dark: 'gray.50',
			},
			secondary: {
				default: '#8293d2'
			},
			match: {
				default: "#639cd9"
			},
			gr: {
				default: "#243164"
			}
		},
		fonts: {
			heading: `"Clear Sans", cursive`,
			body: `"Clear Sans", cursive`,
		},
	},
})

export default theme
