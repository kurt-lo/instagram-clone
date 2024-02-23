import { useState } from "react"
import useShowToast from "./useShowToast"


const usePreviewImage = () => {

    const [selectedFile, setSelectedFile] = useState(null)
    const showToast = useShowToast()
    const maxFileSize = 2 * 1024 * 1024 // 2mb

    const handleImageChange = (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        if (file && file.type.startsWith("image/")) {
            if (file.size > maxFileSize) {
                showToast('Error', 'File size must be less than 2mb', 'error')
                selectedFile(null)
                return
            }
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedFile(reader.result)
            }
            reader.readAsDataURL(file)
        } else {
            showToast('Error', 'Please select an image file', 'error')
            selectedFile(null)
        }
    }

    return {
        selectedFile,
        handleImageChange,
        setSelectedFile
    }
}

export default usePreviewImage