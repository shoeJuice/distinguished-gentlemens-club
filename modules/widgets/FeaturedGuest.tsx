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
import Section from "../layout/Section";
import Card from "../layout/Card";
import { FeaturedBook } from "./FeaturedBook";

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
  }, []);

  return (
    <Section containerSize="container.xl" alignItems="center" flexDirection={["column"]}>
      <Flex flexDirection="column" alignItems="center">
        <Text fontSize="3xl">Welcome to DGFU</Text>
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
          libero molestias?em
        </Text>
      </Flex>
      <Flex alignItems="center" width="100%" gap={4} justifyContent="space-evenly" flexDirection={["column", "row"]}>
        <Box>
          <Text fontSize="4xl" fontWeight="medium" py={3}>
            Featured Guest
          </Text>
          <Card />
        </Box>
        <FeaturedBook />
      </Flex>
    </Section>
  );
};
