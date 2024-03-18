import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "hooks/usePlatforms";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  selectedPlatform: number | null;
  onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === selectedPlatform
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform ? `${platform?.name}` : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
