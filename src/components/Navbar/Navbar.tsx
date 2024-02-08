import { HStack, Image } from "@chakra-ui/react";
import logo from "assets/game-hub-logo.png";
import { ColorModeSwitch } from "components/ColorModeSwitch";
import { SearchInput } from "components/SearchInput";

interface Props {
  onSearchGame: (searchQuery: string) => void;
}

const Navbar = ({ onSearchGame }: Props) => {
  return (
    <HStack gap={"20px"} px={5}>
      <Image src={logo} boxSize="60px" width="120px" objectFit="contain" />
      <SearchInput onSearchGame={onSearchGame} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
