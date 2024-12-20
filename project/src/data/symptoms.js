import { symptomCategories as cat } from './symptomCategories';

export const symptoms = [
  // General Symptoms
  { id: 'fever', name: 'Fever', category: cat.GENERAL },
  { id: 'fatigue', name: 'Fatigue', category: cat.GENERAL },
  { id: 'weakness', name: 'General Weakness', category: cat.GENERAL },
  { id: 'night_sweats', name: 'Night Sweats', category: cat.GENERAL },
  { id: 'weight_loss', name: 'Unexplained Weight Loss', category: cat.GENERAL },
  { id: 'weight_gain', name: 'Unexplained Weight Gain', category: cat.GENERAL },
  { id: 'appetite_loss', name: 'Loss of Appetite', category: cat.GENERAL },
  { id: 'chills', name: 'Chills', category: cat.GENERAL },

  // Respiratory Symptoms
  { id: 'cough', name: 'Cough', category: cat.RESPIRATORY },
  { id: 'shortness_breath', name: 'Shortness of Breath', category: cat.RESPIRATORY },
  { id: 'chest_congestion', name: 'Chest Congestion', category: cat.RESPIRATORY },
  { id: 'wheezing', name: 'Wheezing', category: cat.RESPIRATORY },
  { id: 'rapid_breathing', name: 'Rapid Breathing', category: cat.RESPIRATORY },
  { id: 'coughing_blood', name: 'Coughing Blood', category: cat.RESPIRATORY },
  { id: 'sore_throat', name: 'Sore Throat', category: cat.RESPIRATORY },
  { id: 'runny_nose', name: 'Runny Nose', category: cat.RESPIRATORY },
  { id: 'stuffy_nose', name: 'Stuffy Nose', category: cat.RESPIRATORY },

  // Cardiovascular Symptoms
  { id: 'chest_pain', name: 'Chest Pain', category: cat.CARDIOVASCULAR },
  { id: 'palpitations', name: 'Heart Palpitations', category: cat.CARDIOVASCULAR },
  { id: 'rapid_heartbeat', name: 'Rapid Heartbeat', category: cat.CARDIOVASCULAR },
  { id: 'irregular_heartbeat', name: 'Irregular Heartbeat', category: cat.CARDIOVASCULAR },
  { id: 'slow_heartbeat', name: 'Slow Heartbeat', category: cat.CARDIOVASCULAR },
  { id: 'high_blood_pressure', name: 'High Blood Pressure', category: cat.CARDIOVASCULAR },
  { id: 'low_blood_pressure', name: 'Low Blood Pressure', category: cat.CARDIOVASCULAR },

  // Gastrointestinal Symptoms
  { id: 'nausea', name: 'Nausea', category: cat.GASTROINTESTINAL },
  { id: 'vomiting', name: 'Vomiting', category: cat.GASTROINTESTINAL },
  { id: 'diarrhea', name: 'Diarrhea', category: cat.GASTROINTESTINAL },
  { id: 'constipation', name: 'Constipation', category: cat.GASTROINTESTINAL },
  { id: 'bloating', name: 'Bloating', category: cat.GASTROINTESTINAL },
  { id: 'abdominal_pain', name: 'Abdominal Pain', category: cat.GASTROINTESTINAL },
  { id: 'heartburn', name: 'Heartburn', category: cat.GASTROINTESTINAL },
  { id: 'blood_stool', name: 'Blood in Stool', category: cat.GASTROINTESTINAL },

  // Neurological Symptoms
  { id: 'headache', name: 'Headache', category: cat.NEUROLOGICAL },
  { id: 'dizziness', name: 'Dizziness', category: cat.NEUROLOGICAL },
  { id: 'confusion', name: 'Confusion', category: cat.NEUROLOGICAL },
  { id: 'memory_problems', name: 'Memory Problems', category: cat.NEUROLOGICAL },
  { id: 'seizures', name: 'Seizures', category: cat.NEUROLOGICAL },
  { id: 'tremors', name: 'Tremors', category: cat.NEUROLOGICAL },
  { id: 'numbness', name: 'Numbness', category: cat.NEUROLOGICAL },
  { id: 'tingling', name: 'Tingling Sensation', category: cat.NEUROLOGICAL },

  // Musculoskeletal Symptoms
  { id: 'joint_pain', name: 'Joint Pain', category: cat.MUSCULOSKELETAL },
  { id: 'muscle_pain', name: 'Muscle Pain', category: cat.MUSCULOSKELETAL },
  { id: 'back_pain', name: 'Back Pain', category: cat.MUSCULOSKELETAL },
  { id: 'neck_pain', name: 'Neck Pain', category: cat.MUSCULOSKELETAL },
  { id: 'stiffness', name: 'Joint Stiffness', category: cat.MUSCULOSKELETAL },
  { id: 'muscle_weakness', name: 'Muscle Weakness', category: cat.MUSCULOSKELETAL },
  { id: 'swollen_joints', name: 'Swollen Joints', category: cat.MUSCULOSKELETAL },

  // Skin Symptoms
  { id: 'rash', name: 'Skin Rash', category: cat.SKIN },
  { id: 'itching', name: 'Itching', category: cat.SKIN },
  { id: 'skin_lesions', name: 'Skin Lesions', category: cat.SKIN },
  { id: 'skin_discoloration', name: 'Skin Discoloration', category: cat.SKIN },
  { id: 'bruising', name: 'Easy Bruising', category: cat.SKIN },
  { id: 'excessive_sweating', name: 'Excessive Sweating', category: cat.SKIN },
  { id: 'dry_skin', name: 'Dry Skin', category: cat.SKIN },

  // Psychological Symptoms
  { id: 'anxiety', name: 'Anxiety', category: cat.PSYCHOLOGICAL },
  { id: 'depression', name: 'Depression', category: cat.PSYCHOLOGICAL },
  { id: 'mood_changes', name: 'Mood Changes', category: cat.PSYCHOLOGICAL },
  { id: 'irritability', name: 'Irritability', category: cat.PSYCHOLOGICAL },
  { id: 'sleep_problems', name: 'Sleep Problems', category: cat.PSYCHOLOGICAL },
  { id: 'hallucinations', name: 'Hallucinations', category: cat.PSYCHOLOGICAL },
  { id: 'paranoia', name: 'Paranoia', category: cat.PSYCHOLOGICAL },

  // Urinary Symptoms
  { id: 'frequent_urination', name: 'Frequent Urination', category: cat.URINARY },
  { id: 'painful_urination', name: 'Painful Urination', category: cat.URINARY },
  { id: 'blood_urine', name: 'Blood in Urine', category: cat.URINARY },
  { id: 'urinary_urgency', name: 'Urinary Urgency', category: cat.URINARY },
  { id: 'urinary_retention', name: 'Urinary Retention', category: cat.URINARY },

  // Reproductive Symptoms
  { id: 'menstrual_changes', name: 'Menstrual Changes', category: cat.REPRODUCTIVE },
  { id: 'erectile_dysfunction', name: 'Erectile Dysfunction', category: cat.REPRODUCTIVE },
  { id: 'fertility_problems', name: 'Fertility Problems', category: cat.REPRODUCTIVE },
  { id: 'vaginal_discharge', name: 'Abnormal Vaginal Discharge', category: cat.REPRODUCTIVE },
  { id: 'testicular_pain', name: 'Testicular Pain', category: cat.REPRODUCTIVE }
];