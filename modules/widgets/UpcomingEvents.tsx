import {
  Box,
  Text,
  Flex,
  Link,
  Button,
  VStack,
  GridItem,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import Card from "../layout/Card";
import Section from "../layout/Section";

/**
 * Render an Upcoming Events component
 */
export const UpcomingEvents = () => {
  return (
    <Section alignItems="center" containerSize="container.xl" flexDirection={["column"]} backgroundColor="whiteAlpha.300">
      <Flex flexDirection="column" alignItems="center" gap={4}>
        <Text fontSize="3xl">Get Involved</Text>
        <Text maxWidth="745px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem animi corporis culpa non temporibus, adipisci eum a
          molestiae harum excepturi fugit sit obcaecati, ipsum esse vel quis
          optio aut? Fuga.
        </Text>
        <Text maxWidth="745px">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          officia nostrum, iure deserunt placeat assumenda consectetur dolor
          nihil cumque voluptas id dolorum odit provident aut quia cum harum,
          libero molestias?
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        width="100%"
        gap={4}
        justifyContent="space-evenly"
        flexDirection={["column", "row"]}
      >
        <Box >
          <Text fontWeight="medium" fontSize="4xl" paddingY={2}>
            This Week at DGFU
          </Text>
          <Card />
        </Box>
        {renderUpcomingEvents()}
      </Flex>
    </Section>
  );
};

function renderUpcomingEvents() {
  return (
    <Box width="450px">
      <Text fontWeight="medium" fontSize="4xl" paddingY={2}>
        Upcoming Events
      </Text>
      <Box borderRadius={8}  padding={6} backgroundColor="red.700">
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
    </Box>
  );
}
