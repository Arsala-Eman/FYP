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

const Sidebar = () => {
  const navigation = useNavigation(); // Access navigation

  const handleLogout = () => {
    // Perform any logout logic here if needed
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('')} // Navigate to MainContainer
            >
              <Icon name="home-outline" size={28} color="#000" />
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <View style={styles.darkMenuContainer}>
              <TouchableOpacity
                style={styles.menuBox}
                onPress={() => navigation.navigate('MainContainer')} // Navigate to MainContainer
              >
                <Text style={styles.sidebarItemText}>Enter Claims</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBox}
                onPress={() => navigation.navigate('Container3')} // Navigate to Amend Claims
              >
                <Text style={styles.sidebarItemText}>Amend Claims</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBox}
                onPress={() => navigation.navigate('Container4')} // Navigate to Cancel Claims
              >
                <Text style={styles.sidebarItemText}>Cancel Claims</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBox}
                onPress={() => navigation.navigate('Container10')} // Navigate to Notifications
              >
                <Text style={styles.sidebarItemText}>Claims Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBox}
                onPress={() => navigation.navigate('Container2')} // Navigate to Policy Updates
              >
                <Text style={styles.sidebarItemText}>Policy Updates</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBox}
                onPress={() => navigation.navigate('ContainerRecommendations')} // Navigate to Recommendations
              >
                <Text style={styles.sidebarItemText}>Recommendations</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../assets/img.png')}
            style={[styles.image, { width: 125, height: 125, borderRadius: 15 }]} // Add borderRadius here
          />
          <Text style={styles.welcomeText}> Welcome User </Text>
        </View>
        <ScrollView contentContainerStyle={styles.mainContent}>
          <Image
            source={require('../assets/img1.png')}
            style={[styles.image, { width: 400, height: 300 }]}
          />
        </ScrollView>
        <View style={styles.footer}>
          <Icon name="logo-facebook" size={28} color="#000" style={styles.footerIcon} />
          <Icon name="logo-instagram" size={28} color="#000" style={styles.footerIcon} />
          <Icon name="logo-twitter" size={28} color="#000" style={styles.footerIcon} />
        </View>
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
    backgroundColor: '#F9E7E7',
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
    backgroundColor: '#D3A7A7',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  menuItem: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
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
  menuBox: {
    backgroundColor: '#F9E7E7',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  logoutButton: {
    backgroundColor: '#000',
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
    color: '#fff',
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
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default Sidebar;
