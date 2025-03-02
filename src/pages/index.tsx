import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HeadFC, Link as GatsbyLink, PageProps } from "gatsby";
import * as React from "react";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { FEATURED_PRODUCTS } from "../data/products";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      align={"center"}
      textAlign={"center"}
      p={8}
      rounded={"lg"}
      bg={"white"}
      boxShadow={"sm"}
      border={"1px solid"}
      borderColor={"brand.100"}
      transition="transform 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "md",
      }}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"brand.500"}
        mb={5}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading fontSize={"xl"} color={"brand.800"}>
        {title}
      </Heading>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  const bgGradient = "linear(to-b, brand.50, white)";
  const { language, t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Box bg="brand.50" bgGradient={bgGradient} pt={20} pb={16}>
        <Container maxW={"5xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={"brand.700"}
            >
              self{" "}
              <Text as={"span"} color={"accent.emerald"}>
                {t("home.hero.title")}
              </Text>
            </Heading>
            <Text
              color={"gray.600"}
              maxW={"3xl"}
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight={1.8}
            >
              {language === "en"
                ? "Natural beauty products that blend traditional Thai wisdom with modern innovation for healthy skin that radiates with natural glow."
                : t("home.hero.subtitle")}
            </Text>
            <Stack spacing={6} direction={{ base: "column", sm: "row" }}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg={"brand.500"}
                _hover={{ bg: "brand.600" }}
                leftIcon={<FaShoppingBag />}
              >
                {language === "en" ? "Shop Now" : t("home.shopNow")}
              </Button>
              <Button
                as={GatsbyLink}
                to="/about"
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                variant={"outline"}
                colorScheme="brand"
                leftIcon={<FaHeart />}
              >
                {language === "en" ? "About Us" : t("home.aboutUs")}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Video Section */}
      <Box py={16} bg="white">
        <Container maxW={"4xl"}>
          <VStack spacing={8}>
            <Heading
              fontSize={{ base: "2xl", sm: "3xl" }}
              textAlign="center"
              color={"brand.700"}
            >
              Everyday Luxury
            </Heading>
            <Box
              w="full"
              rounded="lg"
              overflow="hidden"
              boxShadow="xl"
              borderWidth="1px"
              borderColor="brand.100"
            >
              <AspectRatio maxW="100%" ratio={16 / 9}>
                <video controls poster="/videos/poster-image.jpg">
                  <source
                    src="/videos/self-beauty-process.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            </Box>
            <Text
              color={"gray.600"}
              maxW={"3xl"}
              fontSize={{ base: "md", md: "lg" }}
              lineHeight={1.8}
              textAlign="center"
            >
              Inspired by nature
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxW={"6xl"} py={16}>
        <VStack spacing={12}>
          <Heading
            fontSize={{ base: "2xl", sm: "3xl" }}
            textAlign="center"
            color={"brand.700"}
          >
            {t("home.products.title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="full">
            {FEATURED_PRODUCTS.map((product) => (
              <Feature
                key={product.id}
                icon={product.icon}
                title={language === "en" ? product.title : product.thaiTitle}
                text={
                  language === "en"
                    ? product.description
                    : product.thaiDescription
                }
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Our Philosophy */}
      <Box bg="brand.100" py={16}>
        <Container maxW={"5xl"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={6}>
              <Heading color="brand.700">Our Philosophy</Heading>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                At Self, we believe in the power of nature and traditional Thai
                wisdom. We carefully select ingredients from the best sources in
                Thailand and manufacture with attention to every step to ensure
                the highest quality products.
              </Text>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                We care about every detail, from selecting safe ingredients,
                avoiding animal testing, to using environmentally friendly
                packaging, because we believe that true beauty must come with
                responsibility.
              </Text>
              <Button variant="outline" colorScheme="brand" rounded="full">
                Read More
              </Button>
            </VStack>
            <Flex align="center" justify="center">
              <Box
                w="full"
                h="350px"
                bg="accent.teal"
                rounded="lg"
                boxShadow="lg"
                position="relative"
                overflow="hidden"
              >
                {/* Placeholder for product image */}
                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="white"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  Product Image
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxW={"6xl"} py={16}>
        <VStack spacing={10}>
          <Heading color="brand.700">What Our Customers Say</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[1, 2, 3].map((i) => (
              <Box
                key={i}
                bg="white"
                p={8}
                rounded="lg"
                boxShadow="sm"
                borderColor="brand.100"
                borderWidth="1px"
              >
                <VStack spacing={4} align="start">
                  <Text fontSize="lg" fontStyle="italic" color="gray.600">
                    "I've tried many brands, but Self products are the best. My
                    skin is smoother and feels moisturized all day long."
                  </Text>
                  <Flex w="full">
                    <Box
                      bg="brand.200"
                      w={10}
                      h={10}
                      rounded="full"
                      mr={3}
                    ></Box>
                    <Box>
                      <Text fontWeight="bold">Napha</Text>
                      <Text fontSize="sm" color="gray.500">
                        Regular Customer
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Self | Natural Beauty Products</title>;
