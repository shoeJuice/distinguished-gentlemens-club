import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container, Text, Button, Flex, Image } from "@chakra-ui/react";

import { FeaturedGuest } from "../modules/widgets/FeaturedGuest";
import { UpcomingEvents } from "../modules/widgets/UpcomingEvents";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Flex
          id="splashSection"
          as="section"
          height="100vh"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text fontSize="5xl" padding={10}>
            Splash Content Goes Here
          </Text>
          <Button
            size="lg"
            onClick={() => {
              router.push("/about");
            }}
          >
            Learn More
          </Button>
        </Flex>
        <Flex width="100%" gap={10} justifyContent="space-between">
          <FeaturedGuest />
          <UpcomingEvents />
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
