import React,  { useState } from 'react';
import { Link as rrLink } from "react-router-dom";

/*
** components
*/

import Sidebar from '../utils/Sidebar'

/*
** chakra ui
*/

import {
	Link,
	Icon,
	Text,
	HStack
} from '@chakra-ui/react';

/*
** icon
*/

import { IconType } from 'react-icons';

/*
** type
*/

interface Props {
	title: string;
	icon: IconType;
	active: boolean;
	onClick: () => void;
	route: string;
	isOpen: boolean;
}

export default (props: Props) => {

	const {title, icon, active, onClick, route, isOpen} = props;

	return (
		<Link
			as={rrLink}
			bg={active ? "match" : "transparent"}
			borderRadius="full"
			p={3}
			_hover={{textDecor: 'none', backgroundColor: "match"}}
			onClick={onClick}
			to={route}

		>
			<HStack align="center">
				<Icon fontSize="xl" as={icon} />
				{isOpen && <Text lineHeight={1} noOfLines={1} fontSize="lg" >{title}</Text>}
			</HStack>
		</Link>
	)
}
