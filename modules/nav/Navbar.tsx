import React, { useState, useEffect, useRef, useContext } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Link,
  Button,
  HStack,
  VStack,
  Text,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
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
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  const { setScroll } = useContext(WindowContext);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setIsOpen(false);
      setScroll("auto");
    });
  }, []);

  return (
    <Flex width="100%" data-testid="navbar" color="white" position="relative">
      {/*TODO: Turn the bottom component into a mobile only component, abstract it into its own file */}
      <Flex
        width="100%"
        position="relative"
        justifyContent="space-between"
        padding={4}
      >
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
          colorScheme="red"
        />
      </Flex>
      {isMobile && renderMobileMenu(isOpen, setIsOpen, setScroll)}
    </Flex>
  );
};

/**
 * 
 * @param {boolean} isOpen  
 * @param {Function} toggleIsOpen The callback required to toggle the parent Dispatch method for the isOpen value
 * @param {Function} setScroll The callback required to toggle the parent Dispatch method for the scroll state variable
 * @returns 
 */
function renderMobileMenu(isOpen: boolean, toggleIsOpen: Function, setScroll: Function) {

  return (
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
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        padding={2}
      >
        <IconButton
          onClick={() => {
            toggleIsOpen(!isOpen);
            setScroll("auto");
          }}
          position="absolute"
          right={7}
          top={4}
          aria-label="Toggle Menu"
          icon={<HamburgerIcon />}
          colorScheme="red"
        />
        <Text margin="auto">Icon</Text>
      </Flex>
      <VStack>
        <NavLink to="Home" />
        <NavLink to="About" />
        <NavLink to="Contact" />
      </VStack>
    </Box>
  );
}
