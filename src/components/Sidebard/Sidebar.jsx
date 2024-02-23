import { Box, Flex, Link as ChakLink, Avatar, Tooltip, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { InstagramMobileLogo, InstagramLogo, SearchLogo, NotificationsLogo, CreatePostLogo } from '../../assets/images'
import { MdHomeFilled } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from '../../hooks/useLogout';
import SidebarItem from './SidebarItem';

const Sidebar = () => {

    const {handleLogout, isLoggingOut } = useLogout();

    return (
        <Box h={'100vh'} borderRight={'1px solid #DBDBDB'} position={'sticky'} top={0} left={0} py={8} px={{ base: 2, md: 4 }}>
            <Flex direction={'column'} gap={10} w={'full'} h={'full'} cursor='pointer'>
                <ChakLink top='/' as={Link} pl={2} cursor={'pointer'} display={{ base: 'none', md: 'block' }}>
                    <InstagramLogo />
                </ChakLink>
                <ChakLink top='/' as={Link} w={{ base: 10 }} pl={2} cursor={'pointer'} display={{ base: 'block', md: 'none' }} borderRadius={6} _hover={{ bg: 'whiteAplha.200' }}>
                    <InstagramMobileLogo />
                </ChakLink>
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    <SidebarItem />
                </Flex>
                <Tooltip
                    hasArrow
                    label={'Logout'}
                    placement='right'
                    openDelay={300}
                    display={{ base: 'block', md: 'none' }}
                    ml={1}
                >
                    <Flex
                        onClick={handleLogout}
                        alignItems={'center'}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        gap={4}
                        borderRadius={5}
                        p={2}
                        w={{ base: 10, md: 'full' }}
                        mt={'auto'}
                        _hover={{ bg: '#DBDBDB' }}
                    >
                        <IoLogOutOutline size={25} />
                        <Button variant="unstyled" display={{ base: 'none', md: 'block' }}
                            isLoading={isLoggingOut}
                        >
                            Logout
                        </Button>
                    </Flex>
                </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar