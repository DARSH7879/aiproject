export function preprocessSymptoms(selectedSymptoms) {
  // In a real application, this would transform symptoms into model input format
  // For now, we'll just return the selected symptoms
  return selectedSymptoms;
}

export function normalizeSymptomData(data) {
  // Utility function to normalize symptom data
  return data.map(item => ({
    ...item,
    value: item.value / 100
  }));
}