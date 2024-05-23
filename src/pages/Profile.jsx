import React from 'react';
import { Box, Container, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { name, profilePicture, foodPreference } = location.state || {};

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" color="teal.700">Your Profile</Heading>
        <Box width="100%" textAlign="center">
          <Text fontSize="xl" mb={4} color="teal.600">Name: {name}</Text>
          {profilePicture && <Image src={profilePicture} alt="Profile Picture" boxSize="150px" mb={4} />}
          <Text fontSize="xl" mb={4} color="teal.600">Food Preference: {foodPreference}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Profile;