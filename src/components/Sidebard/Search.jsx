import { Button, ModalHeader, Input, ModalBody, FormControl, ModalCloseButton, Box, Flex, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/images";
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from '../Suggestion/SuggestedUser'

const Search = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, isLoading, getUserProfile, setUser } = useSearchUser()
    const searchRef = useRef(null)

    const handleSearchUser = (e) => {
        e.preventDefault()
        getUserProfile(searchRef.current.value)
    }

    // console.log(user)

    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
                >
                    <SearchLogo />
                    <Box display={{ base: "none", md: "block" }}>Search</Box>
                </Flex>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
                <ModalOverlay />
                <ModalContent maxW='25rem' border='1px solid gray' >
                    <ModalHeader>Search</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                {/* <FormLabel>Username</FormLabel> */}
                                <Input placeholder='Search' ref={searchRef} />
                                <Flex w='full' justifyContent='flex-end'>
                                    <Button type="submit" ml='auto' mt={4} size='sm' isLoading={isLoading}>
                                        Search
                                    </Button>
                                </Flex>
                            </FormControl>
                        </form>
                        {user && <SuggestedUser user={user} setUser={setUser} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Search;