import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Card = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [guest, setGuest] = useState<any>();

  return (
    <Box
      maxWidth={["350px", "350px", "350px", "350px", "700px"]}
      backgroundColor="gray.500"
      color="white"
      borderRadius={8}
    >
      <Image
        fit="contain"
        height="20%"
        width="100%"
        objectPosition="80% 20%"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        borderTopRadius={8}
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
            <Box padding={8}>
              <Text fontSize="2xl" fontWeight="medium">
                First Name - Last Name
              </Text>
              <Text fontSize="xl" fontWeight="thin">
                Title
              </Text>
              <Text maxWidth="765px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis culpa doloremque reiciendis quisquam soluta tempora
                repudiandae beatae laborum sapiente expedita eveniet nobis cum
                odio, minus, magnam, tenetur nam qui officia.
              </Text>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default Card;
