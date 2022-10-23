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
      .then((res) => {console.log(res)})
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [guestResponse.current]);

  return (
    <GridItem area={"guest"}>
      <Box
        
        id="featuredGuest"
        backgroundColor="gray.500"
        color="white"
        padding={5}
        borderRadius={8}
      >
        <Text fontSize="4xl" textAlign={["center", "left"]} paddingY={2}>
          Featured Guest
        </Text>
        {!loading ? (
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="auto"
          >
            <Flex alignItems="center" flexDirection={["column", "row"]}>
              <Image
                borderRadius={6}
                height={["70%", "40%"]}
                width={["70%", "40%"]}
                src="./images/John.png"
              />
              {/* TODO: Refactor Text Content into a component */}
              <Box maxWidth="100%" padding={2}>
                <Text fontSize="3xl" paddingY={3} textAlign="left">
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
