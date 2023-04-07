import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import Section from "../layout/Section";

/**
 * Render a Featured Guest component
 */

export const FeaturedBook = () => {
  return (
    <Box maxWidth="450px">
      <Text fontWeight="medium" fontSize="4xl" py={3}>
        Featured Book
      </Text>
      <Box
        id="featuredGuest"
        backgroundColor="gray.600"
        color="white"
        borderRadius={8}
      >
        <Flex
          width="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignItems="center" flexDirection={"column"}>
            <Image
              fit="contain"
              borderTopRadius={6}
              height="20%"
              width="100%"
              src="./images/Book_Cover_Mockup.jpg"
            />
            {/* TODO: Refactor Text Content into a component */}
            <Box width="100%" padding={4}>
              <Text width="100%" fontSize="3xl" paddingY={3} textAlign="left">
                {""}
                Name Goes Here{" "}
              </Text>
              <Text width="85%" paddingY={2} lineHeight="7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis totam laudantium modi minima sequi quae possimus. Animi
                veritatis quis asperiores molestias, nisi eos aspernatur dolor
                unde, fuga, eum laborum alias? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Atque, nobis modi! Voluptates
                nobis minus tenetur odit!
              </Text>
              {/* This button should open a modal with more info */}
              <Button colorScheme="whiteAlpha" color="white">
                Purchase on Amazon
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
