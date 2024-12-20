import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="blue.600" color="white" py={6} px={8}>
      <img 
        src="https://img.freepik.com/premium-photo/friendly-healthcare-robot-with-stethoscope-cross-its-chest-ready-assist-you_856795-70570.jpg" 
        alt="Logo" 
        style={{ display: 'block', margin: '0 auto', height: '100px', borderRadius: '55%' }} 
      />
      <Heading size="xl" style={{ textAlign: 'center' }}>Sympto-Predict</Heading>
      <Text mt={2} style={{ textAlign: 'center' }}>AI-powered symptom analysis and disease prediction</Text>
    </Box>
  );
}

export default Header;
