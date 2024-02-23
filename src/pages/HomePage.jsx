import { Container, Flex, Box } from '@chakra-ui/react'
import Posts from '../components/Posts/Posts'
import SuggestedUsers from '../components/Suggestion/SuggestedUsers'

const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={'4rem'} py={10}>
        <Box flex={2} py={10}>
          <Posts />
        </Box>
        <Box flex={3} display={{ base: 'none', lg: 'block' }} maxW={'19rem'} mr={20}>
          {/* <SuggestedUsers /> */}
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage