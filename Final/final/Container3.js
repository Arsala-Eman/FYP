import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container3 = () => {
  const navigation = useNavigation(); 
  const handleLogout = () => {
    // Navigate back to the Login screen
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarContent}>
          
             <View style={styles.iconTextContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
                <View style={styles.iconTextContainer}>
                  <Icon name="home-outline" size={18} color="#000" />
                  <Text style={styles.menuText}>Home</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.EnquiryContainer}>
        <Text style={[styles.selectedMenuText, { fontSize: 25 }]}>Amend Claims</Text>
      </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('../assets/img.png')}
              style={styles.headerImage}
            />
          </View>

          {/* Notice */}
          <View style={styles.noticeContainer}>
            <Text style={styles.noticeText}>Note: You can Amend it  Until the claim is in procedure:</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
  <View style={styles.formWrapper}> 
    <View style={styles.formRow}>
      <Text style={styles.label}>Enter Policy no:</Text>
      <TextInput style={styles.input} />
    </View>
    <View style={styles.formRow}>
      <Text style={styles.label}>Enter Claim no:</Text>
      <TextInput style={styles.input} />
    </View>
  </View>
</View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Icon name="logo-facebook" size={18} color="#000" style={styles.socialIcon} />
          <Icon name="logo-instagram" size={18} color="#000" style={styles.socialIcon} />
          <Icon name="logo-twitter" size={18} color="#000" style={styles.socialIcon} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate('Container5')} 
      >
        <Icon name="arrow-forward" size={30} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#FDEAEA',
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  sidebarContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
  menuText: {
    marginLeft: 4,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  EnquiryContainer: {
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedMenuText: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
  },
  mainContent: {
    width: '75%',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  noticeContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noticeText: {
    color: '#000',
    fontSize: 14,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  formWrapper: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    flex: 2,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  searchButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cancelButton: {
    backgroundColor: '#999',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});

export default Container3;
