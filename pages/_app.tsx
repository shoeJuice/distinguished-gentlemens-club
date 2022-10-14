import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "../modules/layout/MainLayout";
import { WindowProvider } from "../modules/context/WindowContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowProvider>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </WindowProvider>
  );
}

export default MyApp;
