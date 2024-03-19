import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "hooks/usePlatform";
import usePlatforms from "hooks/usePlatforms";
import { BiChevronDown } from "react-icons/bi";
import useGameQueryStore from "store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );
  const onSelectPlatform = useGameQueryStore((store) => store.onSelectPlatform);
  const { data: platforms } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatformId ? `${platform?.name}` : "Platforms"}
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
