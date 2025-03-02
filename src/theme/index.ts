import { extendTheme } from "@chakra-ui/react";

// Custom theme with pale green foundation and jewel tone accents
const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  colors: {
    brand: {
      50: "#f2f7f2",  // Pale green foundation
      100: "#e3efe3",
      200: "#c5e0c5",
      300: "#a6cda6",
      400: "#7eb47e",
      500: "#5a9c5a",  // Primary green
      600: "#458045",
      700: "#356535",
      800: "#244c24",
      900: "#0f330f",
    },
    accent: {
      emerald: "#0F9D58",    // Emerald green
      sapphire: "#1A73E8",   // Sapphire blue
      amethyst: "#9C27B0",   // Amethyst purple
      ruby: "#DB4437",       // Ruby red
      amber: "#F4B400",      // Amber gold
      teal: "#009688",       // Teal
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "gray.800",
      },
    },
  },
});

export default theme;
