import React, { useState, useEffect } from "react";
import { Container, Box, Flex, ResponsiveValue } from "@chakra-ui/react";
import { Navbar } from "../nav/Navbar";
import { Footer } from "./Footer";

/**
 * Main Layout Component
 * @param param0
 * @returns
 */
export const MainLayout = ({ children }: any) => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="gray.900"
      width="100%"
      overflowY="hidden"
      position="relative"
    >
      <Navbar />
      <Box position="relative" maxW="100%" color="white">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
