import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HeadFC, PageProps } from "gatsby";
import * as React from "react";

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

const HowToUsePage: React.FC<PageProps> = () => {
  return (
    <>
      <HowToUseHero />
      
      <Container maxW="4xl" py={12}>
        <VStack spacing={10} align="stretch">
          <Heading as="h2" size="lg" color="brand.700" textAlign="center" mb={6}>
            Product Application Guides
          </Heading>
          
          <Accordion allowMultiple defaultIndex={[0]}>
            <AccordionItem borderColor="brand.100">
              <h3>
                <AccordionButton py={4}>
                  <Box flex="1" textAlign="left" fontWeight="600" fontSize="lg">
                    Herbal Facial Serum
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={6} color="gray.700">
                <Text mb={4}>
                  Our Herbal Facial Serum is best applied to clean, slightly damp skin. Follow these steps for optimal results:
                </Text>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem>Cleanse your face with a gentle cleanser and pat dry</ListItem>
                  <ListItem>Apply 3-4 drops of serum to your palms</ListItem>
                  <ListItem>Gently press and pat the serum onto your face and neck</ListItem>
                  <ListItem>Allow to absorb for 1-2 minutes before applying moisturizer</ListItem>
                  <ListItem>For best results, use morning and evening</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor="brand.100">
              <h3>
                <AccordionButton py={4}>
                  <Box flex="1" textAlign="left" fontWeight="600" fontSize="lg">
                    Thai Herbal Mask
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={6} color="gray.700">
                <Text mb={4}>
                  Our Thai Herbal Mask should be applied to clean skin 1-2 times per week:
                </Text>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem>Begin with a freshly cleansed face</ListItem>
                  <ListItem>Apply a generous layer to your face, avoiding the eye area</ListItem>
                  <ListItem>Leave on for 15-20 minutes</ListItem>
                  <ListItem>Rinse thoroughly with lukewarm water</ListItem>
                  <ListItem>Follow with serum and moisturizer</ListItem>
                  <ListItem>Store in a cool, dry place for maximum freshness</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor="brand.100">
              <h3>
                <AccordionButton py={4}>
                  <Box flex="1" textAlign="left" fontWeight="600" fontSize="lg">
                    Botanical Body Cream
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={6} color="gray.700">
                <Text mb={4}>
                  For best results with our Botanical Body Cream:
                </Text>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem>Apply to clean, dry skin after bathing</ListItem>
                  <ListItem>Use gentle circular motions to massage into skin</ListItem>
                  <ListItem>Pay special attention to dry areas like elbows and knees</ListItem>
                  <ListItem>Allow to absorb fully before dressing</ListItem>
                  <ListItem>Use daily for continuous hydration</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor="brand.100">
              <h3>
                <AccordionButton py={4}>
                  <Box flex="1" textAlign="left" fontWeight="600" fontSize="lg">
                    Lemongrass Body Scrub
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={6} color="gray.700">
                <Text mb={4}>
                  To use our Lemongrass Body Scrub effectively:
                </Text>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem>Use in the shower after cleansing</ListItem>
                  <ListItem>Apply to damp skin in gentle circular motions</ListItem>
                  <ListItem>Massage for 2-3 minutes, focusing on rough areas</ListItem>
                  <ListItem>Rinse thoroughly with warm water</ListItem>
                  <ListItem>Follow with Botanical Body Cream for maximum hydration</ListItem>
                  <ListItem>Use 1-2 times per week for best results</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Box bg="brand.50" p={8} borderRadius="lg" mt={8}>
            <Heading as="h3" size="md" color="brand.700" mb={4}>
              General Tips for All Products
            </Heading>
            
            <UnorderedList spacing={3} color="gray.700">
              <ListItem>
                <Text fontWeight="medium">Patch Test New Products</Text>
                <Text fontSize="sm">Always test new products on a small area of skin before full application, especially if you have sensitive skin.</Text>
              </ListItem>
              
              <ListItem>
                <Text fontWeight="medium">Storage</Text>
                <Text fontSize="sm">Store all products in a cool, dry place away from direct sunlight to maintain their effectiveness.</Text>
              </ListItem>
              
              <ListItem>
                <Text fontWeight="medium">Natural Separation</Text>
                <Text fontSize="sm">Some natural products may show slight separation. This is normal - simply shake before use.</Text>
              </ListItem>
              
              <ListItem>
                <Text fontWeight="medium">Shelf Life</Text>
                <Text fontSize="sm">For maximum effectiveness, use products within 12 months of opening.</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default HowToUsePage;

export const Head: HeadFC = () => <title>How To Use | Self Natural Beauty Products</title>;