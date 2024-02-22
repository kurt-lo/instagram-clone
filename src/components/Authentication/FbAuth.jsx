import { Flex, Image, Text } from '@chakra-ui/react'
import fbLogo from '/fblogo.png'

const FbAuth = () => {
    return (
        <>
            <Flex alignItems={'center'} cursor={'pointer'}>
                <Image src={fbLogo} w={4} h={4} alt='Google logo' />
                <Text mx={2} color={'#385185'} fontSize={14} fontWeight={500}>Log in with Facebook</Text>
            </Flex>
        </>
    )
}

export default FbAuth