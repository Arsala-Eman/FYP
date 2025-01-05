import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={styles.container}>
      {!showForm ? (
        // Main screen with "Add New Recommendation" button
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.addButtonText}>+ Add New Recommendation</Text>
        </TouchableOpacity>
      ) : (
        // Form interface
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add Recommendation</Text>
          
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            placeholderTextColor="#C4C4C4"
          />

          <Text style={styles.label}>Body:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter details"
            placeholderTextColor="#C4C4C4"
            multiline={true}
          />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9E7E7', // Light pastel background
  },
  addButton: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    backgroundColor: '#f0c0c0', // Light pink button
    borderRadius: 8,
    elevation: 4, // Subtle shadow for depth
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#fff', // White card background
    borderWidth: 1,
    borderColor: '#f0c0c0', // Pink border
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Subtle shadow for the form container
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0c0c0',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: '#000', // Black button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
