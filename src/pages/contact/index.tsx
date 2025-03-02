import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactHero = () => {
  const bgGradient = "linear(to-b, brand.50, white)";
  
  return (
    <Box
      bg="brand.50"
      bgGradient={bgGradient}
      pt={16}
      pb={10}
      borderBottomWidth="1px"
      borderBottomColor="brand.100"
    >
      <Container maxW="5xl">
        <VStack spacing={6} textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="brand.700"
          >
            Contact Us
          </Heading>
          
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="3xl"
            mx="auto"
            lineHeight="1.8"
          >
            We're here to answer your questions and hear your feedback about our products
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const ContactInfo = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h3" size="md" color="brand.700">
        Get In Touch
      </Heading>
      
      <VStack spacing={4} align="start">
        <HStack>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            rounded="full"
            bg="brand.100"
            color="brand.600"
          >
            <Icon as={FaEnvelope} />
          </Flex>
          <Box>
            <Text fontWeight="medium">Email</Text>
            <Text color="gray.600">hello@self.co.th</Text>
          </Box>
        </HStack>
        
        <HStack>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            rounded="full"
            bg="brand.100"
            color="brand.600"
          >
            <Icon as={FaPhone} />
          </Flex>
          <Box>
            <Text fontWeight="medium">Phone</Text>
            <Text color="gray.600">+66 2 123 4567</Text>
          </Box>
        </HStack>
        
        <HStack>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            rounded="full"
            bg="brand.100"
            color="brand.600"
          >
            <Icon as={FaMapMarkerAlt} />
          </Flex>
          <Box>
            <Text fontWeight="medium">Address</Text>
            <Text color="gray.600">123 Sukhumvit Rd, Bangkok 10110, Thailand</Text>
          </Box>
        </HStack>
        
        <HStack>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            rounded="full"
            bg="brand.100"
            color="brand.600"
          >
            <Icon as={FaClock} />
          </Flex>
          <Box>
            <Text fontWeight="medium">Business Hours</Text>
            <Text color="gray.600">Monday - Friday: 9:00 AM - 5:00 PM</Text>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

const ContactForm = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h3" size="md" color="brand.700">
        Send Us a Message
      </Heading>
      
      <VStack as="form" spacing={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input 
              placeholder="Your first name" 
              bg="white"
              borderColor="brand.200"
              _hover={{ borderColor: "brand.300" }}
              _focus={{ borderColor: "brand.400" }}
            />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input 
              placeholder="Your last name" 
              bg="white"
              borderColor="brand.200"
              _hover={{ borderColor: "brand.300" }}
              _focus={{ borderColor: "brand.400" }}
            />
          </FormControl>
        </SimpleGrid>
        
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            placeholder="Your email address"
            bg="white"
            borderColor="brand.200"
            _hover={{ borderColor: "brand.300" }}
            _focus={{ borderColor: "brand.400" }}
          />
        </FormControl>
        
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input 
            placeholder="Your phone number (optional)"
            bg="white"
            borderColor="brand.200"
            _hover={{ borderColor: "brand.300" }}
            _focus={{ borderColor: "brand.400" }}
          />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Your message or question"
            rows={5}
            bg="white"
            borderColor="brand.200"
            _hover={{ borderColor: "brand.300" }}
            _focus={{ borderColor: "brand.400" }}
          />
        </FormControl>
        
        <Button
          alignSelf="flex-start"
          bg="brand.500"
          color="white"
          size="lg"
          rounded="md"
          _hover={{ bg: "brand.600" }}
          px={8}
          mt={2}
        >
          Send Message
        </Button>
      </VStack>
    </VStack>
  );
};

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <ContactHero />
      
      <Container maxW="6xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          <ContactInfo />
          <ContactForm />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Us | Self Natural Beauty Products</title>;