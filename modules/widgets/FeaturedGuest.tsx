import { Box, Flex, Image, Text, Container, Button } from "@chakra-ui/react";

/**
 * Render a Featured Guest component
 */

export const FeaturedGuest = () => {
  return (
    <Box width="50%" id="featuredGuest" backgroundColor="white" color="black" padding={5}>
      <Text fontSize="4xl" padding={10}>
        Featured Guest
      </Text>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex alignItems="center" width="100%" justifyContent="space-between" padding={5}>
          <Box textAlign="center" width="50%">
            <Image
              
              borderRadius={6}
              height="70%"
              width="70%"
              src="./images/John.png"
            />
          </Box>
          {/* TODO: Refactor Text Content into a component */}
          <Box width="50%">
            <Text fontSize="3xl" padding={3} textAlign="center">
              {" "}
              Name Goes Here{" "}
            </Text>
            <Text  lineHeight="7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              totam laudantium modi minima sequi quae possimus. Animi veritatis
              quis asperiores molestias, nisi eos aspernatur dolor unde, fuga,
              eum laborum alias? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Atque, nobis modi! Voluptates nobis minus
              tenetur odit!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
