import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Navigate back to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={[styles.menuItem, styles.boxStyle]}
              onPress={() => navigation.navigate('MainContainer')}
            >
              <Icon name="home-outline" size={28} color="#000" />
              <Text style={[styles.menuText, styles.text3D]}>Home</Text>
            </TouchableOpacity>
            <View style={[styles.darkMenuContainer, styles.boxStyle]}>
              <TouchableOpacity
                style={[styles.menuItem, styles.boxStyle]}
                onPress={() => navigation.navigate('Container11')}
              >
                <Text style={[styles.sidebarItemText, styles.text3D]}>Check Claims</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.menuItem, styles.boxStyle]}
                onPress={() => navigation.navigate('Container15')}
              >
                <Text style={[styles.sidebarItemText, styles.text3D]}>Fraud Detected Person</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.menuItem, styles.boxStyle]}
                onPress={() => navigation.navigate('Container16')}
              >
                <Text style={[styles.sidebarItemText, styles.text3D]}>Update Policy Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.menuItem, styles.boxStyle]}
                onPress={() => navigation.navigate('Title')}
              >
                <Text style={[styles.sidebarItemText, styles.text3D]}>Recommend User Different Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={[styles.logoutButton, styles.boxStyle]} onPress={handleLogout}>
          <Text style={[styles.logoutText, styles.text3D]}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../assets/img.png')}
            style={[styles.image, styles.profileImage]}
          />
          <Text style={[styles.welcomeText, styles.text3D]}> Welcome Admin </Text>
        </View>
        <ScrollView contentContainerStyle={styles.mainContent}>
          <Image
            source={require('../assets/img3.png')}
            style={[styles.image, styles.mainImage]}
          />
        </ScrollView>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#F9E7E7', // Sidebar background color
    padding: 20,
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  menuContainer: {
    flex: 1,
  },
  darkMenuContainer: {
    backgroundColor: '#D3A7A7', // Darker background for the menu section
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  menuItem: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 12,
    fontWeight: 'bold',
  },
  sidebarItemText: {
    fontSize: 20,
    color: '#000',
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    width: '75%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
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
    marginHorizontal: 12,
  },
  image: {
    marginVertical: 10,
  },
  profileImage: {
    width: 50, // Reduced size
    height: 50, // Reduced size
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  mainImage: {
    width: '100%', // Adjusted width
    height: 450, // Reduced height
    borderRadius: 40,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  boxStyle: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: '#fff',
  },
  text3D: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Dashboard;
