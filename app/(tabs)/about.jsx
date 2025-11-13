// app/(tabs)/about.js

import { Ionicons } from '@expo/vector-icons';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  const email = 'bir.ams2024@gmail.com';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          {/* You can replace this with a real logo later */}
          <Ionicons name="medkit" size={60} color="#002366" />
        </View>

        <Text style={styles.title}>Bir Hospital Antimicrobial Treatment Guidelines</Text>
        <Text style={styles.subtitle}>First Edition 2082 B.S.</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>About This App</Text>
          <Text style={styles.cardContent}>
            This guideline is a practical tool to support clinicians at Bir Hospital in making informed, judicious decisions regarding antimicrobial therapy.
          </Text>
          <Text style={styles.cardContent}>
            It aims to promote the rational selection of antimicrobials, focusing on the right drug, dose, and duration for common infectious conditions.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contacts and Feedback</Text>
          <Text style={styles.cardContent}>
            For feedback or questions regarding these guidelines, please contact:
          </Text>
          <Text 
            style={styles.email}
            onPress={() => Linking.openURL(`mailto:${email}`)}
          >
            {email}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Support</Text>
          <Text style={styles.cardContent}>
            This work is supported by the UKaid Fleming Fund Regional Grant CAPTURA/TACE, led by the International Vaccine Institute and implemented in Nepal by Anweshan.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContent: {
    padding: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#002366',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002366',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#007AFF', // Blue link color
    textDecorationLine: 'underline',
  }
});