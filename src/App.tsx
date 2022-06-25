import React from "react"

/*
** components
*/

import Layouts from './components/primary/Layouts'

/*
** chakra ui
*/

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import theme from './theme'
import {
	ChakraProvider,
} from "@chakra-ui/react"

/*
** font
*/

import '@fontsource/clear-sans/300.css'

export const App = () => (
	<ChakraProvider theme={theme} >
		<Layouts />
	</ChakraProvider >
)
