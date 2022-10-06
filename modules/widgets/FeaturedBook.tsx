import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  HStack,
} from "@chakra-ui/react";

/**
 * Render a Featured Guest component
 */

export const FeaturedBook = () => {
  return (
    <Box
      width={["100%", "100%", "40%", "40%"]}
      id="featuredGuest"
      backgroundColor="gray.600"
      color="white"
      padding={5}
      borderRadius={8}
    >
      <Text fontSize="4xl" paddingY={2}>
        Book of the Week
      </Text>
      <Flex
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex alignItems="center">
          <Image
            borderRadius={6}
            height="40%"
            width="40%"
            src="./images/Book_Cover_Mockup.jpg"
          />
          {/* TODO: Refactor Text Content into a component */}
          <Box width="100%" padding={4}>
            <Text width="100%" fontSize="3xl" paddingY={3} textAlign="left">
              {""}
              Name Goes Here{" "}
            </Text>
            <Text width="85%" paddingY={2} lineHeight="7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              totam laudantium modi minima sequi quae possimus. Animi veritatis
              quis asperiores molestias, nisi eos aspernatur dolor unde, fuga,
              eum laborum alias? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Atque, nobis modi! Voluptates nobis minus
              tenetur odit!
            </Text>
            {/* This button should open a modal with more info */}
            <Button colorScheme="blackAlpha">Purchase on Amazon</Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
