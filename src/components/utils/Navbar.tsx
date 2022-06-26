import React, { useState } from 'react';
import { Link as rrLink } from "react-router-dom";

/*
** components
*/


/*
** chakra ui
*/

import {
	Flex,
	Divider,
	Text,
    HStack,
	VStack,
	Link,
	Icon,
	Box,
	Button,
	IconButton,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image
} from '@chakra-ui/react'

/*
** icons
*/

import {
    CgMenuRight
} from 'react-icons/cg'

interface Props {
    pageTitle: string;
	setOpenSidebar: (value: boolean) => void;
	isOpen: boolean;
}

export default (props: Props) => {

    const  { pageTitle, setOpenSidebar, isOpen } = props;

	const toggle = () => {
		const value = isOpen ? false : true;
		setOpenSidebar(value)
	}

	return (
        <Flex
            alignSelf="strech"
            p={5}
            grow={1}
            justifyContent="space-between"
            alignItems="center"
        >
            <Heading
                color='primary'
                as='h2'
                size='lg'
                noOfLines={1}
				textTransform="capitalize"
             >
               {pageTitle}
            </Heading>
            <HStack
                boxShadow="xl"
                borderRadius="full"
                p={1}
                bg="white"
            >
                <IconButton
                    aria-label='Sidebar toggle'
                    size="md"
                    bg="transparent"
                    borderRadius="full"
                    icon={<CgMenuRight />}
					onClick={toggle}
                />

                <Menu>
                    <MenuButton>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://randomuser.me/api/portraits/men/3.jpg'
                            alt='Tester User Picture'
                            mr='12px'
                        />
                    </MenuButton>
                    <MenuList
                        border="none"
                        mt={3}
                        borderRadius="3xl"
                        boxShadow="xl"
                        p={3}
                    >
                        <Text
                            fontSize="sm"
                            color="primary"
                            p={2}
                            fontWeight="bold"
                        >
                            👋 Hey, Have fun!
                        </Text>
                        <Divider my={3} borderColor="gray.200" />
                        <MenuItem
                            fontSize="sm"
                            color="red"
                            fontWeight="light"
                            p={2}
                            _hover={{backgroundColor:"transparent"}}
                        >
                            Sign out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Flex>
	)
}
