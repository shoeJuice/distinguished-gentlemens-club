import { Box, Text, Flex, Link, Button, VStack } from "@chakra-ui/react";

/**
 * Render an Upcoming Events component
 */
export const UpcomingEvents = () => {
  return (
    <Box width={["100%", "100%", "45%", "45%"]}  height="100%" borderRadius={8} padding={10} backgroundColor="red.400">
      <Text fontSize="4xl">
        Upcoming Events
      </Text>
      <Flex alignItems="flex-start" flexDirection="column" justifyContent="flex-start">
        <Button _hover={{color: "whiteAlpha.700"}} variant="unstyled">Event Goes Here</Button>  
        <Button _hover={{color: "whiteAlpha.700"}} variant="unstyled">Event Goes Here</Button>
        <Button _hover={{color: "whiteAlpha.700"}} variant="unstyled">Event Goes Here</Button>
      </Flex>
    </Box>
  );
};
