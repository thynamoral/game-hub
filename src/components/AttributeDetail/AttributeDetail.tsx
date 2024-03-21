import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}

const AttributeDetail = ({ heading, children }: Props) => {
  return (
    <Box>
      <Heading fontSize="md" color="gray.600">
        {heading}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
};

export default AttributeDetail;
