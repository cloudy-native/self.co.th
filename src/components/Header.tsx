import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "How to Use",
    href: "/how-to-use",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  // Use the brand colors for the header
  const bgColor = "white";
  const textColor = "gray.700";
  const borderColor = "brand.100";

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bgColor}
      color={textColor}
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="sm"
      backdropFilter="none"
    >
      <Container maxW="container.xl" px={4}>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justify="space-between"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              as={GatsbyLink}
              to="/"
              textAlign={{ base: "center", md: "left" }}
              fontFamily={"heading"}
              fontWeight="bold"
              fontSize="2xl"
              color="brand.700"
              _hover={{
                textDecoration: "none",
                color: "brand.600",
              }}
            >
              self
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Stack direction={"row"} spacing={6} align="center">
                {NAV_ITEMS.map((navItem) => (
                  <Link
                    key={navItem.label}
                    as={!navItem.isExternal ? GatsbyLink : undefined}
                    to={!navItem.isExternal ? navItem.href : undefined}
                    href={navItem.isExternal ? navItem.href : undefined}
                    fontSize={"md"}
                    fontWeight={500}
                    color={textColor}
                    _hover={{
                      textDecoration: "none",
                      color: "brand.500",
                    }}
                  >
                    {navItem.label}
                  </Link>
                ))}
              </Stack>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"brand.500"}
              href={"#"}
              _hover={{
                bg: "brand.600",
              }}
              leftIcon={<FaShoppingBag />}
            >
              Shop Now
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <Link
                  key={navItem.label}
                  as={!navItem.isExternal ? GatsbyLink : undefined}
                  to={!navItem.isExternal ? navItem.href : undefined}
                  href={navItem.isExternal ? navItem.href : undefined}
                  py={2}
                  fontWeight={500}
                  color={textColor}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  {navItem.label}
                </Link>
              ))}
              <Button
                w="full"
                fontSize={"sm"}
                fontWeight={600}
                bg={"brand.500"}
                color={"white"}
                _hover={{
                  bg: "brand.600",
                }}
                leftIcon={<FaShoppingBag />}
              >
                Shop Now
              </Button>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Header;
