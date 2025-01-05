import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container4 = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
              <View style={styles.iconTextContainer}>
                <Icon name="home-outline" size={18} color="#000" style={styles.iconShadow} />
                <Text style={styles.menuText}>Home</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.EnquiryContainer}>
              <Text style={[styles.selectedMenuText, { fontSize: 25 }]}> Cancel Claims</Text>
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
            <Image source={require('../assets/img.png')} style={styles.headerImage} />
          </View>

          {/* Cancel Claims Notice */}
          

          {/* Notice */}
          <View style={styles.noticeContainer}>
            <Text style={styles.noticeText}>Note: You can Cancel Claim untill the claim is in procedure:</Text>
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
          <Icon name="logo-facebook" size={18} color="#000" style={[styles.socialIcon, styles.iconShadow]} />
          <Icon name="logo-instagram" size={18} color="#000" style={[styles.socialIcon, styles.iconShadow]} />
          <Icon name="logo-twitter" size={18} color="#000" style={[styles.socialIcon, styles.iconShadow]} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate('Container9')}
      >
        <Icon name="arrow-forward" size={30} color="#000" style={styles.iconShadow} />
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
    borderRightWidth: 2,
    borderRightColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 4,
  },
  sidebarContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  menuText: {
    marginLeft: 8,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  EnquiryContainer: {
    marginTop: 20,
    backgroundColor: '#f0c0c0',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
  },
  selectedMenuText: {
    fontSize: 22,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  headerImage: {
    width: 70,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
  },
  noticeContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
  },
  noticeText: {
    color: '#000',
    fontSize: 12,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  formWrapper: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
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
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  searchButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#999',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    flex: 1,
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
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
  },
  iconShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
});

export default Container4;
