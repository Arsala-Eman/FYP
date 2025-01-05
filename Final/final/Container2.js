import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Container2 = () => {
   const navigation = useNavigation();
  // Policy updates data
  const policyUpdates = [
    {
      id: '1',
      title: 'Health Coverage Expansion',
      description: 'We now include dental and vision care starting January 2024.',
    },
    {
      id: '2',
      title: 'Premium Discounts',
      description: 'Up to 10% premium discounts for wellness program participants.',
    },
    {
      id: '3',
      title: 'Policy Renewal Updates',
      description: 'You can now renew your policies securely online.',
    },
  ];
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
            <View style={styles.policyBox}>
              <Text style={styles.policyBoxText}>Policy Updates</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.pageTitle}>Policy Updates</Text>

          {/* Policy Cards */}
          <FlatList
            data={policyUpdates}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.policyCard}>
                <Text style={styles.policyTitle}>• {item.title}</Text>
                <Text style={styles.policyDescription}>{item.description}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#F9E7E7',
    padding: 20,
    justifyContent: 'space-between',
  },
  sidebarContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row', // Set items in a row
    alignItems: 'center', // Vertically align items
    marginBottom: 20,
  },
  menuText: {
    marginLeft: 4,
    fontSize: 20,
    color: '#000',
    fontWeight:'bold',
  },

  
  policyBox: {
    backgroundColor: '#F8D7D7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0BEBE',
    marginBottom: 12,
  },
  policyBoxText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    color: '#fff',
    fontSize: 20,
  },
  mainContent: {
    width: '75%',
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  policyCard: {
    backgroundColor: '#FCECEC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0BEBE',
  },
  policyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  policyDescription: {
    fontSize: 20,
    color: '#555',
  },
});

export default Container2;
