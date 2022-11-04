import {
  Box,
  Text,
  Flex,
  Link,
  Button,
  VStack,
  GridItem,
  Image,
} from "@chakra-ui/react";

/**
 * Render a News Article component
 */
export const NewsArticle = () => {
  return (
    <GridItem rowStart={[3]} rowSpan={[1, 3]} colSpan={[2,2]}>
      <Box
        borderRadius={8}
        padding={10}
        color="black"
        backgroundColor="whiteAlpha.900"
      >
        <Text fontSize="4xl">News Article</Text>
        <Flex
          alignItems="flex-start"
          flexDirection={"column"}
          justifyContent="flex-start"
          gap={4}
        >
          <Image
            src="./images/news-placeholder.jpg"
            alignSelf="center"
            borderRadius={8}
            height={["70%", "60%"]}
            width={["70%", "60%"]}
          />
          <Box>
            <Text fontSize="3xl">Title</Text>
            <Text fontSize="2xl">Author</Text>
            <Text paddingY={2} lineHeight="7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              totam laudantium modi minima sequi quae possimus. Animi veritatis
              quis asperiores molestias, nisi eos aspernatur dolor unde, fuga,
              eum laborum alias? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Atque, nobis modi! Voluptates nobis minus
              tenetur odit!
              {<br />}
              {<br />}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              totam laudantium modi minima sequi quae possimus. Animi veritatis
              quis asperiores molestias, nisi eos aspernatur dolor unde, fuga,
              eum laborum alias? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Atque, nobis modi! Voluptates nobis minus
              tenetur odit!
            </Text>
          </Box>
        </Flex>
      </Box>
    </GridItem>
  );
};
