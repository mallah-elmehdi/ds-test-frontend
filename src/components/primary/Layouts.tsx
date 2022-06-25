import React, {useState, useEffect} from "react"
import {Routes, Route, useLocation} from 'react-router-dom';

/*
** components
*/

import Dashboard from './Dashboard'
import Signin from './Signin'
import LandingPage from './LandingPage'
import Loading from '../utils/Loading'
import Home from '../pages/Home'

/*
** chakra ui
*/

import {
	Text
} from "@chakra-ui/react"

/*
** font
*/


export default () => {

	const [isLoading, setLoading] = useState(true);

    return (
        <>
    		{isLoading && <Loading/>}
    		<Routes>
    			<Route path="" element={<LandingPage  setLoading={setLoading}/>} />
    			<Route path="dashboard" element={<Dashboard  setLoading={setLoading}/>} >
    				<Route index element={<Home />} />
    				<Route path="bar-chart" element={<Text>bar</Text>} />
    				<Route path="pie-chart" element={<Text>pie</Text>} />
    				<Route path="radar-chart" element={<Text>radar</Text>} />
    			</Route>
    			<Route path="sign-in" element={<Signin setLoading={setLoading}/>} />
    		</Routes>
        </>)
}
