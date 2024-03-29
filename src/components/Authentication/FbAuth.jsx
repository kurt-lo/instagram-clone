import { Flex, Image, Text } from '@chakra-ui/react'
import fbLogo from '/fblogo.png'
import { auth, firestore } from '../../firebase';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth'
import useShowToast from '../../hooks/useShowToast';
import useAuthStore from '../../store/authStore';
import { doc, setDoc } from 'firebase/firestore';

const FbAuth = ({ prefix }) => {

    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const showToast = useShowToast()
    const loginUser = useAuthStore(state => state.login)

    const fbAuthHandler = async () => {
        try {
            const newUser = await signInWithFacebook()
            if (!newUser && error) {
                showToast('Error', error.message, 'error')
            }
            if (newUser) {
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
                onClick={fbAuthHandler}
            >
                <Image src={fbLogo} w={4} h={4} alt='Google logo' />
                <Text mx={2} color={'#385185'} fontSize={14} fontWeight={500}>
                    {prefix} with Facebook
                </Text>
            </Flex>
        </>
    )
}

export default FbAuth