import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "hooks/usePlatforms";
import { BiChevronDown } from "react-icons/bi";

const PlatformSelector = () => {
  const { platforms } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
