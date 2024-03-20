import { Box, Heading, Text } from "@chakra-ui/react";
import { Navbar } from "components/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box ps="1rem">
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist."
            : "An unexpected error occured!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
