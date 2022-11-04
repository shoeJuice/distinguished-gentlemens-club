import {
  Box,
  Text,
  Flex,
  Link,
  Button,
  VStack,
  GridItem,
  HStack,
  ButtonGroup
} from "@chakra-ui/react";

/**
 * Render an Upcoming Events component
 */
export const UpcomingEvents = () => {
  return (
    <GridItem rowStart={[2, 2]} colStart={[1, 3]} colSpan={[2, 2]}>
      <Text fontSize="3xl">Upcoming Events</Text>
      <Box
        borderRadius={8}
        padding={6}
        backgroundColor="red.700"
      >
        <HStack><ButtonGroup>
            <Button>Incoming</Button>
            <Button>Outgoing</Button>
          </ButtonGroup></HStack>
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
