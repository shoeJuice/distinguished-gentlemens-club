import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

/**
 * A general section component, used for layout purposes.
 * The component extends the Flex Style API for Chakra-UI components.
 */
const Section = (props: any) => {
  return (
    <Flex as="section" gap={5} width="100%" minHeight="100vh" padding={8} marginBottom={16}  justifyContent="space-evenly" {...props}>
      {props.title && <Text>{props.title}</Text>}
      {props.children}
    </Flex>
  );
};

export default Section;
