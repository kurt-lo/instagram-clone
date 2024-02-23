import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollow from "../../hooks/useFollow";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {

	const { isFollowing, isLoading, handleFollowUser } = useFollow(user.uid);
	const authUser = useAuthStore((state) => state.user);

	const onFollowUser = async () => {
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing
				? user.followers.filter((follower) => follower.uid !== authUser.uid)
				: [...user.followers, authUser],
		});
	};

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={`/${user.username}`}>
					<Avatar src={user.profilePicURL} size={"md"} />
				</Link>
				<VStack spacing={2} alignItems={"flex-start"}>
					<Link to={`/${user.username}`}>
						<Box fontSize={12} fontWeight={"bold"}>
							{user.fullName}
						</Box>
					</Link>
					<Box fontSize={11}>
						{user.followers.length} followers
					</Box>
				</VStack>
			</Flex>
			{authUser.uid !== user.uid && (
				<Button
					fontSize={13}
                    variant='unstyled'
					p={0}
					h={"max-content"}
					fontWeight={"medium"}
					color={"blue.400"}
					cursor={"pointer"}
					onClick={onFollowUser}
					isLoading={isLoading}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</Button>
			)}
		</Flex>
	);
};

export default SuggestedUser;