import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text fontSize="md" w="90px">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
