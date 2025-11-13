// app/(tabs)/guidelines/sublist.js

import { Ionicons } from '@expo/vector-icons'; // --- IMPORT ICON LIBRARY ---
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../../guidelines.json';

// This helper function does the grouping
const getGroupedConditions = (items) => {
  const groups = new Map();

  items.forEach(item => {
    // --- UPDATED LOGIC ---
    // We split by " - ", take the first part, and trim whitespace
    const baseName = item.condition.split(' - ')[0].trim();
    
    if (!groups.has(baseName)) {
      groups.set(baseName, []);
    }
    groups.get(baseName).push(item);
  });

  // Convert map to array for FlatList
  return Array.from(groups.entries()).map(([baseCondition, items]) => ({
    baseCondition,
    items,
  }));
};

export default function SubList() {
  const { category } = useLocalSearchParams();
  const categoryItems = allGuidelines.filter(item => item.category === category);
  const groupedData = getGroupedConditions(categoryItems);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: category }} />

      <FlatList
        data={groupedData}
        keyExtractor={(item) => item.baseCondition}
        renderItem={({ item }) => {
          const hasMultipleVariations = item.items.length > 1;

          const href = hasMultipleVariations
            ? {
                pathname: '/(tabs)/guidelines/variation',
                params: {
                  baseCondition: item.baseCondition,
                  category: category
                }
              }
            : {
                pathname: '/(tabs)/guidelines/detail',
                params: { id: item.items[0].id }
              };

          return (
            <Link href={href} asChild>
              <TouchableOpacity style={styles.card}>
                {/* --- UPDATED VIEW FOR ICON --- */}
                <View style={styles.cardContent}>
                  <View style={styles.textContent}>
                    <Text style={styles.cardText}>{item.baseCondition}</Text>
                    {hasMultipleVariations && (
                      <Text style={styles.variationText}>Multiple guidelines available</Text>
                    )}
                  </View>
                  <Ionicons name="chevron-forward-outline" size={24} color="#002366" />
                </View>
              </TouchableOpacity>
            </Link>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  card: {
    backgroundColor: '#ffffff',
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  // --- NEW STYLES FOR ICON ---
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContent: {
    flex: 1, // Allows text to wrap if needed
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002366',
  },
  variationText: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    marginTop: 4,
  }
});