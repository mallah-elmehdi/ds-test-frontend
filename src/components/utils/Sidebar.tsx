import React, { useState } from 'react';

/*
** components
*/

import ListItem from '../reusable/ListItem'

/*
** chakra ui
*/

import {
	Flex,
	Divider,
	Text,
	VStack,
	Link,
	Icon
} from '@chakra-ui/react'

/*
** icons
*/

import {
	AiOutlineBarChart,
	AiOutlinePieChart,
	AiOutlineRadarChart,
	AiOutlineHome
} from 'react-icons/ai'

interface Props {
	isOpen: boolean;
}

export default (props: Props) => {

	const [itemOrder, activateItem] = useState(1);

	const {isOpen} = props;

	return (
		<Flex
			flexDir="column"
			justifyContent="space-between"
			h="100vh"
			w={isOpen ? "300px" : "70px"}
			left={0}
			p={5}
			bg="primary"
			color="white"
			boxShadow="xl"
			style={{transition: "all 0.2s ease"}}
		>
			<Flex
				flexDir="column"
				justifyContent="space-between"
			>
				<Text
					fontSize="xl"
					align="center"
					color="match"
					lineHeight="1"
					noOfLines={1}
				>
					{isOpen ? "DS DASHBOARD" : "DS"}
				</Text>
				<Divider my={5}
				 borderColor="match"/>
			</Flex>
			<Flex
				grow={1}
				flexDir="column"
				w="100%"

			>
				<VStack
					spacing={5}
					alignItems={isOpen ? "strech" : "center"}
					align={isOpen ? "flex-start" : "center"}
				>
					<ListItem
						route=""
						onClick={() => {activateItem(1)}}
						title="Home" icon=
						{AiOutlineHome}
						active={itemOrder == 1}
						isOpen={isOpen}
					/>
					<ListItem
						route="bar-chart"
						onClick={() => {activateItem(2)}}
						title="Bar Chart"
						icon={AiOutlineBarChart}
						active={itemOrder == 2}
						isOpen={isOpen}
					/>
					<ListItem
						route="pie-chart"
						onClick={() => {activateItem(3)}}
						title="Pie Chart"
						icon={AiOutlinePieChart}
						active={itemOrder == 3}
						isOpen={isOpen}
					/>
					<ListItem
						route="radar-chart"
						onClick={() => {activateItem(4)}}
						title="Radar Chart"
						icon={AiOutlineRadarChart}
						active={itemOrder == 4}
						isOpen={isOpen}
					/>
				</VStack>
			</Flex>
			<Flex
				align={isOpen ? "flex-start" : "center"}
				flexDir="column"
				w="100%"
			>
				<Divider my={5} borderColor="match"/>
				<Text
					fontSize={isOpen ? "sm" : "xl"}
					noOfLines={1}
					color="match">
					{isOpen ? "♥ Made by EL MEHDI" : "♥"}
				</Text>
			</Flex>
		</Flex>
	)

}
