import { Flex, AvatarGroup, Avatar, VStack, Text } from '@chakra-ui/react'
import profilePic from '/img2.png'

const ProfileHeader = () => {
  return (
    <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 4, sm: 10 }} py={10}>
      <AvatarGroup size={{ base: 'xl', md: '2xl' }} justifySelf='center' alignSelf='flex-start' mx='auto'>
        <Avatar name='Kurtlo' src={profilePic} alignItems='Profile Picture' />
      </AvatarGroup>
      <VStack alignItems='start' gap={2} mx='auto' flex={1}>
        <Flex gap={4} direction={{ base: 'column ', sm: 'row' }} justifyContent={{ base: 'center', sm: 'flex-start' }} alignItems='center' w='full'>
          <Text color='#00000' fontSize={{ base: 'sm', md: 'lg'}}>
            Kurtlo_
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader