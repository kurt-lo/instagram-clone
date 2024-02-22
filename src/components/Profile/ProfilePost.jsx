import { VStack, Avatar, Box, GridItem, Flex, Text, Image, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import profilePic from '/img2.png'
import Comment from '../Comment/Comment';
import PostFooter from '../Posts/PostFooter'

const ProfilePost = ({ img }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <GridItem borderRadius={4} position='relative' aspectRatio={1 / 1} overflow='hidden' cursor='pointer'
                onClick={onOpen}
            >
                <Flex position='absolute' justifyContent='center' opacity={0} top={0} left={0} right={0} bottom={0} bg='blackAlpha.700' transition='all 0.3s ease-in-out' zIndex={1} _hover={{ opacity: 1 }}>
                    <Flex alignItems='center' justifyContent='center' color='white' gap={50}>
                        <Flex>
                            <FaRegHeart size={20} />
                            <Text fontWeight={600} ml={2}>7</Text>
                        </Flex>
                        <Flex>
                            <FaRegComment size={20} />
                            <Text fontWeight={600} ml={2}>7</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Image src={img} w='full' h='full' objectFit='cover' alt='post' />
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: '3xl', md: '5xl' }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody p={0}>
                        <Flex w='full' mx='auto'>
                            <Box overflow='hidden' flex={1.5}>
                                <Image src={img} w='full' h='full' objectFit='cover' alt='post' />
                            </Box>
                            <Flex flex={1} flexDirection='column' py={4} pl={5} pr={10} display={{ base: 'none', md: 'flex' }}>
                                <Flex alignItems='center' justifyContent='space-between'>
                                    <Flex alignItems='center' gap={4}>
                                        <Avatar src={profilePic} size='sm' name='Kurtlo' />
                                        <Text fontWeight='bold' fontSize={12}>
                                            Kurtlo
                                        </Text>
                                    </Flex>
                                    <Box _hover={{ color: 'red' }}>
                                        <MdDeleteOutline size={20} cursor='pointer' />
                                    </Box>
                                </Flex>
                                <Divider my={4} bg='#DBDBDB' />
                                <VStack w='full' alignItems='start' maxH='22rem' overflowY='scroll'>
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />
                                    <Comment createdAt='2d ago' username='kurtlo' profilepic={profilePic} text='hello wazzup!' />

                                </VStack>
                                <Divider my={4} bg='#DBDBDB' />
                                <PostFooter isProfilePage={true} />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfilePost