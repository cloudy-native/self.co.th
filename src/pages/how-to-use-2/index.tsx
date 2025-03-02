import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { FaCheckCircle, FaLeaf, FaShower, FaMoon, FaSun } from "react-icons/fa";

const HowToUseHero = () => {
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
            How To Use
          </Heading>
          
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="3xl"
            mx="auto"
            lineHeight="1.8"
          >
            Get the most out of your Self products with our application guides and tips
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const ProductGuide = ({ title, description, steps, icon }) => {
  return (
    <Card borderColor="brand.100" shadow="sm">
      <CardBody p={6}>
        <VStack align="start" spacing={4}>
          <Box 
            borderRadius="full" 
            bg="brand.100" 
            p={3} 
            color="brand.600"
          >
            <Icon as={icon} boxSize={6} />
          </Box>
          
          <Heading as="h3" size="md" color="brand.700">
            {title}
          </Heading>
          
          <Text color="gray.600">
            {description}
          </Text>
          
          <Box w="full">
            <Text fontWeight="medium" mb={2}>
              Application Steps:
            </Text>
            <List spacing={2}>
              {steps.map((step, index) => (
                <ListItem key={index} display="flex" alignItems="start">
                  <ListIcon as={FaCheckCircle} color="brand.500" mt="5px" />
                  <Text>{step}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
};

const HowToUsePage: React.FC<PageProps> = () => {
  const products = [
    {
      title: "Facial Serum",
      description: "Our hydrating serum with Centella Asiatica extract rejuvenates and reduces fine lines.",
      icon: FaLeaf,
      steps: [
        "Cleanse face thoroughly and pat slightly damp",
        "Apply 3-4 drops to fingertips",
        "Gently press and pat onto face and neck",
        "Allow to absorb before applying moisturizer",
        "Use morning and evening for best results"
      ]
    },
    {
      title: "Face Mask",
      description: "A nourishing mask that restores moisture with natural Thai herbs.",
      icon: FaSun,
      steps: [
        "Apply to clean face, avoiding the eye area",
        "Leave on for 15-20 minutes",
        "Rinse thoroughly with lukewarm water",
        "Follow with serum and moisturizer",
        "Use 1-2 times weekly"
      ]
    },
    {
      title: "Body Cream",
      description: "Rich body cream that hydrates and nourishes with natural botanicals.",
      icon: FaMoon,
      steps: [
        "Apply to clean, dry skin after bathing",
        "Use circular motions to massage into skin",
        "Focus on dry areas like elbows and knees",
        "Allow to absorb before dressing",
        "Use daily for continuous hydration"
      ]
    },
    {
      title: "Body Scrub",
      description: "Natural exfoliating scrub with lemongrass to reveal smoother skin.",
      icon: FaShower,
      steps: [
        "Use in the shower on damp skin",
        "Apply in gentle circular motions",
        "Massage for 2-3 minutes",
        "Rinse thoroughly with warm water",
        "Follow with body cream",
        "Use 1-2 times weekly"
      ]
    }
  ];

  return (
    <>
      <HowToUseHero />
      
      <Container maxW="6xl" py={12}>
        <VStack spacing={12}>
          <Heading size="lg" color="brand.700" textAlign="center">
            Product Application Guides
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="full">
            {products.map((product, index) => (
              <ProductGuide key={index} {...product} />
            ))}
          </SimpleGrid>
          
          <Box 
            bg="brand.50"
            borderRadius="lg" 
            p={8} 
            width="full"
            borderWidth="1px"
            borderColor="brand.100"
          >
            <Heading as="h3" size="md" color="brand.700" mb={6}>
              General Tips for All Products
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <List spacing={4}>
                <ListItem display="flex">
                  <ListIcon as={FaCheckCircle} color="brand.500" mt="5px" />
                  <Box>
                    <Text fontWeight="medium">Patch Test</Text>
                    <Text fontSize="sm" color="gray.600">Always test new products on a small area of skin first, especially if you have sensitive skin.</Text>
                  </Box>
                </ListItem>
                
                <ListItem display="flex">
                  <ListIcon as={FaCheckCircle} color="brand.500" mt="5px" />
                  <Box>
                    <Text fontWeight="medium">Storage</Text>
                    <Text fontSize="sm" color="gray.600">Store all products in a cool, dry place away from direct sunlight to maintain their effectiveness.</Text>
                  </Box>
                </ListItem>
              </List>
              
              <List spacing={4}>
                <ListItem display="flex">
                  <ListIcon as={FaCheckCircle} color="brand.500" mt="5px" />
                  <Box>
                    <Text fontWeight="medium">Natural Separation</Text>
                    <Text fontSize="sm" color="gray.600">Some natural products may show slight separation. Simply shake before use.</Text>
                  </Box>
                </ListItem>
                
                <ListItem display="flex">
                  <ListIcon as={FaCheckCircle} color="brand.500" mt="5px" />
                  <Box>
                    <Text fontWeight="medium">Shelf Life</Text>
                    <Text fontSize="sm" color="gray.600">For maximum effectiveness, use all products within 12 months of opening.</Text>
                  </Box>
                </ListItem>
              </List>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default HowToUsePage;

export const Head: HeadFC = () => <title>How To Use | Self Natural Beauty Products</title>;