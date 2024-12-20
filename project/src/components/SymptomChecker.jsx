import React, { useState } from 'react';
import { 
  Box, 
  VStack,
  Button, 
  Text,
  Checkbox,
  CheckboxGroup,
  Heading,
  Alert,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { useDiseasePrediction } from '../hooks/useDiseasePrediction';
import { symptoms } from '../data/symptoms';
import { symptomCategories } from '../data/symptomCategories';

function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const { prediction, loading, error, predictDisease } = useDiseasePrediction();

  const handleSymptomChange = (selected) => {
    setSelectedSymptoms(selected);
  };

  const handlePredict = () => {
    predictDisease(selectedSymptoms);
  };

  // Group symptoms by category
  const groupedSymptoms = Object.values(symptomCategories).map(category => ({
    category,
    symptoms: symptoms.filter(symptom => symptom.category === category)
  }));

  return (
    <Box bg="white" p={6} borderRadius="lg" shadow="md">
      <VStack spacing={6} align="stretch">
        <Heading size="md">Select Your Symptoms</Heading>
        
        <CheckboxGroup 
          colorScheme="blue" 
          value={selectedSymptoms} 
          onChange={handleSymptomChange}
        >
          <Accordion allowMultiple>
            {groupedSymptoms.map(group => (
              <AccordionItem key={group.category}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="semibold">{group.category}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack align="start" spacing={2}>
                    {group.symptoms.map((symptom) => (
                      <Checkbox key={symptom.id} value={symptom.id}>
                        {symptom.name}
                      </Checkbox>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </CheckboxGroup>

        <Button
          colorScheme="blue"
          isLoading={loading}
          onClick={handlePredict}
          isDisabled={selectedSymptoms.length === 0}
        >
          Analyze Symptoms
        </Button>

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {prediction && (
          <Box mt={4} p={4} bg="blue.50" borderRadius="md">
            <Heading size="sm" mb={2}>Possible Conditions:</Heading>
            <Text>{prediction.disease}</Text>
            <Text mt={2} fontSize="sm" color="gray.600">
              Confidence: {(prediction.confidence * 100).toFixed(1)}%
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default SymptomChecker;