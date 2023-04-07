import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Text,
  Button,
  Flex,
  Image,
  Grid,
  HStack,
  Center,
  VStack,
} from "@chakra-ui/react";

import { FeaturedGuest } from "../modules/widgets/FeaturedGuest";
import { UpcomingEvents } from "../modules/widgets/UpcomingEvents";
import { FeaturedBook } from "../modules/widgets/FeaturedBook";
import { NewsArticle } from "../modules/widgets/NewsArticle";
import Section from "../modules/layout/Section";
import { Navbar } from "../modules/nav/Navbar";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Home - Distinguished Gentlemen of Fairfield University</title>
        <meta
          name="description"
          content="Welcome to the Home Page of the Distinguished Gentlemen's club at Fairfield University!"
        />
        <link rel="icon" href="/betaIcon.ico" />
      </Head>

      <Section
        id="splashSection"
        as="section"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        backgroundImage="linear-gradient(rgba(23,23,35,1), rgba(23,23,35,0.2), rgba(0,0,0,0.1), rgba(0,0,0,0.2), rgba(23,23,35,1)), url('./images/dg_splash.jpg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="top"
        containerSize="container.xl"
      >
        <VStack>
          <Text fontSize={["xl", "5xl"]} fontWeight="semibold">
            Distinguished Gentlemen
          </Text>
          <Text
            fontSize={["lg", "2xl"]}
            textAlign="center"
            fontWeight="thin"
            padding={5}
          >
            Establishing a communion of men and women committed to unity,
            discipline, and justice.
          </Text>
          <Button
            size="lg"
            onClick={() => {
              router.push("/about");
            }}
            colorScheme="red"
          >
            Learn More
          </Button>
        </VStack>
      </Section>

      <FeaturedGuest />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
