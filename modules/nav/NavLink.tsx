import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

/**
 * Render a Navigation Link
 **/
export const NavLink = ({ to }: any) => {
  return (
    <NextLink href={to.toLowerCase() === "home" ? "./" : `/${to.toLowerCase()}`} passHref>
      <Button variant="unstyled">{to}</Button>
    </NextLink>
  );
};
