import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image, Select } from '@chakra-ui/react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [foodPreference, setFoodPreference] = useState('');

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleFileChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="teal.50">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" color="teal.700">Welcome to Tropical Paradise</Heading>
        {step === 1 && (
          <Box width="100%">
            <Text fontSize="xl" mb={4} color="teal.600">What's your name?</Text>
            <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </Box>
        )}
        {step === 2 && (
          <Box width="100%">
            <Text fontSize="xl" mb={4} color="teal.600">Upload your profile picture</Text>
            <Input type="file" onChange={handleFileChange} />
            {profilePicture && <Image src={profilePicture} alt="Profile Picture" boxSize="150px" mt={4} />}
          </Box>
        )}
        {step === 3 && (
          <Box width="100%">
            <Text fontSize="xl" mb={4} color="teal.600">Select your food preferences</Text>
            <Select placeholder="Select option" value={foodPreference} onChange={(e) => setFoodPreference(e.target.value)}>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </Select>
          </Box>
        )}
        <Flex width="100%" justifyContent="space-between">
          {step > 1 && <Button onClick={handlePrev} colorScheme="teal" variant="outline">Back</Button>}
          {step < 3 && <Button onClick={handleNext} colorScheme="teal">Next</Button>}
          {step === 3 && <Button colorScheme="teal">Finish</Button>}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Onboarding;