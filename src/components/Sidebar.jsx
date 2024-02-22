import { Box, Flex, Link as ChakLink, Avatar, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { InstagramMobileLogo, InstagramLogo, SearchLogo, NotificationsLogo, CreatePostLogo } from '../assets/images'
import { MdHomeFilled } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {

    const sideBarItems = [
        {
            id: 1,
            icon: <MdHomeFilled size={25} />,
            text: "Home",
            link: '/',
        },
        {
            id: 2,
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            id: 3,
            icon: <NotificationsLogo />,
            text: "Notifications",
        },
        {
            id: 4,
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            id: 5,
            icon: <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' size={'xs'} />,
            text: "Profile",
            link: '/kurtlo',
        }
    ]

    return (
        <Box h={'100vh'} borderRight={'1px solid #DBDBDB'} position={'sticky'} top={0} left={0} py={8} px={{ base: 2, md: 4 }}>
            <Flex direction={'column'} gap={10} w={'full'} h={'full'}>
                <ChakLink top='/' as={Link} pl={2} cursor={'pointer'} display={{ base: 'none', md: 'block' }}>
                    <InstagramLogo />
                </ChakLink>
                <ChakLink top='/' as={Link} w={{ base: 10 }} pl={2} cursor={'pointer'} display={{ base: 'block', md: 'none' }} borderRadius={6} _hover={{ bg: 'whiteAplha.200' }}>
                    <InstagramMobileLogo />
                </ChakLink>
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    {sideBarItems.map((item) => (
                        <Tooltip
                            key={item.id}
                            hasArrow
                            label={item.text}
                            placement='right'
                            openDelay={300}
                            display={{ base: 'block', md: 'none' }}
                            ml={1}
                        >
                            <ChakLink
                                display={'flex'}
                                to={item.link || null}
                                as={Link}
                                alignItems={'center'}
                                justifyContent={{ base: 'center', md: 'flex-start' }}
                                gap={4}
                                borderRadius={5}
                                p={2}
                                w={{ base: 10, md: 'full' }}
                                _hover={{ bg: '#DBDBDB' }}
                            >
                                {item.icon}
                                <Box display={{ base: 'none', md: 'block' }}>
                                    {item.text}
                                </Box>
                            </ChakLink>
                        </Tooltip>
                    ))}
                </Flex>
                <Tooltip
                    hasArrow
                    label={'Logout'}
                    placement='right'
                    openDelay={300}
                    display={{ base: 'block', md: 'none' }}
                    ml={1}
                >
                    <ChakLink
                        display={'flex'}
                        to='/login'
                        as={Link}
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
                        <Box display={{ base: 'none', md: 'block' }}>
                            Logout
                        </Box>
                    </ChakLink>
                </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar