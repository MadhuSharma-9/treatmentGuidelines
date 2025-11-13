// app/(tabs)/guidelines/index.js

import { Link, Stack } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../../guidelines.json';

// Get only the unique categories from our data
const categories = [...new Set(allGuidelines.map(item => item.category))];

export default function GuidelinesHome() {
  return (
    <SafeAreaView style={styles.container}>
      {/* This line hides the default header, we'll use our own title */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Guideline Categories</Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Link 
            href={{ pathname: '/(tabs)/guidelines/sublist', params: { category: item } }} 
            asChild
          >
            {/* These styles create the modern card look */}
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

// --- NEW STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Light blue/gray background
  },
  headerContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002366', // Dark blue title
  },
  // Modern Card Style
  card: {
    backgroundColor: '#ffffff', // White cards
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // Subtle shadow
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002366', // Dark blue text as requested
  }
});