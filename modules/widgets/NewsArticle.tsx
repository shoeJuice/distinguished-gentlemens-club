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
import Section from "../layout/Section";

/**
 * Render a News Article component
 */
export const NewsArticle = () => {
  return (
    <Box>
      <Text fontSize="3xl" paddingY={2}>News Article</Text>
      <Box
        borderRadius={8}
        padding={10}
        color="black"
        backgroundColor="whiteAlpha.900"
      >
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
    </Box>
  );
};
