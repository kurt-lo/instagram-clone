import { auth } from '../firebase/index'
import { useSignOut } from 'react-firebase-hooks/auth'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore';

const useLogout = () => {

    const [signOut, isLoggingOut] = useSignOut(auth);
    const showToast = useShowToast();
    const userLoggedOut = useAuthStore(state => state.logout)

    const handleLogout = async () => {
        try {
            await signOut()
            localStorage.removeItem('user-info-ig-clone')
            userLoggedOut()
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

    return { handleLogout, isLoggingOut }
}

export default useLogout