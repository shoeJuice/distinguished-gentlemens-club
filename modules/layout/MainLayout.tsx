import { Container, Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../nav/Navbar";

/**
 * Main Layout Component
 * @param param0
 * @returns
 */
export const MainLayout = ({ children }: any) => {
  return (
    <Box minHeight="100vh" backgroundColor="gray.900" width="100%">
      <Navbar />
      <Container maxW="100%" color="white" p={0}>
        {children}
      </Container>
    </Box>
  );
};
