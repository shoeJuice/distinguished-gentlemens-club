import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  GridItem,
} from "@chakra-ui/react";

/**
 * Render a Featured Guest component
 */

export const FeaturedGuest = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [guest, setGuest] = useState<any>(null);
  const guestResponse = useRef<any>(null);

  useEffect(() => {
    guestResponse.current = axios
      .get("/api/authors", { baseURL: process.env.BASE_URL })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [guestResponse.current]);

  return (
    <GridItem rowSpan={1} colSpan={2}>
      <Text fontSize="3xl" py={3}>Featured Guest</Text>
      <Box
        id="featuredGuest"
        backgroundColor="gray.500"
        color="white"
        borderRadius={8}
        
      >
        <Image
          margin="auto"   
          fit="cover"
          height="20%"
          width="full"
          objectPosition="80% 20%"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        {!loading ? (
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="auto"
          >
            <Flex alignItems="center" flexDirection={["column", "row"]}>
              {/* TODO: Refactor Text Content into a component */}
              <Box maxWidth="100%" padding={2}>
                <Text fontSize="3xl" paddingY={3} textAlign="center">
                  {guest ? guest.Author : "John Doe"}
                </Text>
                <Text paddingY={2} lineHeight="7">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis totam laudantium modi minima sequi quae possimus.
                  Animi veritatis quis asperiores molestias, nisi eos aspernatur
                  dolor unde, fuga, eum laborum alias? Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Atque, nobis modi!
                  Voluptates nobis minus tenetur odit!
                </Text>

                {/* This button should open a modal with more info */}
              </Box>
            </Flex>
          </Flex>
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>
    </GridItem>
  );
};
