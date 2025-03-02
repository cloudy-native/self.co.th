import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Layout from "./components/Layout";
import theme from "./theme";
import { LanguageProvider } from "./context/LanguageContext";

// Wrap all pages with the ChakraProvider and LanguageProvider
export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <LanguageProvider>
        {element}
      </LanguageProvider>
    </ChakraProvider>
  );
};

// Wrap all pages with the Layout component
export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return <Layout>{element}</Layout>;
};
