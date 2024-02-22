import { Flex, Container, Box, Image, VStack, Link } from '@chakra-ui/react'
import loginImage from '/loginImage.png'
import playstore from '/playstore.png'
import microsoft from '/microsoft.png'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} padding={0}>
            <Container maxW={'container.md'} padding={0}>
                <Flex alignItems={'center'} justifyContent={'center'} gap={6}>
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Image src={loginImage} alt='girl and boy hanging out' />
                    </Box>
                    <VStack spacing={3} align={'stretch'}>
                        <LoginForm />
                        <Box textAlign={'center'} fontSize={14}>Get the app.</Box>
                        <Flex justifyContent={'center'} gap={2}>
                            <Link href='https://play.google.com/store/apps/details?id=com.instagram.android' target='_blank'>
                                <Image src={playstore} h={'10'} alt='playstore logo' />
                            </Link>
                            <Link href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-7%2C0%2C1230%2C1039' target='_blank'>
                                <Image src={microsoft} h={'10'} alt='microsoft logo' />
                            </Link>
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default LoginPage