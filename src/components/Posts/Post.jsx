import { Box, Image } from '@chakra-ui/react'
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

const Post = ({ username, img, avatar }) => {
    return (
        <>
            <PostHeader username={username} avatar={avatar} />
            <Box my={2}>
                <Image src={img} borderRadius={3} alt='post picture' />
            </Box>
            <PostFooter username={username} />
        </>
    )
}

export default Post