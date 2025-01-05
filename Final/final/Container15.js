import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container15 = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    // Navigate back to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard
        >
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <View style={styles.checkClaimsContainer}>
          <Text style={[styles.selectedMenuText, { fontSize: 25 }]}>Fraud Detected Person</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <Image source={require('../assets/img.png')} style={styles.image} />
          <View style={styles.policySection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Policy no :</Text>
              
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Claim no :</Text>
             
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name :</Text>
             
            </View>
            <Button title="Details" onPress={() => {}} />
          </View>
          <View style={styles.policySection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Policy no :</Text>
             
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Claim no :</Text>
              
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name :</Text>
             
            </View>
            <Button title="Details" onPress={() => {}} />
          </View>
        </View>
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
    width: '75%', // Occupies the main content width
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#F9E7E7',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  checkClaimsContainer: {
    backgroundColor: '#f0c0c0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    height: 200,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedMenuText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#b22222',
  },
  logoutButton: {
    marginTop: 'auto',
    marginBottom: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  mainContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  policySection: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 3,
    backgroundColor: 'white',
    marginBottom: 6,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingVertical: 15,
  },
  footerIcon: {
    marginHorizontal: 10,
  },
});

export default Container15;
