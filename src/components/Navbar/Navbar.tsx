import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import logo from "assets/game-hub-logo.png";
import { ColorModeSwitch } from "components/ColorModeSwitch";
import { SearchInput } from "components/SearchInput";

interface Props {
  onSearchGame: (searchQuery: string) => void;
}

const Navbar = ({ onSearchGame }: Props) => {
  return (
    <HStack
      gap={{ base: 0, md: "20px" }}
      px="10px"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
    >
      <Image src={logo} boxSize="60px" width="120px" objectFit="contain" />
      <Flex gap="10px" w="100%">
        <Box flexGrow={1}>
          <SearchInput onSearchGame={onSearchGame} />
        </Box>
        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default Navbar;
