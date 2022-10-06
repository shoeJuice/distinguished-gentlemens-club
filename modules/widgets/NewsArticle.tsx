import { Box, Text, Flex, Link, Button, VStack } from "@chakra-ui/react";

/**
 * Render a News Article component
 */
export const NewsArticle = () => {
  return (
    <Box
      width={["100%", "100%", "45%", "45%"]}
      height="100%"
      borderRadius={8}
      padding={10}
      color="black"
      backgroundColor="whiteAlpha.900"
    >
      <Text fontSize="4xl" paddingY={3}>
        News Article
      </Text>
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          totam laudantium modi minima sequi quae possimus. Animi veritatis quis
          asperiores molestias, nisi eos aspernatur dolor unde, fuga, eum
          laborum alias? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Atque, nobis modi! Voluptates nobis minus tenetur odit!
          {<br />}
          {<br />}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          totam laudantium modi minima sequi quae possimus. Animi veritatis quis
          asperiores molestias, nisi eos aspernatur dolor unde, fuga, eum
          laborum alias? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Atque, nobis modi! Voluptates nobis minus tenetur odit!
        </Text>
      </Flex>
    </Box>
  );
};
