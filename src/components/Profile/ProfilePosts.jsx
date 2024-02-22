import { Grid, VStack, Skeleton, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import post from '/img2.png'

const ProfilePosts = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])

    return (
        <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={1} columnGap={1}>
            {isLoading ? [0,1,2,3,4,5].map((item, index) => (
                <VStack key={index} alignItems='flex-start' gap={4}>
                    <Skeleton w='full'>
                        <Box h='19rem'>wrapped content</Box>
                    </Skeleton>
                </VStack>
            )): (
                <>
                    <ProfilePost img={post} />
                    <ProfilePost img={post} />
                    <ProfilePost img={post} />
                    <ProfilePost img={post} />
                </>
            )}
        </Grid>
    )
}

export default ProfilePosts