import { Container, Flex, Link as ChakraLink, Text, SkeletonCircle, VStack, Skeleton } from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import { useParams, Link } from 'react-router-dom'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'

const ProfilePage = () => {

  const { username } = useParams()
  const { isLoading, userProfile } = useGetUserProfileByUsername(username)

  if (!isLoading && !userProfile) {
    return <UserNotFound />
  }

  return (
    <Container maxW='container.lg' py={5}>
      <Flex flexDirection='column' py={10} px={4} pl={{ base: 4, md: 10 }} maxW='full' mx='auto'>
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex px={{ base: 2, sm: 4 }} maxW='full' mx='auto' borderTop='1px solid #DBDBDB' direction='column'>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  )
}

export default ProfilePage

const UserNotFound = () => {
  return (
    <Flex flexDir='column' textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <ChakraLink as={Link} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
        Go home
      </ChakraLink>
    </Flex>
  );
};

// skeleton for profile header
const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size='24' />

      <VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
        <Skeleton height='12px' width='150px' />
        <Skeleton height='12px' width='100px' />
      </VStack>
    </Flex>
  );
};