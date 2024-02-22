import { Flex, Button, Avatar, VStack, Box } from '@chakra-ui/react'
import { useState } from 'react'

const SuggestedUser = ({ name, followers, avatar }) => {
  
    const [isFollowed, setIsFollowed] = useState(false)

    return (
    <Flex justifyContent='space-between' alignItems='center' w='full'>
        <Flex alignItems='center' gap={2}>
            <Avatar src={avatar} name={name} size='md' />
            <VStack spacing={2} alignItems='flex-start'>
                <Box fontSize={12} fontWeight={700} color='#00000'>
                    {name}
                </Box>
                <Box fontSize={11} fontWeight={700} color='#737373'>
                    {followers} followers
                </Box>
            </VStack>
        </Flex>
        <Button fontSize={13} bg='transparent' p={0} h='max-content' fontWeight='medium' color='#0095F6'
            onClick={() => setIsFollowed(prevState => !prevState)}
        >
            {isFollowed ? "Unfollow" : "Follow"}
        </Button>
    </Flex>
  )
}

export default SuggestedUser