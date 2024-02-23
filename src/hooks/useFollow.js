import { useEffect, useState } from "react"
import useAuthStore from "../store/authStore"
import useUserProfileStore from "../store/userProfileStore"
import useShowToast from "./useShowToast"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { firestore } from "../firebase"

const useFollow = (userId) => {

    const [isLoading, setIsLoading] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const authUser = useAuthStore(state => state.user)
    const setAuthUser = useAuthStore(state => state.setUser)
    const userProfile = useUserProfileStore(state => state.userProfile)
    const setUserProfile = useUserProfileStore(state => state.setUserProfile)
    const showToast = useShowToast()

    const handleFollowUser = async () => {
        setIsLoading(true)
        try {
            const currentUserRef = doc(firestore, 'users', authUser.uid)
            const userToFollowOrUnfollowRef = doc(firestore, 'users', userId)

            await updateDoc(currentUserRef, {
                // array remove and arrayunion from firebase
                // array remove remove the follow, arrayunion add the follow 
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
            })
            await updateDoc(userToFollowOrUnfollowRef, {
                followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
            })

            if (isFollowing) {
                //unfollow
                setAuthUser({
                    ...authUser,
                    following: authUser.following.filter(uid => uid !== userId)
                })
                setUserProfile({
                   ...userProfile,
                   followers: userProfile.followers.filter(uid => uid !== authUser.uid) 
                })

                localStorage.setItem('user-info-ig-clone', JSON.stringify({
                    ...authUser,
                    following: authUser.following.filter(uid => uid !== userId)
                }))
                setIsFollowing(false)
            } else {
                //follow
                setAuthUser({
                    ...authUser,
                    following: [...authUser.following, userId]
                })
                setUserProfile({
                    ...userProfile,
                    followers: [...userProfile.followers, authUser.uid]
                })

                localStorage.setItem('user-info-ig-clone', JSON.stringify({
                    ...authUser,
                    following: [...authUser.following, userId]
                }))

                setIsFollowing(true)
            }

        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (authUser) {
            const isFollowing = authUser.following.includes(userId)
            setIsFollowing(isFollowing)
        }
    }, [authUser, userId])

    return {
        isLoading,
        isFollowing,
        handleFollowUser
    }
}

export default useFollow