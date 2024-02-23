import { Flex, Avatar, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'

const SuggestedHeader = () => {

    const { handleLogout, isLoggingOut } = useLogout()
    const authUser = useAuthStore(state => state.user)

    if (!authUser) return null;

    return (
        <Flex justifyContent='space-between' alignItems='center' w='full'>
            <Flex alignItems='center' gap={2}>
                <Link to={`${authUser.username}`}>
                    <Avatar name={authUser.username} size='sm' src={authUser.profilePicURL} />
                </Link>
                <Link to={`${authUser.username}`}>
                    <Text fontSize={12} fontWeight={600}>
                        {authUser.username}
                    </Text>
                </Link>
            </Flex>
            <Button
                onClick={handleLogout}
                isLoading={isLoggingOut}
                size='xs'
                variant='unstyled'
                fontSize={14}
                fontWeight={700}
                color='blue.400'
                cursor='pointer'
            >
                Log out
            </Button>
        </Flex>
    )
}

export default SuggestedHeader