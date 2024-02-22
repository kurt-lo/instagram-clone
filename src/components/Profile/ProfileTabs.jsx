import { Flex, Box, Text } from '@chakra-ui/react'
import { BsGrid3X3 } from "react-icons/bs";
import { LiaBookmark } from "react-icons/lia";
import { PiUserRectangle } from "react-icons/pi";

const ProfileTabs = () => {
    return (
        <Flex w='full' justifyContent='center' gap={{ base: 4, sm: 10 }} textTransform='uppercase' fontWeight='bold'>
            <Flex alignItems='center' borderTop='1px solid black' gap={2} p={3} cursor='pointer'>
                <Box fontSize={15}>
                    <BsGrid3X3 size={12} />
                </Box>
                <Text fontSize={12} fontWeight='500' display={{ base: 'none', sm: 'block' }}>Posts</Text>
            </Flex>
            <Flex alignItems='center' gap={2} p={3} cursor='pointer'>
                <Box fontSize={15}>
                    <LiaBookmark size={15} />
                </Box>
                <Text fontSize={12} fontWeight='500' display={{ base: 'none', sm: 'block' }}>Saved</Text>
            </Flex>
            <Flex alignItems='center' gap={2} p={3} cursor='pointer'>
                <Box fontSize={15}>
                    <PiUserRectangle size={15} />
                </Box>
                <Text fontSize={12} fontWeight='500' display={{ base: 'none', sm: 'block' }}>Tagged</Text>
            </Flex>
        </Flex>
    )
}

export default ProfileTabs