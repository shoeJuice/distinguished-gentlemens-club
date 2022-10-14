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
    <div style={{height: "100%"}}>
      <Head>
        <title>Home - Distinguished Gentlemen of Fairfield University</title>
        <meta
          name="description"
          content="Welcome to the Home Page of the Distinguished Gentlemen's club at Fairfield University!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" height="100%">
        <Flex
          id="splashSection"
          as="section"
          height="80vh"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundImage="linear-gradient(rgba(0,0,0,0.2),  rgba(23,23,35,1)), url('./images/dg_splash.jpg')"
          backgroundRepeat="no-repeat"
          backgroundSize={["cover", "cover"]}
          backgroundPosition="center"
        >
          <Text fontSize={["3xl", "5xl"]} fontWeight="semibold">
            Distinguished Gentlemen 
          </Text>
          <Text fontSize={["lg", "2xl"]} textAlign="center" fontWeight="thin" padding={5}>
            Establishing a communion of men committed to unity, discipline, and justice.
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
          padding={2}
          templateAreas={[`"events events" "guest guest"
                              "news news" "book book"`, `"events events" "guest guest"
                              "news news" "book book"`, `"events events" "guest guest"
                              "news news" "book book"`,  `"guest book"
                              "news events"`,]}
          width="90%"
          margin="auto"
          gap={["2", "3"]}
          gridTemplateRows={['auto auto', 'auto minmax(0, 1fr)']}
          gridTemplateColumns={'auto auto'}
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
