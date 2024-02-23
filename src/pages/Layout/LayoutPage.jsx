import { Flex, Box, Spinner } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/Navbar'

const LayoutPage = ({ children }) => {

    const { pathname } = useLocation()
    const [user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/login' && user;
    const canRenderNavbar = !user && !loading && pathname !== '/login'

    const isUserAuthenticated = !user && loading
    if(isUserAuthenticated) return <PageLayoutSpinner />

    return (
        <Flex flexDirection={canRenderNavbar ? 'column' : 'row'}>
            {/* render the sidebard except in the loginpage */}
            {canRenderSidebar ? (
                <Box w={{ base: '4.5rem', md: '15rem' }}>
                    <Sidebar />
                </Box>
            ) : null}
            {canRenderNavbar && <Navbar />}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx='auto'>
                {children}
            </Box>
        </Flex>
    )
}

export default LayoutPage

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};