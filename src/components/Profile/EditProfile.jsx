import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../store/authStore";
import usePreviewImage from "../../hooks/usePreviewImage";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";

const EditProfile = ({ isOpen, onClose }) => {

    const [inputForm, setInputForm] = useState({
        fullName: '',
        username: '',
        bio: '',
    })

    const authUser = useAuthStore(state => state.user)
    const fileRef = useRef(null)

    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImage()
    const { isLoading, editProfile } = useEditProfile()
    const showToast = useShowToast()

    const handleEditProfile = async () => {
        try {
            await editProfile(inputForm, selectedFile)
            setSelectedFile(null)
            onClose()
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={'white'} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg='white'>
							<Stack spacing={4} w={"full"} maxW={"md"} bg='white' p={4} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "xl", sm: "2xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar size='xl' src={selectedFile || authUser.profilePicURL} border={"2px solid white "} />
										</Center>
										<Center w='full'>
											<Button w='full' bg='#DBDBDB' size='sm' onClick={() => fileRef.current.click()}>Change Profile Picture</Button>
										</Center>
                                        <Input type="file" hidden ref={fileRef} onChange={handleImageChange} />
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input placeholder={"Full Name"} size={"sm"} type={"text"} value={inputForm.fullName || authUser.fullName} onChange={(e) => setInputForm({...inputForm, fullName: e.target.value})} />
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input placeholder={"Username"} size={"sm"} type={"text"} value={inputForm.username || authUser.username} onChange={(e) => setInputForm({...inputForm, username: e.target.value})} />
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Bio</FormLabel>
									<Input placeholder={"Bio"} size={"sm"} type={"text"} value={inputForm.bio || authUser.bio} onChange={(e) => setInputForm({...inputForm, bio: e.target.value})} />
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
                                        onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
                                        isLoading={isLoading}
                                        onClick={handleEditProfile}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;