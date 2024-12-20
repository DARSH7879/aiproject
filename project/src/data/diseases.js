import { diseaseCategories as cat } from './diseaseCategories';

export const diseases = [
  // Respiratory Diseases
  { id: 'common_cold', name: 'Common Cold', category: cat.RESPIRATORY },
  { id: 'influenza', name: 'Influenza', category: cat.RESPIRATORY },
  { id: 'covid19', name: 'COVID-19', category: cat.RESPIRATORY },
  { id: 'bronchitis', name: 'Bronchitis', category: cat.RESPIRATORY },
  { id: 'pneumonia', name: 'Pneumonia', category: cat.RESPIRATORY },
  { id: 'asthma', name: 'Asthma', category: cat.RESPIRATORY },
  { id: 'copd', name: 'COPD', category: cat.RESPIRATORY },
  { id: 'tuberculosis', name: 'Tuberculosis', category: cat.RESPIRATORY },

  // Cardiovascular Diseases
  { id: 'hypertension', name: 'Hypertension', category: cat.CARDIOVASCULAR },
  { id: 'coronary_artery_disease', name: 'Coronary Artery Disease', category: cat.CARDIOVASCULAR },
  { id: 'arrhythmia', name: 'Arrhythmia', category: cat.CARDIOVASCULAR },
  { id: 'heart_failure', name: 'Heart Failure', category: cat.CARDIOVASCULAR },

  // Gastrointestinal Diseases
  { id: 'gastritis', name: 'Gastritis', category: cat.GASTROINTESTINAL },
  { id: 'peptic_ulcer', name: 'Peptic Ulcer', category: cat.GASTROINTESTINAL },
  { id: 'ibs', name: 'Irritable Bowel Syndrome', category: cat.GASTROINTESTINAL },
  { id: 'crohns', name: "Crohn's Disease", category: cat.GASTROINTESTINAL },
  { id: 'celiac', name: 'Celiac Disease', category: cat.GASTROINTESTINAL },

  // Neurological Diseases
  { id: 'migraine', name: 'Migraine', category: cat.NEUROLOGICAL },
  { id: 'epilepsy', name: 'Epilepsy', category: cat.NEUROLOGICAL },
  { id: 'parkinsons', name: "Parkinson's Disease", category: cat.NEUROLOGICAL },
  { id: 'multiple_sclerosis', name: 'Multiple Sclerosis', category: cat.NEUROLOGICAL },

  // Musculoskeletal Conditions
  { id: 'rheumatoid_arthritis', name: 'Rheumatoid Arthritis', category: cat.MUSCULOSKELETAL },
  { id: 'osteoarthritis', name: 'Osteoarthritis', category: cat.MUSCULOSKELETAL },
  { id: 'fibromyalgia', name: 'Fibromyalgia', category: cat.MUSCULOSKELETAL },
  { id: 'lupus', name: 'Lupus', category: cat.MUSCULOSKELETAL },

  // Dermatological Conditions
  { id: 'eczema', name: 'Eczema', category: cat.DERMATOLOGICAL },
  { id: 'psoriasis', name: 'Psoriasis', category: cat.DERMATOLOGICAL },
  { id: 'acne', name: 'Acne', category: cat.DERMATOLOGICAL },
  { id: 'rosacea', name: 'Rosacea', category: cat.DERMATOLOGICAL },

  // Infectious Diseases
  { id: 'malaria', name: 'Malaria', category: cat.INFECTIOUS },
  { id: 'dengue', name: 'Dengue Fever', category: cat.INFECTIOUS },
  { id: 'hepatitis', name: 'Hepatitis', category: cat.INFECTIOUS },
  { id: 'hiv', name: 'HIV', category: cat.INFECTIOUS },

  // Endocrine Disorders
  { id: 'diabetes_t1', name: 'Type 1 Diabetes', category: cat.ENDOCRINE },
  { id: 'diabetes_t2', name: 'Type 2 Diabetes', category: cat.ENDOCRINE },
  { id: 'hypothyroidism', name: 'Hypothyroidism', category: cat.ENDOCRINE },
  { id: 'hyperthyroidism', name: 'Hyperthyroidism', category: cat.ENDOCRINE },

  // Mental Health Conditions
  { id: 'depression', name: 'Depression', category: cat.MENTAL_HEALTH },
  { id: 'anxiety', name: 'Anxiety Disorder', category: cat.MENTAL_HEALTH },
  { id: 'bipolar', name: 'Bipolar Disorder', category: cat.MENTAL_HEALTH },
  { id: 'schizophrenia', name: 'Schizophrenia', category: cat.MENTAL_HEALTH },

  // Autoimmune Diseases
  { id: 'type1_diabetes', name: 'Type 1 Diabetes', category: cat.AUTOIMMUNE },
  { id: 'graves_disease', name: "Grave's Disease", category: cat.AUTOIMMUNE },
  { id: 'psoriatic_arthritis', name: 'Psoriatic Arthritis', category: cat.AUTOIMMUNE },
  { id: 'multiple_sclerosis_auto', name: 'Multiple Sclerosis', category: cat.AUTOIMMUNE }
];