import { create } from 'zustand'

const useUserProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile: userProfile }),
    // addPost: ()
}))

export default useUserProfileStore