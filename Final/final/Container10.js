import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container10 = () => {
    const navigation = useNavigation(); 
    const handleLogout = () => {
      navigation.navigate('Login');
    };
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.menuItem}>
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => navigation.navigate('Sidebar')}
          >
            <Icon name="home-outline" size={18} color="#000" style={styles.iconShadow} />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.checkClaimsContainer}>
          <Text style={[styles.selectedMenuText, { fontSize: 25 }]}>Claims Updates</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Image
          source={require('../assets/img.png')}
          style={styles.image}
        />
        <Text style={styles.notificationTitle}>Notification no 1</Text>
        <View style={styles.notificationBox}>
          {/* Add notification content here */}
        </View>

        <View style={styles.footer}>
          <Icon name="logo-facebook" size={24} color="#000" style={styles.iconShadow} />
          <Icon name="logo-instagram" size={24} color="#000" style={styles.iconShadow} />
          <Icon name="logo-twitter" size={24} color="#000" style={styles.iconShadow} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#F9E7E7',
    padding: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 3, height: 3 },
    elevation: 5,
  },
  menuItem: {
    marginBottom: 15,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 4,
  },
  menuText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkClaimsContainer: {
    backgroundColor: '#f0c0c0',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 4 },
    elevation: 6,
    marginTop: 20,
  },
  selectedMenuText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'flex-start',
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 4,
  },
  notificationTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
  },
  iconShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
});

export default Container10;
