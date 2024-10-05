import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Spacer,
  Link,
  Flex,
  Image,
  CardBody,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react';

function App() {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        bg="maroon"
        color="white"
        p={4}
        alignItems="center"
        position="fixed"
        width="100%"
      >
        <Heading size="lg">CSCI 2021 TA FAQ</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#about" _hover={{ textDecoration: 'none', color: 'teal.300' }}>About</Link>
          <Link href="#faq" _hover={{ textDecoration: 'none', color: 'teal.300' }}>Story</Link>
          <Link href="#contact" _hover={{ textDecoration: 'none', color: 'teal.300' }}>FAQ</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box p={200} textAlign="center">
        <Container maxW="container.md">
          <VStack spacing={4}>
            <Heading size="4xl" bgGradient='linear(to-l, maroon, gold)' bgClip='text'>CSCI 2021 FAQ Site</Heading>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="about" py={20}>
        <Container maxW="container.md" textAlign="center">
          <Heading size="xl" mb={8}>About this Website</Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            What this learning resource aims to help with
          </Text>
          <HStack spacing={6} justifyContent="center">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Service One</Heading>
              <Text mt={4}>Description of service one.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Service Two</Heading>
              <Text mt={4}>Description of service two.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Service Two</Heading>
              <Text mt={4}>Description of service two.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Service Two</Heading>
              <Text mt={4}>Description of service two.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Service Two</Heading>
              <Text mt={4}>Description of service two.</Text>
            </Box>
          </HStack>
        </Container>
      </Box>

      <Box
        p = {5}
        bg="white"
        width="fit-content"
        mx="auto"
        my={8}
      >
        <Flex align="center" wrap="wrap" jusify="center" direction={{ base: 'column', md: 'row' }}>
          <Image
            src="https://via.placeholder.com/400x300"
            alt="Panel Image"
            rounded="lg"
            mr={{ md: 8 }}
          />
          <Text fontSize="xl" mt={{ base: 4, md: 0 }}>This is a panel with image content.</Text>
        </Flex>
      </Box>

      <Box
        p={5}
        bg="white"
        width="fit-content"
        mx="auto"
        my="auto"
      >
        <Flex align="center" direction={{ base: 'column', md: 'row-reverse' }}>
          <Image
            src="https://via.placeholder.com/400x300"
            alt="Panel Image"
            rounded="lg"
            ml={{ md: 8 }}
          />
          <Text fontSize="xl" mt={{ base: 4, md: 0 }}>This is a  image content.</Text>
        </Flex>
      </Box>


      <Box p={8} bg="white">
        <Container maxW="container.md" textAlign="center">
          <Heading p={10}>Some FAQs</Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Accordion 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Accordion 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Nulla facilisi. Phasellus at turpis ac nibh mattis tincidunt.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="maroon" color="white" py={8}>
        <Container maxW="container.md" textAlign="center">
          <Text>&copy; CSCI 2021 TA FAQ</Text>
        </Container>
      </Box>
    </Box>
  );
}

export default App;

