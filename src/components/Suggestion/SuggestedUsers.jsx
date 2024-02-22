import { VStack, Flex, Text, Box } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={7} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems='center' justifyContent='space-between' w='full'>
            <Text fontSize={14} fontWeight={700} color='#737373'>
                Suggested for you
            </Text>
            <Text fontSize={12} cursor='pointer' _hover={{ color: '#737373' }}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name='John Doe' followers={100} avatar='https://bit.ly/dan-abramov' />
        <SuggestedUser name='John Doe' followers={100} avatar='https://bit.ly/dan-abramov' />
        <SuggestedUser name='John Doe' followers={100} avatar='https://bit.ly/dan-abramov' />
        <Box fontSize={12} color='#777777' mt={5} alignSelf='start'>
            © 2024 INSTAGRAM FROM META
        </Box>
    </VStack>
  )
}

export default SuggestedUsers