import { useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { firestore, storage } from "../firebase/index"
import { doc, updateDoc } from "firebase/firestore"
import useUserProfileStore from "../store/userProfileStore"

const useEditProfile = () => {

    const [isLoading, setIsLoading] = useState(false)
    const authUser = useAuthStore(state => state.user)
    const setAuthUser = useAuthStore(state => state.setUser)
    const showToast = useShowToast()
    const setUserProfile = useUserProfileStore(state => state.setUserProfile)

    const editProfile = async (inputForm, selectedFile) => {
        if (isLoading || !authUser) {
            return
        }
        setIsLoading(true)

        const storageRef = ref(storage, `profilePics/${authUser.uid}`)
        const userDocumentRef = doc(firestore, 'users', authUser.uid)

        let URL = ''

        try {
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, 'data_url')
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`))
            }

            const updatedUser = {
                ...authUser,
                fullName: inputForm.fullName || authUser.fullName,
                username: inputForm.username || authUser.username,
                bio: inputForm.bio || authUser.bio,
                profilePicURL: URL || authUser.profilePicURL,
            }
            await updateDoc(userDocumentRef, updatedUser)
            localStorage.setItem('user-info-ig-clone', JSON.stringify(updatedUser))
            setAuthUser(updatedUser)
            setUserProfile(updatedUser)
            showToast('Success', 'Profile updated successfully!', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

    return {
        editProfile,
        isLoading
    }

}

export default useEditProfile