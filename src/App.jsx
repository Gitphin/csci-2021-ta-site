import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  HStack,
  Spacer,
  Link,
  Flex,
  Image,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react';

function App() {
  return (
    <Box>
      {/* Nav Bar */}
      <Flex
        as="nav"
        bg="maroon"
        color="white"
        p={4}
        alignItems="center"
        position="fixed"
        width="100%"
      >
        <Link
          href="https://twin-cities.umn.edu/"
        >
          <Image alt="Logo"
            boxSize="12"
            mr={{base: 8, md: 4}}
            mt={1}
            src='/UMN-Logo.png' /></Link>
        <Heading size="lg">CSCI 2021 TA</Heading>
        <Spacer />
        <HStack spacing={{ base: 0, md: 8 }}>
          <Link
            href="#about"
            p={4}
            borderRadius="md"
            fontWeight="bold"
            _hover={{ textDecoration: 'none', color: 'gold', bg: 'maroon' }}
            _active={{ color: 'maroon', bg: 'maroon.500' }}
            transition="all 0.2s ease-in-out"
          >
            About</Link>

          <Link
            href="#story"
            p={4}
            borderRadius="md"
            fontWeight="bold"
            _hover={{ textDecoration: 'none', color: 'gold', bg: 'maroon' }}
            _active={{ color: 'maroon', bg: 'maroon.500' }}
            transition="all 0.2s ease-in-out"
          >
            Videos</Link>

          <Link
            href="#faq"
            p={4}
            borderRadius="md"
            fontWeight="bold"
            _hover={{ textDecoration: 'none', color: 'gold', bg: 'maroon' }}
            _active={{ color: 'maroon', bg: 'maroon.500' }}
            transition="all 0.2s ease-in-out"
          >
            FAQ</Link>
        </HStack>
      </Flex>

      {/* About */}
      <Box id="about" pt={160} textAlign="center">
        <Container maxW="container.md">
          <VStack spacing={4}>
            <Heading size="4xl" bgGradient='linear(to-l, maroon, gold)' bgClip='text'>CSCI 2021 TA Site</Heading>
          </VStack>
        </Container>
      </Box>
      {/* About - Cards */}
      <Box py={20}>
        <Container maxW="container.md" textAlign="center">
          <Heading color="maroon" size="xl" mt={10} mb={2}>About this Website</Heading>
          <Text fontSize="lg" color="gray" mb={4}>
            We hope this learning resource will help incoming TAs with the following
          </Text>
          <Stack spacing={6}
            justifyContent="center"
            direction={{ base: "column", md: "row" }} >
            <Box p={10} shadow="md" borderWidth="1px">
              <Heading fontSize="xl" textAlign={{ base: "center", md: "left" }}>Answer your Questions</Heading>
              <Text textAlign={{ base: "center", md: "left" }} w={{ base: "100%", md: "160px" }} mt={4}>Included below are some frequently asked questions by incoming CSCI 2021 TA's.</Text>
            </Box>
            <Box p={10} shadow="md" borderWidth="1px">
              <Heading fontSize="xl" textAlign={{ base: "center", md: "left" }}>Learn from Experience</Heading>
              <Text textAlign={{ base: "center", md: "left" }} w={{ base: "100%", md: "160px" }} mt={4}>We have provided videos that give you insight for our TAships in this course.</Text>
            </Box>
            <Box p={10} shadow="md" borderWidth="1px">
              <Heading fontSize="xl" textAlign={{ base: "center", md: "left" }}>Lend a Helping Hand</Heading>
              <Text textAlign={{ base: "center", md: "left" }} w={{ base: "100%", md: "160px" }} mt={4}>It is normal to be nervous! We aim to give you some help going in. You got this!</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Experience */}
      <Box id="story" borderWidth="1px" shadow="inner" pb={20}>
        <Box textAlign="center">
          <Heading bgGradient='linear(to-l, gold, maroon)' bgClip='text' size="xl" mt={20}>Experience from CSCI 2021 TAs</Heading>
        </Box>
        <Box
          id="story"
          p={5}
          mx="auto"
          maxW="1000"
          width="90%"
          my={8}
          shadow="md"
          borderWidth="1px"
        >
          <Flex align="center" direction={{ base: 'column', md: 'row' }}>
            <Image
              src="https://via.placeholder.com/400x300"
              alt="Panel Image"
              rounded="lg"
              mr={{ md: 10 }}
              mb={{ base: 4, md: 0 }}
            />

            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading color="maroon" size="xl" ml={{ base: 0, md: 50 }} mb={4}>
                Video 1 People / Topic
              </Heading>
              <Text fontSize="xl" maxW="100%" ml={{ base: 0, md: 50 }} mb={20}>
                Description of video and topic, will be short I think
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          id="story"
          p={5}
          mx="auto"
          maxW="1000"
          width="90%"
          my={8}
          shadow="md"
          borderWidth="1px"
        >

          <Flex align="center" direction={{ base: 'column', md: 'row-reverse' }}>
            <Image
              src="https://via.placeholder.com/400x300"
              alt="Panel Image"
              rounded="lg"
              ml={{ md: 10 }}
              mb={{ base: 4, md: 0 }}
            />

            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading color="maroon" size="xl" mr={{ base: 0, md: 50 }} mb={4}>
                Video 2 People / Topic
              </Heading>
              <Text fontSize="xl" maxW="100%" mr={{ base: 0, md: 50 }} mb={20}>
                Description of video and topic, will be short I think
              </Text>
            </Box>

          </Flex>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Spacer id="faq" />
      <Box textAlign="center">
        <Heading bgGradient='linear(to-l, maroon, gold)' bgClip='text' size="xl" mt={90}>CSCI 2021 TA FAQs</Heading>
      </Box>
      <Box p={8} bg="white" mt={0} mb={160}>
        <Container pb={10} shadow="md" borderWidth="1px" maxW="1000" width="100%" textAlign="center">
          <Heading color="maroon" pt={10} pb={2}>Don't see your question? Reach out!</Heading>

          <Text fontSize="lg" color="gray" mb={4}>
            We hope to help and add on to this website! Please <Link color="gold" href="mailto:holim004@umn.edu " _hover={{ textDecoration: 'none', color: 'gold' }}>contact us</Link> for comments, suggestions, or concerns!
          </Text>
          <Accordion gap={2} borderWidth="1px" allowMultiple>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
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
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left">
                  Accordion 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Nulla facilisi. Phasellus at turpis ac nibh mattis tincidunt.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left">
                  Accordion 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Nulla facilisi. Phasellus at turpis ac nibh mattis tincidunt.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left">
                  Accordion 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Nulla facilisi. Phasellus at turpis ac nibh mattis tincidunt.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
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
          <Link fontSize="xl" href="https://github.com/Gitphin/csci-2021-ta-site" _hover={{ textDecoration: 'none', color: 'gold' }}>CSCI 2021 TA FAQ GitHub</Link>
          <Text> Project by Alek Holiman, Anlei Chen, Curtis Kokuloku, Umut Tulay </Text>
        </Container>
      </Box>
    </Box >
  );
}

export default App;

