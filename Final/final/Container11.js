import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container11 = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    // Navigate back to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={[styles.menuItem, styles.boxStyle]}
          onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard
        >
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={[styles.menuText, styles.text3D]}>Home</Text>
        </TouchableOpacity>
        <View style={[styles.checkClaimsContainer, styles.boxStyle]}>
          <Text style={[styles.selectedMenuText, styles.text3D]}>
            . Check Claims
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.logoutButton, styles.boxStyle]}
          onPress={handleLogout}
        >
          <Text style={[styles.logoutText, styles.text3D]}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <Image source={require('../assets/img.png')} style={styles.image} />
        <View style={[styles.inputGroup, styles.boxStyle]}>
          <Text style={[styles.label, styles.text3D]}>Policy no:</Text>
          
          <Text style={[styles.label, styles.text3D]}>Claim no:</Text>
          
          <Text style={[styles.label, styles.text3D]}>Date:</Text>
         
        </View>
        <Button title="Check Details" onPress={() => {}} />

        <View style={[styles.inputGroup, styles.boxStyle]}>
          <Text style={[styles.label, styles.text3D]}>Policy no:</Text>
         
          <Text style={[styles.label, styles.text3D]}>Claim no:</Text>
          
          <Text style={[styles.label, styles.text3D]}>Date:</Text>
          
        </View>
        <Button title="Check Details" onPress={() => {}} />

        
      </ScrollView>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 8,
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#F9E7E7',
    padding: 10,
    alignItems: 'flex-start',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkClaimsContainer: {
    backgroundColor: '#f0c0c0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    height: 200,
    borderColor: '#000',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
  },
  selectedMenuText: {
    fontSize: 22,
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
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'flex-start',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  arrowButton: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxStyle: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text3D: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Container11;
