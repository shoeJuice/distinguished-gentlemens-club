import {
  Box,
  Text,
  Flex,
  Link,
  Button,
  VStack,
  GridItem,
} from "@chakra-ui/react";

/**
 * Render an Upcoming Events component
 */
export const UpcomingEvents = () => {
  return (
    <GridItem area={'events'}>
      <Box
        borderRadius={8}
        padding={10}
        backgroundColor="red.400"
      >
        <Text fontSize="4xl">Upcoming Events</Text>
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Button _hover={{ color: "whiteAlpha.700" }} variant="unstyled">
            Event Goes Here
          </Button>
          <Button _hover={{ color: "whiteAlpha.700" }} variant="unstyled">
            Event Goes Here
          </Button>
          <Button _hover={{ color: "whiteAlpha.700" }} variant="unstyled">
            Event Goes Here
          </Button>
        </Flex>
      </Box>
    </GridItem>
  );
};
