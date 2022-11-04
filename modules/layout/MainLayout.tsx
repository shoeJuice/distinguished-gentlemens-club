import React, { useState, useEffect } from 'react';
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
    <Box backgroundColor="gray.900" width="100%" overflowY="hidden">
      <Navbar />
      <Container height="100%" maxW="100%" color="white" p={0}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
