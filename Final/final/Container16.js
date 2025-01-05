import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container16 = () => {
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
          <Text style={[styles.selectedMenuText, { fontSize: 25 }]}>Update Policy Details</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <Image source={require('../assets/img.png')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.instructionText}>Please upadte the policy details</Text>
          <TextInput
            style={styles.policyDetailInput}
            multiline
            numberOfLines={10}
            placeholder="Enter policy details here"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
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
  sidebar: {
    width: '20%',
    backgroundColor: '#F9E7E7',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
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
    paddingHorizontal: 20,
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
    width: '80%',
    padding: 20,
    position: 'relative',
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
  content: {
    marginTop: 10,
  },
  instructionText: {
    fontSize: 20,
    color: '#b22222',
    marginBottom: 10,
  },
  policyDetailInput: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 10,
    textAlignVertical: 'top',
    height: 150,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: '22.5%',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '75%',
  },
  footerIcon: {
    marginHorizontal: 10,
  },
});

export default Container16;
