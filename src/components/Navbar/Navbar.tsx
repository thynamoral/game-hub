import { HStack, Image } from "@chakra-ui/react";
import logo from "assets/game-hub-logo.png";
import { ColorModeSwitch } from "components/ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" px={5}>
      <Image src={logo} boxSize="60px" width="120px" objectFit="contain" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
