import { Tooltip, Link as ChakLink, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";

const Home = () => {
    return (
        <>
            <Tooltip
                hasArrow
                label="Home"
                placement='right'
                openDelay={300}
                display={{ base: 'block', md: 'none' }}
                ml={1}
            >
                <ChakLink
                    display={'flex'}
                    to='/'
                    as={Link}
                    alignItems={'center'}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    gap={4}
                    borderRadius={5}
                    p={2}
                    w={{ base: 10, md: 'full' }}
                    _hover={{ bg: '#DBDBDB' }}
                >
                    <MdHomeFilled size={25} />
                    <Box display={{ base: 'none', md: 'block' }}>
                        Home
                    </Box>
                </ChakLink>
            </Tooltip>
        </>
    )
}

export default Home