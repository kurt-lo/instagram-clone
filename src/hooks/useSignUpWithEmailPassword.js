import { auth, firestore } from "../firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from '../store/authStore'

const useSignUpWithEmailPassword = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();

    const isUserLoggedIn = useAuthStore(state => state.login);

    const signup = async (inputForm) => {
        if (!inputForm.email || !inputForm.password || !inputForm.username || !inputForm.fullName) {
            showToast('Error', 'Please provide all of the fields!', 'error')
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputForm.email, inputForm.password);
            if (!newUser && error) {
                showToast('Error', error.message, 'error')
                return;
            }
            if (newUser) {
                const userDocument = {
                    uid: newUser.user.uid,
                    email: inputForm.email,
                    username: inputForm.username,
                    fullName: inputForm.fullName,
                    bio: '',
                    profilePicURL: '',
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
                localStorage.setItem("user-info-ig-clone", JSON.stringify(userDocument));
                isUserLoggedIn(userDocument)
            }
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

    return {
        loading,
        error,
        signup
    }
}

export default useSignUpWithEmailPassword