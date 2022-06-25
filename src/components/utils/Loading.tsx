import React, { useState } from 'react';

/*
** components
*/


/*
** chakra ui
*/

import {
	Flex,
    Spinner
} from '@chakra-ui/react'

/*
** icons
*/

import {
} from 'react-icons/cg'

interface Props {
}

export default () => {
	return (
        <Flex
            bg="gray.200"
            w="100vw"
            h="100vh"
            justifyContent="center"
            alignItems="center"
            p={5}
            position="absolute"
            top={0}
            left={0}
            zIndex={100}
        >
            <Spinner size='xl' speed='0.7s' color="primary" zIndex={101}/>
        </Flex>
	)

}
