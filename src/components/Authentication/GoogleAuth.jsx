import { Flex, Image, Text } from '@chakra-ui/react'
import googleLogo from '/google.png'
import { auth, firestore } from '../../firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import useShowToast from '../../hooks/useShowToast';
import useAuthStore from '../../store/authStore';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const GoogleAuth = ({ prefix }) => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login)    

    const googleAuthHandler = async () => {
        try {
            const newUser = await signInWithGoogle()
            if (!newUser && error) {
                showToast('Error', error.message, 'error')
                return
            }

            const userRef = doc(firestore, 'users', newUser.user.uid)
            const userSnap = await getDoc(userRef)

            if (userSnap.exists()) {
                // login the user if it exists
                const userDocument = userSnap.data()
                localStorage.setItem('user-info-ig-clone', JSON.stringify(userDocument))
                loginUser(userDocument)
            } else {
                // register the user if new
                const userDocument = {
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    username: newUser.user.email.split('@')[0],
                    fullName: newUser.user.displayName,
                    bio: '',
                    profilePicURL: newUser.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
                localStorage.setItem("user-info-ig-clone", JSON.stringify(userDocument));
                loginUser(userDocument)
            }
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

    return (
        <>
            <Flex alignItems={'center'} cursor={'pointer'}
                onClick={googleAuthHandler}
            >
                <Image src={googleLogo} w={4} h={4} alt='Google logo' />
                <Text mx={2} color={'#385185'} fontSize={14} fontWeight={500}>
                    {prefix} with Google
                </Text>
            </Flex>
        </>
    )
}

export default GoogleAuth