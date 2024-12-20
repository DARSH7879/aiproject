import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import SymptomChecker from './components/SymptomChecker';
import Header from './components/Header';

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Container maxW="container.lg" py={8}>
        <SymptomChecker />
      </Container>
    </Box>
  );
}

export default App;