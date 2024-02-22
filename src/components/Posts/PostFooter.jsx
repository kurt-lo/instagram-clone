import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/images'

const PostFooter = ({ username }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(10);

    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false);
            setTotalLikes(totalLikes - 1);
        } else {
            setIsLiked(true);
            setTotalLikes(totalLikes + 1);
        }
    }

    return (
        <>
            <Box my={4}>
                <Flex alignItems='center' gap={4} w='full' pt={0} my={2}>
                    <Box onClick={handleLike} cursor='pointer'>
                        {!isLiked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
                    </Box>
                    <Box>
                        <CommentLogo cursor='pointer' />
                    </Box>
                </Flex>
                <Text fontSize={14} fontWeight={600}>
                    {totalLikes} likes
                </Text>
                <Text fontSize={14} fontWeight={600}>
                    {username}{" "}
                    <Text as='span' fontWeight={400}>
                        Feeling good
                    </Text>
                </Text>
                <Text fontSize={14} color='#737373'>
                    View all 100 comments
                </Text>
                <Flex alignItems='center' justifyContent='space-between' gap={2} w='full'>
                    <InputGroup>
                        <Input fontSize={14} color='#737373' variant='flushed' placeholder='Add a comment...' />
                        <InputRightElement>
                            <Button fontSize={14} color='#737373' bg='transparent' _hover={{ color: '#DBDBDB' }}>Post</Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Box>
        </>
    )
}

export default PostFooter