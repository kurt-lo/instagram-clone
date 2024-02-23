import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import igLogo from '/logo.png'

const Navbar = () => {
	return (
		<Container maxW={"container.lg"} my={4}>
			<Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
				<Image src={igLogo} h={20} display={{ base: "none", sm: "block" }} cursor={"pointer"} />
				<Flex gap={4}>
					<Link to='/login'>
						<Button colorScheme={"blue"} size={"sm"}>
							Login
						</Button>
					</Link>
					<Link to='/login'>
						<Button variant={"outline"} size={"sm"}>
							Signup
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Navbar;