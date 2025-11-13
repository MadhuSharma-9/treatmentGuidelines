// app/(tabs)/guidelines/variation.js

import { Ionicons } from '@expo/vector-icons'; // --- IMPORT ICON LIBRARY ---
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../../guidelines.json';

export default function VariationList() {
  const { baseCondition, category } = useLocalSearchParams();

  const variations = allGuidelines.filter(item =>
    item.category === category && item.condition.startsWith(baseCondition)
  );
  
  // --- UPDATED LOGIC ---
  // This will get the "variation" part of the name
  const getVariationName = (fullCondition, baseName) => {
    // Re-create the " - " string to split by
    const splitStr = `${baseName} - `;
    const parts = fullCondition.split(splitStr);
    
    // If splitting worked, return the second part. 
    // If not (e.g., it's the base item), return the full name.
    return parts[1] || fullCondition;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: baseCondition }} />

      <FlatList
        data={variations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link 
            href={{ pathname: '/(tabs)/guidelines/detail', params: { id: item.id } }} 
            asChild
          >
            <TouchableOpacity style={styles.listItem}>
              {/* --- UPDATED VIEW FOR ICON --- */}
              <Text style={styles.listText}>
                {getVariationName(item.condition, baseCondition)}
              </Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#01579b" />
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 10,
  },
  listItem: {
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 10,
    backgroundColor: '#e0f7ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b3e5fc',
    // --- NEW STYLES FOR ICON ---
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText: {
    fontSize: 16,
    color: '#01579b',
    fontWeight: '500',
    flex: 1, // Allows text to wrap
    marginRight: 10,
  }
});