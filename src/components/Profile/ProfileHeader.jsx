import { Flex, AvatarGroup, Avatar, VStack, Text, Button } from '@chakra-ui/react'
import profilePic from '/img2.png'

const ProfileHeader = () => {
  return (
    <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 4, sm: 10 }} py={10}>
      <AvatarGroup size={{ base: 'xl', md: '2xl' }} justifySelf='center' alignSelf='flex-start' mx='auto'>
        <Avatar name='Kurtlo' src={profilePic} alignItems='Profile Picture' />
      </AvatarGroup>
      <VStack alignItems='start' gap={2} mx='auto' flex={1}>
        <Flex gap={4} direction={{ base: 'column ', sm: 'row' }} justifyContent={{ base: 'center', sm: 'flex-start' }} alignItems='center' w='full'>
          <Text color='#00000' fontSize={{ base: 'sm', md: 'lg' }}>
            Kurtlo_
          </Text>
          <Flex alignItems='center' justifyContent='center' gap={4}>
            <Button bg='#DBDBDB' color='black' size={{ base: 'xs', md: 'sm' }}>Edit Profile</Button>
          </Flex>
        </Flex>
        <Flex alignItems='center' gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as='span' fontWeight={600} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as='span' fontWeight={600} mr={1}>
              99
            </Text>
            Followers
          </Text>
          <Text>
            <Text as='span' fontWeight={600} mr={1}>
              99
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems='center' gap={4}>
          <Text fontSize='sm' fontWeight='bold'>
            Kurtlo
          </Text>
        </Flex>
        <Text fontSize='sm'>
          Description for the profile lorem ipsum
        </Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader