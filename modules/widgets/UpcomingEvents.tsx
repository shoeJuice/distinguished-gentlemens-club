import { Box, Text, Flex, Link, Button, VStack } from "@chakra-ui/react";

/**
 * Render an Upcoming Events component
 */
export const UpcomingEvents = () => {
  return (
    <Box width="50%">
      <Text fontSize="4xl" padding={10}>
        Upcoming Events
      </Text>
      <Flex flexDirection="column" width="100%" justifyContent="flex-start">
        <Text>Event Goes Here</Text>
        <Text>Event Goes Here</Text>
        <Text>Event Goes Here</Text>
      </Flex>
    </Box>
  );
};
