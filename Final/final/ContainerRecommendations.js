import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const ContainerRecommendations = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };
  // Recommendations data
  const adminRecommendations = [
    {
      id: '1',
      title: 'Join Wellness Programs',
      description: 'Participate in wellness programs to improve your health and receive premium discounts.',
    },
    {
      id: '2',
      title: 'Review Policy Terms',
      description: 'Make sure to review your policy terms for updated benefits and coverage.',
    },
    {
      id: '3',
      title: 'Contact Support',
      description: 'Reach out to our support team for any questions regarding your health plans.',
    },
  ];

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
            <View style={styles.recommendationBox}>
              <Text style={styles.recommendationBoxText}>Admin Recommendations</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.pageTitle}>Admin Recommendations</Text>

          {/* Recommendations Cards */}
          <FlatList
            data={adminRecommendations}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.recommendationCard}>
                <Text style={styles.recommendationTitle}>• {item.title}</Text>
                <Text style={styles.recommendationDescription}>{item.description}</Text>
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
    padding: 12,
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
  recommendationBox: {
    backgroundColor: '#F8D7D7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0BEBE',
    marginBottom: 12,
  },
  recommendationBoxText: {
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
    fontSize: 14,
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
  recommendationCard: {
    backgroundColor: '#FCECEC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0BEBE',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default ContainerRecommendations;
