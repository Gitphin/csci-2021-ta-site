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
        opacity="0.9"
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
            mr={{ base: 8, md: 4 }}
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
          p={5}
          mx="auto"
          maxW="1000"
          width="90%"
          my={8}
          shadow="md"
          borderWidth="1px"
        >
          <Flex align="center" direction={{ base: 'column', md: 'row' }}>
            <Box
              as="iframe"
              width={{ base: "90%", md: "800px" }}
              height="300px"
              src="https://www.youtube.com/embed/UJjBgU14hE0?si=Hpy01y7DUGQD0WS4"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              rounded="lg"
              mr={{ md: 10 }}
              mt={{ base: 10, md: 0 }}
              mb={{ base: 4, md: 0 }}
              border="none"
            />

            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading color="maroon" size="xl" ml={{ base: 0, md: 50 }} mb={4} mr={{ base: 0, md: 10 }}>
                Meet a CSCI 2021 TA
              </Heading>
              <Text fontSize="xl" maxW="100%" ml={{ base: 0, md: 50 }} mb={{ base: 10, md: 20 }} mr={{ base: 0, md: 10 }}>
                In this video you get the chance to hear from an experienced TA about how to handle some of the hardships of TAships!
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

            <Box
              as="iframe"
              width={{ base: "90%", md: "800px" }}
              height="300px"
              src="https://www.youtube.com/embed/Gebo6QhQv6s?si=Z5NL_LLDFDdh5fc_"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              rounded="lg"
              ml={{ md: 10 }}
              mt={{ base: 10, md: 0 }}
              mb={{ base: 4, md: 0 }}
              border="none"
            />

            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading color="maroon" size="xl" mr={{ base: 0, md: 50 }} mb={4} ml={{ base: 0, md: 10 }}>
                Being in hard situations
              </Heading>
              <Text fontSize="xl" maxW="100%" mr={{ base: 0, md: 50 }} mb={{ base: 10, md: 20 }} ml={{ base: 0, md: 10 }}>
                This video goes more in depth with some situations that may arise, effective techniques to use as a TA, and some helpful advice!
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
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What should I do to prepare for office hours and labs?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                For office hours, briefly review the lecture slides to refresh your understanding of the course content, especially if it has been a while since you took the course. Additionally, familiarize yourself with the project and lab write-ups, as many answers to student questions can be found there. For labs, your instructor may ask you to create some lab slides. Make sure to review the questions file and the lab code. While it’s not necessary for you to complete the lab, it is important to be familiar with the answers and code solutions.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How should I respond to regrade requests or complaints from students?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Be understanding but firm when addressing grading concerns. If you made a mistake while grading, apologize and correct the issue. If there isn’t an error in the grading, politely explain the student's issues and refer to the rubric when applicable. For any conceptual misunderstandings, clearly explain the concepts as best you can, and suggest that the student visit office hours if they are still confused.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I follow up with students after providing support or resources?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                If you need to follow up with a student, a common approach is to send them a quick email with the information they were seeking. If the follow-up includes a lot of details, you can invite them to stop by during office hours if they have the time. Additionally, checking in with the student during the weekly labs is also a good option.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are some common pitfalls to avoid as a new TA?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <li>Not managing time effectively during office hours</li>
                <li>Thinking that you have to know everything</li>
                <li>Underestimating grading time</li>
                <li>Not asking for help from the instructor when there is some confusion</li>
                <li>Not providing helpful feedback to students on the tests or projects</li>

              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I know if I am giving effective feedback to students?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Check in with the student to see if they understood your explanation and ask if they still have any questions. Pay attention to their body language and facial expressions—does it seem like things are clicking for them? If not, inquire about it. Sometimes, it can be helpful to ask the student to summarize your explanation in their own words.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I handle students who are hesitant to seek help or ask questions?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Be welcoming as much as possible considering the professionalism required in the role. If you are nice to students and make them feel not judged, they might feel more comfortable approaching you with their concerns. You can start the conversation by sharing how you felt the same difficulties as a student while taking that class, which can help normalize their experience.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I handle difficult students or conflicts in the class or during office hours?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Conflict management includes identifying, experiencing and handling the conflict. Keep in mind that understanding does not require agreement. Conflict can be caused by stress, overwhelm or control. As a TA, most of the conflicts arise due to grading issues or multiple false attempts by students. Remaining calm and addressing issues with empathy can help de-escalate situations. If that does not work, you should ask them to talk to the instructor.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: 'maroon', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I communicate effectively with students?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                To communicate effectively with students, it's important to establish trust. There are two ways of trust: affective trust and cognitive trust. Affective trust is that students think you are a “good person.” Cognitive trust is when they trust that you're competent. By building both types of trust, you can create positive learning environments where students feel comfortable asking questions and listening to your answers.
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

