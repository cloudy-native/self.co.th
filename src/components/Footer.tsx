import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { FaFacebook, FaInstagram, FaLine, FaTiktok } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="white"
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      boxShadow="sm"
      border="1px solid"
      borderColor="brand.100"
      _hover={{
        bg: "brand.500",
        color: "white",
        borderColor: "brand.500",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const bgColor = "brand.50";
  const borderColor = "brand.100";
  const textColor = "gray.700";

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                as={GatsbyLink}
                to="/"
                fontFamily={"heading"}
                fontWeight="bold"
                fontSize="2xl"
                color="brand.700"
              >
                self
              </Text>
            </Box>
            <Text fontSize={"sm"}>
              Natural beauty products that blend traditional Thai wisdom with modern innovation
              for healthy skin that radiates with natural glow.
            </Text>
            <Stack direction={"row"} spacing={4}>
              <SocialButton label={"Facebook"} href={"https://facebook.com"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"https://instagram.com"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"TikTok"} href={"https://tiktok.com"}>
                <FaTiktok />
              </SocialButton>
              <SocialButton label={"Line"} href={"https://line.me"}>
                <FaLine />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Pages</ListHeader>
            <Link as={GatsbyLink} to="/">
              Home
            </Link>
            <Link as={GatsbyLink} to="/products">
              Products
            </Link>
            <Link as={GatsbyLink} to="/about">
              About Us
            </Link>
            <Link as={GatsbyLink} to="/how-to-use-2">
              How to Use
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Policies</ListHeader>
            <Link as={GatsbyLink} to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link as={GatsbyLink} to="/terms">
              Terms of Service
            </Link>
            <Link as={GatsbyLink} to="/shipping">
              Shipping
            </Link>
            <Link as={GatsbyLink} to="/refund">
              Returns & Refunds
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Stay Updated</ListHeader>
            <Text>
              Sign up to receive news and special promotions from us
            </Text>
            <Flex mt={2} w="full">
              <FormControl mr={2}>
                <Input
                  placeholder="Your email"
                  bg="white"
                  border="1px solid"
                  borderColor="brand.200"
                  _hover={{
                    borderColor: "brand.300",
                  }}
                  _focus={{
                    borderColor: "brand.400",
                  }}
                />
              </FormControl>
              <Button
                bg="brand.500"
                color="white"
                _hover={{
                  bg: "brand.600",
                }}
                px={6}
              >
                Subscribe
              </Button>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Divider borderColor={borderColor} />

      <Box py={4}>
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} self co., ltd. - Natural Beauty Products
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
