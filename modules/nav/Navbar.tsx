import NextLink from "next/link";
import { Box, Flex, Link, Button, HStack } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

/**
 * Render a Navigation Bar
 *
 **/
export const Navbar = () => {
    return (<Flex data-testid="navbar">
        <Logo />
        <HStack>
            <NavLink to="Home" />
            <NavLink to="About" />
            <NavLink to="Contact" />
        </HStack>
    </Flex>);
};