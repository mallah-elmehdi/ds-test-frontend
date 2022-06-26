import React, {useState, useEffect} from 'react';
import {Routes, Route, Outlet, useLocation} from 'react-router-dom';

/*
** components
*/

import Sidebar from '../utils/Sidebar'
import Navbar from '../utils/Navbar'

/*
** chakra ui
*/

import { HStack,Flex,useMediaQuery  } from '@chakra-ui/react';

interface Props {
	setLoading: (value: boolean) => void;
}

export default (props: Props) => {

	const [openSidebar, setOpenSidebar] = useState(true)

	const {setLoading} = props;

	// close the sidebar in small screens
	const [isSmallScreen] = useMediaQuery('(max-width: 650px)')
	useEffect(() => {
		setLoading(false);
		isSmallScreen ? setOpenSidebar(false) : setOpenSidebar(true)
	}, [isSmallScreen])

	// get the currentLocation
	const currentLocation = useLocation()
	var { pathname } = currentLocation;

	// formating the pagename
	var pageName = pathname == "/dashboard" ? "home" : pathname.split("/")[2].split("-").join(" ")
	// changing the document title
	document.title = "DS Test | Dashboard | " + pageName

	return (
		<HStack spacing={0} bg="gray.200">
			<Sidebar isOpen={openSidebar}/>
			<Flex
				flexDir="column"
				alignSelf="flex-start"
				grow={1}
				alignItems="stretch"
			>
				<Navbar pageTitle={pageName} setOpenSidebar={setOpenSidebar} isOpen={openSidebar}/>
				<Outlet/>
			</Flex>
		</HStack>
	)
}
