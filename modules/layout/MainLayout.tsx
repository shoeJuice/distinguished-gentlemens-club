import { Container, Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../nav/Navbar";

/**
 * Main Layout Component
 * @param param0
 * @returns
 */
export const MainLayout = ({ children }: any) => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" p={0}>
        {children}
      </Container>
    </Box>
  );
};
