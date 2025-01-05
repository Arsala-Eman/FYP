import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MainContainer = () => {
  const navigation = useNavigation();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    patientName: '',
    fatherName: '',
    policyNo: '',
    beneId: '',
    claimId: '',
    provider: '',
    inscClaimAmtReimbursed: '',
    attendingPhysician: '',
    otherPhysician: '',
    admissionDt: '',
    doctorName: '',
    clmAdmitDiagnosisCode: '',
    deductibleAmtPaid: '',
    dischargeDt: '',
    diagnosisGroupCode: '',
    DiagnosisCode_1: '',
    DiagnosisCode_2: '',
    DiagnosisCode_3: '',
    DiagnosisCode_4: '',
    DiagnosisCode_5: '',
    DiagnosisCode_6: '',
    DiagnosisCode_7: '',
    DiagnosisCode_8: '',
    DiagnosisCode_9: '',
    DiagnosisCode_10: '',
    ClmProcedureCode_1: '',
    ClmProcedureCode_2: '',
    ClmProcedureCode_3: '',
    ClmProcedureCode_4: '',
    ClmProcedureCode_5: '',
    ClmProcedureCode_6: '',
  });

  // Handle input changes
  const handleInputChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Submit form data to the backend
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://172.27.208.1:5000/submit-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log('Response:', result); // Debugging log
  
      if (response.ok) {
        Alert.alert('Success', result.message);
      } else {
        Alert.alert('Error', result.message || 'Failed to submit claim');
      }
    } catch (error) {
      console.error('Error submitting claim:', error); // Debugging log
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };
  
 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Container */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.iconTextContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
                <Icon name="home-outline" size={24} color="#000" />
                <Text style={styles.menuText}>Home</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.headerTitle}>Health care insurance</Text>
              <Text style={styles.headerSubtitle}>
                Inpatient/OutPatient Medical claim
              </Text>
            </View>
            <Image
              source={require('../assets/img.png')}
              style={styles.image}
            />
          </View>
        </View>

        {/* Notice */}
        <View style={styles.noticeContainer}>
          <Text style={styles.noticeText}>
            To be filled by patient/claimant
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {formFields.map((field, index) => (
            <View key={index} style={styles.formRow}>
              <Text style={styles.label}>{field.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                value={formData[field.key] || ''}
                onChangeText={(value) => handleInputChange(field.key, value)}
              />
            </View>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Icon
            name="logo-facebook"
            size={18}
            color="#000"
            style={styles.socialIcon}
          />
          <Icon
            name="logo-instagram"
            size={18}
            color="#000"
            style={styles.socialIcon}
          />
          <Icon
            name="logo-twitter"
            size={18}
            color="#000"
            style={styles.socialIcon}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Form field data with keys
const formFields = [
  { label: 'Patient name:', key: 'patientName' },
  { label: 'Father name:', key: 'fatherName' },
  { label: 'Policy no:', key: 'policyNo' },
  { label: 'BeneID:', key: 'beneId' },
  { label: 'ClaimID:', key: 'claimId' },
  { label: 'Provider:', key: 'provider' },
  { label: 'InscClaimAmtReimbursed:', key: 'inscClaimAmtReimbursed' },
  { label: 'AttendingPhysician:', key: 'attendingPhysician' },
  { label: 'OtherPhysician:', key: 'otherPhysician' },
  { label: 'AdmissionDt:', key: 'admissionDt' },
  { label: 'Doctor name:', key: 'doctorName' },
  { label: 'ClmAdmitDiagnosisCode:', key: 'clmAdmitDiagnosisCode' },
  { label: 'DeductibleAmtPaid:', key: 'deductibleAmtPaid' },
  { label: 'DischargeDt:', key: 'dischargeDt' },
  { label: 'DiagnosisGroupCode:', key: 'diagnosisGroupCode' },
  { label: 'DiagnosisCode_1:', key: 'DiagnosisCode_1' },
  { label: 'DiagnosisCode_2:', key: 'DiagnosisCode_2' },
  { label: 'DiagnosisCode_3:', key: 'DiagnosisCode_3' },
  { label: 'DiagnosisCode_4:', key: 'DiagnosisCode_4' },
  { label: 'DiagnosisCode_5:', key: 'DiagnosisCode_5' },
  { label: 'DiagnosisCode_6:', key: 'DiagnosisCode_6' },
  { label: 'DiagnosisCode_7:', key: 'DiagnosisCode_7' },
  { label: 'DiagnosisCode_8:', key: 'DiagnosisCode_8' },
  { label: 'DiagnosisCode_9:', key: 'DiagnosisCode_9' },
  { label: 'DiagnosisCode_10:', key: 'DiagnosisCode_10' },
  { label: 'ClmProcedureCode_1:', key: 'ClmProcedureCode_1' },
  { label: 'ClmProcedureCode_2:', key: 'ClmProcedureCode_2' },
  { label: 'ClmProcedureCode_3:', key: 'ClmProcedureCode_3' },
  { label: 'ClmProcedureCode_4:', key: 'ClmProcedureCode_4' },
  { label: 'ClmProcedureCode_5:', key: 'ClmProcedureCode_5' },
  { label: 'ClmProcedureCode_6:', key: 'ClmProcedureCode_6' },
];

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#F9E7E7',
    borderRadius: 12,
  },
  iconTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    marginTop: 4,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#555',
  },
  image: {
    width: 70,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  noticeContainer: {
    backgroundColor: '#F0C0C0',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  noticeText: {
    color: '#721C24',
    fontSize: 18,
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 4,
    color: '#000',
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    color: '#000',
    flex: 1,
    marginRight: 8,
  },
  input: {
    height: 40,
    flex: 2,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButton: {
    backgroundColor: '#F9E7E7',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  socialIcon: {
    marginHorizontal: 12,
  },
});

export default MainContainer;