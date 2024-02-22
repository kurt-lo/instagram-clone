import { Flex, Box, Avatar } from '@chakra-ui/react'

const PostHeader = ({ username, avatar }) => {
    return (
        <Flex justifyContent='space-between' alignItems='center' w='full' my={2}>
            <Flex alignItems='center' gap={2}>
                <Avatar src={avatar} size='xs' alt='user profile pic' />
                <Flex fontSize={12} fontWeight={700} gap={2}>
                    {username}
                    <Box color='#737373'>
                    • 1w
                    </Box>
                </Flex>
            </Flex>
            <Box fontSize={12} fontWeight={600} cursor='pointer' _hover={{ color: '#737373' }} transition='.2 ease-in-out'>
                Unfollow
            </Box>
        </Flex>
    )
}

export default PostHeader