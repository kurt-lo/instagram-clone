import { auth, firestore } from "../firebase"
import useShowToast from "./useShowToast"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from 'firebase/firestore'
import useAuthStore from "../store/authStore"

const useLogin = () => {
    const showToast = useShowToast()
    const [
        signInWithEmailAndPassword,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth)

    const loginUser = useAuthStore(state => state.login)

    const login = async (inputForm) => {
        if (!inputForm.email || !inputForm.password) {
            return showToast('Error', 'Please provide all the fields!', 'error')
        }
        try {
            const userCredential = await signInWithEmailAndPassword(inputForm.email, inputForm.password)
            if (userCredential) {
                const docRef = doc(firestore, 'users', userCredential.user.uid)
                const docSnap = await getDoc(docRef)
                localStorage.setItem('user-info-ig-clone', JSON.stringify(docSnap.data()))
                loginUser(docSnap.data())
            } else {
                showToast('Error', 'Invalid username or password', 'error')
            }
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

    return {
        loading,
        error,
        login
    }
}

export default useLogin