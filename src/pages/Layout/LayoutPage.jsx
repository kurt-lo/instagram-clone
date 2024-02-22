import { Flex, Box } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const LayoutPage = ({ children }) => {

    const { pathname } = useLocation()
    const [user, loading, error] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/login' && user;
    const canRenderNavbar = !user && !loading && pathname !== '/login'

    return (
        <Flex>
            {/* render the sidebard except in the loginpage */}
            {canRenderSidebar ? (
                <Box w={{ base: '4.5rem', md: '15rem' }}>
                    <Sidebar />
                </Box>
            ) : null}
            {canRenderNavbar && <Navbar />}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}

export default LayoutPage