import { Flex, Avatar, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import profilePic from '/profilepic.png'

const SuggestedHeader = () => {
    return (
        <Flex justifyContent='space-between' alignItems='center' w='full'>
            <Flex alignItems='center' gap={2}>
                <Avatar name='Kurtlo' size='sm' src={profilePic} w='full'>
                    <Text fontSize={12} fontWeight={600} ml={2}>
                        Kurtlo
                    </Text>
                </Avatar>
            </Flex>
            <ChakraLink as={Link} to='/auth'
                fontSize={14}
                fontWeight={700}
                color='blue.400'
                cursor='pointer'
            >
                Log out
            </ChakraLink>
        </Flex>
    )
}

export default SuggestedHeader