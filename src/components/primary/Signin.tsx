import React, {useState, useEffect} from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios'

/*
** components
*/

/*
** chakra ui
*/

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Image,
    VStack,
    Button,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    ScaleFade,
    useDisclosure
} from '@chakra-ui/react';

interface Props {
	setLoading: (value: boolean) => void;
}

export default (props: Props) => {
    // page title
    document.title = "DS Test | Sign In"

    // ScaleFade hook
    const { isOpen, onClose, onOpen } = useDisclosure()

    // hook for the username
    const [username, setUsername] = useState("")
    const handleUsernameChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLButtonElement
        onClose()
        setUsername(target.value)
        setUsernameError(false)
        setError(false)
    }

    // error managenemt for the username
    const [isUsernameError, setUsernameError] = useState(false)

    // hook for the password
    const [password, setPassword] = useState("")
    const handlePasswordChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLButtonElement
        onClose()
        setPassword(target.value)
        setPasswordError(false)
        setError(false)
    }

    // error managenemt for the username
    const [isPasswordError, setPasswordError] = useState(false)

    // error massage
    const [isErr, setError] = useState(false)
    const [errMessage, setErrMessage] = useState(false)

    // props attributes
    const {setLoading} = props;

    // toggle siwtch the loading component
    useEffect(() => {
        setLoading(false);
    },[])

    // onSubmit
    const signin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (username.length && password.length)
        {
            axios.post(
                'http://localhost:8000/api/_/sign-in',
                {
                    user_name: username,
                    password: password,
                }
            ).then((response) => {
                if (response.status === 202)
                    document.cookie = response.data.cookie;
            }).catch((error) => {
                console.log(error);

                onOpen()
                setError(true)
                setErrMessage(error.response.data.detail)
            })
        }
        else {
            if (!username.length) setUsernameError(true)
            if (!password.length) setPasswordError(true)
        }
    }

	return (
		<Flex
            bg="gray.200"
            w="100vw"
            h="100vh"
            justifyContent="center"
            alignItems="center"
            p={5}

        >
            <Flex
                flexDir="column"
                justifyContent="space-between"
                bg="white"
                p={5}
                borderRadius="3xl"
                boxShadow="xl"
                maxW={400}
                maxH={500}
                w={400}
                h={500}

            >
                {
                    isErr &&
                    <ScaleFade initialScale={0.9} in={isOpen}>
                        <Alert status='error' borderRadius="full">
                          <AlertIcon />
                          <AlertTitle>{errMessage}</AlertTitle>
                        </Alert>
                    </ScaleFade>
                }
                <Flex
                    grow={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading
                        as="h2"
                        size="lg"
                        fontWeight="light"
                        color="primary"
                        textAlign="center"
                        lineHeight={1.2}
                    >
                        Sign In
                    </Heading>
                </Flex>
                <form
                    onSubmit={signin}
                >
                    <VStack spacing={5}>
                        <FormControl isInvalid={isUsernameError}>
                            <FormLabel htmlFor='username'>Username</FormLabel>
                            <Input
                                id='username'
                                type='text'
                                value={username}
                                onChange={handleUsernameChange}
                                borderRadius="full"
                            />
                            {isUsernameError && <FormErrorMessage>Username is required.</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isPasswordError}>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input
                                id='password'
                                type='password'
                                value={password}
                                onChange={handlePasswordChange}
                                borderRadius="full"
                            />
                            {isPasswordError && <FormErrorMessage>Password is required.</FormErrorMessage>}
                        </FormControl>
                        <Button
                            bg="primary"
                            color="white"
                            fontWeight="light"
                            borderRadius="full"
                            type="submit"
                            w="100%"
                            _hover={{backgroundColor:"match", color:"primary"}}
                        >
                            Sign in
                        </Button>
                    </VStack>
                </form>
            </Flex>
		</Flex>
	)
}
