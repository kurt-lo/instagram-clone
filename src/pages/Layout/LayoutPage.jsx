import { Flex, Box } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import { useLocation } from 'react-router-dom'

const LayoutPage = ({ children }) => {

    const { pathname } = useLocation()

    return (
        <Flex>
            {/* render the sidebard except in the loginpage */}
            {pathname !== '/login' ? (
                <Box w={{ base: '4.5rem', md: '15rem' }}>
                    <Sidebar />
                </Box>
            ) : null}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}

export default LayoutPage