import { Box, VStack, Image, Flex, Text } from '@chakra-ui/react'
import igLogo from '/logo.png'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import GoogleAuth from './GoogleAuth'

const LoginForm = () => {

    const [isLogin, setIsLogin] = useState(true)
    // const [errorInput, setErrorInput] = useState(false);

    return (
        <>
            <Box border={'1px solid #DBDBDB'} maxW={'sm'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src={igLogo} alt='instagram logo' cursor={'pointer'} />
                    {/* {errorInput && <Text fontSize={14}>Please input all the fields!</Text>} */}
                    
                    {isLogin ? <Login /> : <Register />}
                    
                    <Flex alignItems={'center'} justifyContent={'center'} w={'full'} my={5} gap={1}>
                        <Box flex={2} h={'1px'} bg={'#DBDBDB'} />
                        <Text mx={5} fontSize={13} color={'gray.500'}>OR</Text>
                        <Box flex={2} h={'1px'} bg={'#DBDBDB'} />
                    </Flex>
                    <GoogleAuth prefix={isLogin ? 'Log in' : 'Sign up'} />
                </VStack>
            </Box>
            <Box border={'1px solid #DBDBDB'} borderRadius={4} padding={5}>
                <Flex alignItems={'center'} justifyContent={'center'} gap={1}>
                    <Box fontSize={14}>
                        {isLogin ? "Dont't have an account?" : "Already have an account?"}
                    </Box>
                    <Box
                        color={'#0095D8'}
                        fontWeight={500}
                        fontSize={14}
                        cursor={'pointer'}
                        onClick={() => setIsLogin(prevState => !prevState)}
                    >
                        {isLogin ? 'Sign up' : 'Login'}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default LoginForm