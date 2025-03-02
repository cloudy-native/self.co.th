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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

import { NAV_ITEMS, LANGUAGE_OPTIONS } from "../data/navigation";

// Move import to correct position
import { FaShoppingBag, FaGlobe, FaChevronDown } from "react-icons/fa";
import { Language, useLanguage } from "../context/LanguageContext";


const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { language, setLanguage, t } = useLanguage();

  // Use the brand colors for the header
  const bgColor = "white";
  const textColor = "gray.700";
  const borderColor = "brand.100";

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

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
                    {language === 'en' ? navItem.label : t(navItem.translationKey)}
                  </Link>
                ))}
              </Stack>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={3}
            align="center"
          >
            <Menu>
              <MenuButton
                as={Button}
                size="sm"
                variant="ghost"
                fontWeight={400}
                rightIcon={<FaChevronDown />}
                leftIcon={<FaGlobe />}
                color={textColor}
                _hover={{
                  bg: "brand.50",
                }}
              >
                {LANGUAGE_OPTIONS[language]}
              </MenuButton>
              <MenuList borderColor="brand.100" zIndex={10}>
                <MenuItem onClick={() => handleLanguageChange('en')}>
                  English {language === 'en' && <Text as="span" ml={2} color="brand.500" fontWeight="bold">✓</Text>}
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange('th')}>
                  Lorem ipsum {language === 'th' && <Text as="span" ml={2} color="brand.500" fontWeight="bold">✓</Text>}
                </MenuItem>
              </MenuList>
            </Menu>
            <Divider orientation="vertical" height="20px" borderColor="brand.100" />
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
              {t('button.shopNow')}
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
                  {language === 'en' ? navItem.label : t(navItem.translationKey)}
                </Link>
              ))}
              <Menu>
                <MenuButton
                  as={Button}
                  w="full"
                  size="sm"
                  variant="outline"
                  colorScheme="brand"
                  mb={2}
                  rightIcon={<FaChevronDown />}
                  leftIcon={<FaGlobe />}
                >
                  {LANGUAGE_OPTIONS[language]}
                </MenuButton>
                <MenuList zIndex={10}>
                  <MenuItem onClick={() => handleLanguageChange('en')}>
                    English {language === 'en' && <Text as="span" ml={2} color="brand.500" fontWeight="bold">✓</Text>}
                  </MenuItem>
                  <MenuItem onClick={() => handleLanguageChange('th')}>
                    Lorem ipsum {language === 'th' && <Text as="span" ml={2} color="brand.500" fontWeight="bold">✓</Text>}
                  </MenuItem>
                </MenuList>
              </Menu>
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
                {t('button.shopNow')}
              </Button>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Header;
