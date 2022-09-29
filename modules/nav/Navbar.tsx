import NextLink from "next/link";
import { Box, Flex, Link, Button, HStack } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

/**
 * Render a Navigation Bar
 *
 **/
export const Navbar = () => {
  return (
    <Flex width="100%" data-testid="navbar" color="white" backgroundColor="blackAlpha.900" justifyContent="space-between" padding={4}>
      <Logo />
      <HStack>
        <NavLink to="Home" />
        <NavLink to="About" />
        <NavLink to="Contact" />
      </HStack>
    </Flex>
  );
};
