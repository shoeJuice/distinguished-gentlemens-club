import { Box, Text, Link, Flex, useColorModeValue } from "@chakra-ui/react";

/**
 * Render a Footer
 **/
export const Footer = () => {
  return (
    <Box 
      width="100%"
      backgroundColor="blackAlpha.400"
      mt={10}
      padding={4}
      textAlign="center"
    >
      <Text fontWeight="light">Distinguished Gentlemen, 2022</Text>
      <Text fontWeight="light">Fairfield University</Text>
    </Box>
  );
};
