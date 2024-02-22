import { Flex, Avatar, Text } from '@chakra-ui/react'

const Comment = ({ createdAt, username, profilepic, text }) => {
    return (
        <Flex gap={4}>
            <Avatar size='sm' src={profilepic} name={username} />
            <Flex direction='column'>
                <Flex gap={2}>
                    <Text fontSize={12} fontWeight='bold'>
                        {username}
                    </Text>
                    <Text fontSize={14}>
                        {text}
                    </Text>
                </Flex>
                <Text fontSize={12}>
                    {createdAt}
                </Text>
            </Flex>
        </Flex>
    )
}

export default Comment