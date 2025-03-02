import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  Tag,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { FaShoppingBag } from "react-icons/fa";

// Mock product data - in a real app this would come from your CMS or API
const PRODUCTS = [
  {
    id: "1",
    name: "Herbal Facial Serum",
    description: "A rejuvenating facial serum with Centella Asiatica and Aloe Vera",
    price: "$34.99",
    image: "accent.emerald",
    tags: ["Facial Care", "Anti-aging"]
  },
  {
    id: "2",
    name: "Thai Herbal Mask",
    description: "A nourishing mask with traditional Thai herbs for deep hydration",
    price: "$24.99",
    image: "accent.sapphire",
    tags: ["Facial Care", "Hydrating"]
  },
  {
    id: "3",
    name: "Botanical Body Cream",
    description: "Rich body cream with natural oils and Thai botanicals",
    price: "$29.99",
    image: "accent.teal",
    tags: ["Body Care", "Moisturizing"]
  },
  {
    id: "4",
    name: "Jasmine Hand Balm",
    description: "Thai jasmine scented hand balm for silky smooth hands",
    price: "$18.99",
    image: "accent.amber",
    tags: ["Hand Care", "Scented"]
  },
  {
    id: "5",
    name: "Lemongrass Body Scrub",
    description: "Natural exfoliating scrub with lemongrass and coconut",
    price: "$22.99",
    image: "brand.400",
    tags: ["Body Care", "Exfoliating"]
  },
  {
    id: "6",
    name: "Coconut Hair Oil",
    description: "Nourishing hair oil with organic coconut and herbs",
    price: "$26.99",
    image: "accent.ruby",
    tags: ["Hair Care", "Nourishing"]
  },
];

const ProductHero = () => {
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
            Our Products
          </Heading>
          
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="3xl"
            mx="auto"
            lineHeight="1.8"
          >
            Discover our range of natural skincare products made with Thai botanical ingredients and modern beauty innovation
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    tags: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor="brand.100"
      overflow="hidden"
      bg="white"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "md",
      }}
    >
      <Box 
        height="200px" 
        bg={product.image} 
        position="relative"
      >
        {/* In a real app, this would be an actual image */}
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          fontWeight="bold"
          fontSize="lg"
        >
          Product Image
        </Text>
      </Box>
      
      <Box p={5}>
        <HStack spacing={2} mb={2}>
          {product.tags.map(tag => (
            <Tag key={tag} size="sm" bg="brand.100" color="brand.700">
              {tag}
            </Tag>
          ))}
        </HStack>
        
        <Heading
          as="h3"
          fontSize="xl"
          mb={2}
          color="brand.700"
        >
          {product.name}
        </Heading>
        
        <Text color="gray.600" mb={4}>
          {product.description}
        </Text>
        
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="lg">
            {product.price}
          </Text>
          
          <Button
            size="sm"
            bg="brand.500"
            color="white"
            leftIcon={<FaShoppingBag />}
            _hover={{ bg: "brand.600" }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const ProductsPage: React.FC<PageProps> = () => {
  return (
    <>
      <ProductHero />
      
      <Container maxW="6xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Products | Self Natural Beauty Products</title>;