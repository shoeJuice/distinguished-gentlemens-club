import { NextPage } from "next";
import Head from "next/head";
import { Box, Container, Text, Button, Flex, Image, theme } from "@chakra-ui/react";

const About: NextPage = () => {
  return (
    <Box height="100vh">
      <Head>
        <title>
          About Us - Distinguished Gentlemen of Fairfield University
        </title>
      </Head>
      <Box>
        <Text>About Page</Text>
        <Text padding={6} lineHeight='8' maxWidth="645px">
          {<span style={{fontSize: theme.fontSizes["lg"], fontWeight: theme.fontWeights.bold}}>Aimed at creating a better understanding of community among men of all
          ethnic backgrounds</span>} through discussion, service, and social discourse,
          the Distinguished Gentlemen of Fairfield University was
          established in 2014 as a safe space among students bringing awareness
          to toxic masculinity and ways to address it. The club has since
          expanded its mission to involve a commmitment to{" "}
          {
            <b>
              justice, unity, and the betterment of the surrounding community
            </b>
          }
          .
        </Text>
        <Text padding={6} lineHeight='8' maxWidth="645px">
          As the club grows, so too does its outreach. The Distinguished
          Gentlemen of Fairfield University will host a variety of events
          throughout the year, including panel discussions, community service
          projects, and social events. The club also hosts a variety of
          speakers, including local community leaders, Fairfield faculty, and
          distinguished alumni. We are also happy to announce the launch of our
          new monthly podcast, the {<b>Distinguished Hour</b>}, with topics
          revolving around men&apos;s role in society and ways to incorporate healthy
          masculinity on and off campus.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
