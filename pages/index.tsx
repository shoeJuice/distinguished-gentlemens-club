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
} from "@chakra-ui/react";

import { FeaturedGuest } from "../modules/widgets/FeaturedGuest";
import { UpcomingEvents } from "../modules/widgets/UpcomingEvents";
import { FeaturedBook } from "../modules/widgets/FeaturedBook";
import { NewsArticle } from "../modules/widgets/NewsArticle";

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
          height="80vh"
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
            colorScheme="red"
          >
            Learn More
          </Button>
        </Flex>
        <Grid
          templateAreas={[`"events events" "guest guest"
                              "news news" "book book"`, `"guest book"
                              "news events"`,]}
          width="90%"
          margin="auto"
          gap={["2", "4"]}
          gridTemplateRows={['', '1fr 1fr']}
          gridTemplateColumns={'1fr .5fr'}
        >
          <FeaturedGuest />
          <UpcomingEvents />

          <NewsArticle />
          <FeaturedBook />
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
