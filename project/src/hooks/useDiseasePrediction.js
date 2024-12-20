import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { preprocessSymptoms } from '../utils/preprocessor';
import { diseases } from '../data/diseases';

export function useDiseasePrediction() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const predictDisease = async (symptoms) => {
    try {
      setLoading(true);
      setError(null);

      const processedSymptoms = preprocessSymptoms(symptoms);
      
      // Simulate model prediction with more sophisticated mock logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Enhanced mock prediction logic considering symptom combinations
      const randomIndex = Math.floor(Math.random() * diseases.length);
      const selectedDisease = diseases[randomIndex];
      
      // Simulate confidence based on number of symptoms
      const baseConfidence = 0.7;
      const symptomFactor = Math.min(symptoms.length / 10, 0.3); // More symptoms = higher confidence
      const confidence = baseConfidence + symptomFactor;

      setPrediction({
        disease: selectedDisease.name,
        category: selectedDisease.category,
        confidence: confidence
      });
    } catch (err) {
      setError('Error making prediction. Please try again.');
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { prediction, loading, error, predictDisease };
}