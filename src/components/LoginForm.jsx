import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import igLogo from '/logo.png'
import fbLogo from '/fblogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true)
    const [inputForm, setInputForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [errorInput, setErrorInput] = useState(false);

    const authenticationHandler = (e) => {
        // console.log('inputs', inputForm)
        e.preventDefault();
        if (!inputForm.email || !inputForm.password) {
           setErrorInput(true);
           return;
        }

        navigate('/')
    }

    return (
        <>
            <Box border={'1px solid #DBDBDB'} maxW={'sm'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src={igLogo} alt='instagram logo' cursor={'pointer'} />
                    <Input
                        value={inputForm.email}
                        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
                        placeContent='Email'
                        type='email'
                        placeholder='Email'
                        fontSize={14}
                        onKeyDown={() => setErrorInput(false)} // para mawala yung errorInput kapag nag type ulit yung user
                    />
                    <Input
                        value={inputForm.password}
                        onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                        placeContent='Password'
                        type='password' placeholder='Password'
                        onKeyDown={() => setErrorInput(false)}
                        fontSize={14}
                    />
                    {!isLogin && (
                        <Input
                            value={inputForm.confirmPassword}
                            onChange={(e) => setInputForm({ ...inputForm, confirmPassword: e.target.value })}
                            placeContent='Confirm Password'
                            type='password'
                            placeholder='Confirm Password'
                            fontSize={14}
                            onKeyDown={() => setErrorInput(false)}
                        />)}
                    <Button
                        colorScheme='blue'
                        w={'full'} size={'sm'}
                        fontSize={14}
                        onClick={authenticationHandler}
                    >
                        {isLogin ? 'Login' : 'Sign up'}
                    </Button>
                    {errorInput && <Text fontSize={14}>Please input all the fields!</Text>}
                    <Flex alignItems={'center'} justifyContent={'center'} w={'full'} my={5} gap={1}>
                        <Box flex={2} h={'1px'} bg={'#DBDBDB'} />
                        <Text mx={5} fontSize={13} color={'gray.500'}>OR</Text>
                        <Box flex={2} h={'1px'} bg={'#DBDBDB'} />
                    </Flex>
                    <Flex alignItems={'center'} cursor={'pointer'}>
                        <Image src={fbLogo} w={4} h={4} alt='Google logo' />
                        <Text mx={2} color={'#385185'} fontSize={14} fontWeight={500}>Log in with Facebook</Text>
                    </Flex>
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