import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  VStack,
  Link,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { HeadFC, Link as GatsbyLink, PageProps } from "gatsby";
import * as React from "react";
import { FaLeaf, FaSeedling, FaHeart, FaRecycle, FaMugHot, FaShoppingBag } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";

const AboutHero = () => {
  const bgGradient = "linear(to-b, brand.50, white)";
  const accentColor = "brand.700";
  const textColor = "gray.700";

  return (
    <Box
      bg="brand.50"
      bgGradient={bgGradient}
      pt={16}
      pb={10}
      borderBottomWidth="1px"
      borderBottomColor="brand.100"
    >
      <Stack spacing={6} textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={accentColor}
          lineHeight="1.2"
        >
          About Us
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={textColor}
          maxW="3xl"
          mx="auto"
          lineHeight="1.8"
        >
          Discover the secrets of natural beauty products carefully crafted with hand-selected ingredients and attention to every detail
        </Text>
      </Stack>
    </Box>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Box
      p={5}
      shadow="sm"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      borderColor="brand.100"
      transition="transform 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "md",
      }}
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="brand.500"
        mb={4}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading fontSize="xl" mb={2} color="brand.700">{title}</Heading>
      <Text color="gray.600">{text}</Text>
    </Box>
  );
};

const AboutPage: React.FC<PageProps> = () => {
  const textColor = "gray.700";
  const sectionBg = "brand.100";
  
  return (
    <>
      <AboutHero />
      
      <Container maxW="6xl" py={12}>
        <VStack spacing={12}>
          {/* Company Overview */}
          <Box w="full">
            <Heading
              as="h2"
              size="lg"
              mb={6}
              textAlign="center"
              color="brand.700"
            >
              Our Story
            </Heading>
            
            <Text fontSize="lg" lineHeight="tall" textAlign="center" maxW="3xl" mx="auto" color={textColor}>
              Self was founded in 2022 by a team of chemists and Thai herbal specialists passionate about 
              combining ancient Thai wisdom with modern innovation to create skincare products that are safe, 
              effective, and environmentally friendly, allowing you to experience beauty that truly comes from nature.
            </Text>
          </Box>
          
          {/* Features */}
          <Box w="full" py={10} bg={sectionBg} borderRadius="lg">
            <Container maxW="5xl">
              <Heading
                as="h2"
                size="lg"
                mb={10}
                textAlign="center"
                color="brand.700"
              >
                Our Values
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Feature 
                  icon={FaLeaf}
                  title="Pure Nature"
                  text="We use natural extracts free from harmful chemicals, without parabens, silicones, or synthetic fragrances, for products that are gentle and safe for your skin."
                />
                <Feature 
                  icon={FaMugHot}
                  title="Thai Wisdom"
                  text="Our products blend traditional Thai formulas with modern innovation, allowing you to experience the power of wisdom accumulated over generations."
                />
                <Feature 
                  icon={FaHeart}
                  title="Meticulous Care"
                  text="We are meticulous in selecting ingredients, production, testing, and packaging to ensure you receive products of the highest quality."
                />
                <Feature 
                  icon={FaRecycle}
                  title="Eco-Friendly"
                  text="We are committed to reducing environmental impact with biodegradable packaging and sustainable production processes, because we believe beauty should not harm the planet."
                />
              </SimpleGrid>
            </Container>
          </Box>
          
          {/* Our Process */}
          <Box w="full" my={6}>
            <Heading
              as="h2"
              size="lg"
              mb={6}
              textAlign="center"
              color="brand.700"
            >
              Our Process
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my={8}>
              <VStack align="start" spacing={4}>
                <Heading size="md" color="brand.600">Ingredient Selection</Heading>
                <Text fontSize="md" lineHeight="tall" color={textColor}>
                  We select ingredients from toxic-free cultivation sources in Thailand, working with local communities 
                  experienced in growing herbs and organic plants for generations. Every ingredient undergoes rigorous 
                  quality checks before being used in our products.
                </Text>
              </VStack>
              
              <Flex align="center" justify="center">
                <Box 
                  w="full" 
                  h="200px" 
                  bg="accent.emerald" 
                  rounded="lg"
                  position="relative"
                  overflow="hidden"
                >
                  <Text 
                    position="absolute" 
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)" 
                    color="white" 
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Ingredient Selection Image
                  </Text>
                </Box>
              </Flex>
            </SimpleGrid>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my={8}>
              <Flex align="center" justify="center" order={{ base: 1, md: 2 }}>
                <Box 
                  w="full" 
                  h="200px" 
                  bg="accent.teal" 
                  rounded="lg"
                  position="relative"
                  overflow="hidden"
                >
                  <Text 
                    position="absolute" 
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)" 
                    color="white" 
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Production Image
                  </Text>
                </Box>
              </Flex>
              
              <VStack align="start" spacing={4} order={{ base: 2, md: 1 }}>
                <Heading size="md" color="brand.600">Modern Production Technology</Heading>
                <Text fontSize="md" lineHeight="tall" color={textColor}>
                  Our products are manufactured in GMP-certified facilities using state-of-the-art technology 
                  under the supervision of a team of scientists and Thai herbal experts to ensure that the 
                  natural properties of the herbs remain fully intact.
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
          
          {/* Join Us */}
          <Box w="full" py={10} bg={sectionBg} borderRadius="lg" textAlign="center">
            <Heading
              as="h2"
              size="lg"
              mb={6}
              color="brand.700"
            >
              Join Us
            </Heading>
            
            <Text fontSize="lg" maxW="2xl" mx="auto" mb={8} color={textColor}>
              Let your skin experience the power of nature and Thai wisdom
              with skincare products that perfectly balance Thai herbs and modern beauty innovation.
            </Text>
            
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
              <Button
                as={Link}
                href="#"
                leftIcon={<FaShoppingBag />}
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.600" }}
                size="lg"
                rounded="full"
              >
                Shop Now
              </Button>
              <Button
                as={GatsbyLink}
                to="/contact"
                variant="outline"
                colorScheme="brand"
                size="lg"
                rounded="full"
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Us | Self Natural Beauty Products</title>;