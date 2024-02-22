import { useEffect, useState } from 'react'
import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from '@chakra-ui/react'
import Post from './Post'
import imgPostOne from '/imgpost1.png'
import imgPostTwo from '/img2.png'
import imgPostThree from '/img3.png'

const Posts = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])

    return (
        <Container maxW={'container.sm'} py={10} px={2}>
            {isLoading ? [0, 1, 2, 3].map((item, index) => (
                <VStack key={index} alignItems='flex-start' gap={4} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack alignItems='flex-start' gap={2}>
                            <Skeleton height='.7rem' w='9rem' />
                            <Skeleton height='.7rem' w='6rem' />
                        </VStack>
                    </Flex>
                    <Skeleton w='full'>
                        <Box h='500px'>wrapped content</Box>
                    </Skeleton>
                </VStack>
            )) : (
                <>
                    <Post username='Dan Abrahmov' img={imgPostOne} avatar='https://bit.ly/dan-abramov' />
                    <Post username='Kola Tioluwani' img={imgPostTwo} avatar='https://bit.ly/prosper-baba' />
                    <Post username='Kent Dodds' img={imgPostThree} avatar='https://bit.ly/ryan-florence' />
                </>
            )}
        </Container>
    )
}

export default Posts