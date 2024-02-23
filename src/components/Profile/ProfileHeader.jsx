import { Flex, AvatarGroup, Avatar, VStack, Text, Button, useDisclosure } from '@chakra-ui/react'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'
import EditProfile from './EditProfile'

const ProfileHeader = () => {

  const userProfile = useUserProfileStore(state => state.userProfile)
  const authUser = useAuthStore(state => state.user)
  const visitingOwnProfileAndAuthenticated = authUser && authUser.username === userProfile.username
  const visitingAnotherProfileAndAuthenticated = authUser && authUser.username !== userProfile.username

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 4, sm: 10 }} py={10}>
      <AvatarGroup size={{ base: 'xl', md: '2xl' }} justifySelf='center' alignSelf='flex-start' mx='auto'>
        <Avatar src={userProfile.profilePicURL} alignItems='Profile Picture' />
      </AvatarGroup>
      <VStack alignItems='start' gap={2} mx='auto' flex={1}>
        {visitingOwnProfileAndAuthenticated && (
          <Flex gap={4} direction={{ base: 'column ', sm: 'row' }} justifyContent={{ base: 'center', sm: 'flex-start' }} alignItems='center' w='full'>
            <Text color='#00000' fontSize={{ base: 'sm', md: 'lg' }}>
              {userProfile.username}
            </Text>
            <Flex alignItems='center' justifyContent='center' gap={4}>
              <Button bg='#DBDBDB' color='black' size={{ base: 'xs', md: 'sm' }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          </Flex>
        )}
        {visitingAnotherProfileAndAuthenticated && (
          <Flex gap={4} direction={{ base: 'column ', sm: 'row' }} justifyContent={{ base: 'center', sm: 'flex-start' }} alignItems='center' w='full'>
            <Text color='#00000' fontSize={{ base: 'sm', md: 'lg' }}>
              {userProfile.username}
            </Text>
            <Flex alignItems='center' justifyContent='center' gap={4}>
              <Button bg='#DBDBDB' color='black' size={{ base: 'xs', md: 'sm' }}>
                Follow
              </Button>
            </Flex>
          </Flex>
        )}
        <Flex alignItems='center' gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as='span' fontWeight={600} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>
          <Text>
            <Text as='span' fontWeight={600} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>
          <Text>
            <Text as='span' fontWeight={600} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems='center' gap={4}>
          <Text fontSize='sm' fontWeight='bold'>
            {userProfile.fullName}
          </Text>
        </Flex>
        <Text fontSize='sm'>
          {userProfile.bio}
        </Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

export default ProfileHeader