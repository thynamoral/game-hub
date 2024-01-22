import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/game-hub-logo.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" width="120px" objectFit="contain" />
    </HStack>
  );
};

export default Navbar;
