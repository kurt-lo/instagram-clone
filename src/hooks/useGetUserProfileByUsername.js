import { useEffect, useState } from "react"
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase"
import useUserProfileStore from '../store/userProfileStore'

const useGetUserProfileByUsername = (username) => {
    const [isLoading, setIsLoading] = useState(true)
    const showToast = useShowToast()
    const userProfile = useUserProfileStore(state => state.userProfile)
    const setUserProfile = useUserProfileStore(state => state.setUserProfile)

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true)
            try {
                const q = query(collection(firestore, 'users'), where('username', '==', username))
                const querySnapshot = await getDocs(q)

                if (querySnapshot.empty) return setUserProfile(null)
                
                let userDocument;
                querySnapshot.forEach((doc) => {
                    userDocument = doc.data()
                })
                setUserProfile(userDocument)
                // console.log(userDocument)
            } catch (error) {
                showToast('Error', error.message, 'error')
            } finally {
                setIsLoading(false)
            }
        }

        getUserProfile()
    }, [setUserProfile, username, showToast])

    return {
        isLoading,
        userProfile
    }
}

export default useGetUserProfileByUsername