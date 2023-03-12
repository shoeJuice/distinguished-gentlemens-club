import React, { useState, useEffect, useRef, useContext } from "react";
import NextLink from "next/link";
import { Box, Flex, Link, Button, HStack, VStack, Text, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { WindowContext } from "../context/WindowContext";
import { useRouter } from "next/router";

/**
 * Render a Navigation Bar
 *
 **/
export const Navbar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setScroll } = useContext(WindowContext);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setIsOpen(false);
      setScroll("auto");
    })
  }, [])

  return (
    <Flex
      width="100%"
      data-testid="navbar"
      color="white"
      position="relative"
    >
      {/*TODO: Turn the bottom component into a mobile only component, abstract it into its own file */}
      <Flex width="100%" position="relative" justifyContent="space-between" padding={4}>
        <Logo />
        <HStack display={["none", "flex"]}>
          <NavLink to="Home" />
          <NavLink to="About" />
          <NavLink to="Contact" />
        </HStack>
        <IconButton
          display={["block", "none"]}
          onClick={() => {
            setIsOpen(!isOpen);
            setScroll("hidden");
          }}
          opacity={isOpen ? 0 : 1}
          aria-label="Toggle Menu"
          icon={<HamburgerIcon />}
         />
      </Flex>
      <Box
        position="fixed"
        backgroundColor="blackAlpha.800"
        height="100vh"
        width="100%"
        zIndex={10}
        left={!isOpen ? "100%" : "0"}
        opacity={!isOpen ? 0 : 1}
        overflowY="hidden"
        transition="left 0.5s, opacity 0.5s"
        textAlign="center"
        padding={4}
      >
        <Flex alignItems="center" width="100%" justifyContent="space-between" padding={2}>
          <IconButton
            onClick={() => {
              setIsOpen(!isOpen);
              setScroll("auto");
            }}
            position="absolute"
            right={7}
            top={4}
            aria-label="Toggle Menu"
            icon={<HamburgerIcon />}
           />
          <Text margin="auto">Icon</Text>
        </Flex>
        <VStack>
          <NavLink to="Home" />
          <NavLink to="About" />
          <NavLink to="Contact" />
        </VStack>
      </Box>
    </Flex>
  );
};
