// app/(tabs)/guidelines/sublist.js

import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../../guidelines.json';

export default function SubList() {
  // 1. Get the category name passed from the previous screen
  const { category } = useLocalSearchParams();

  // 2. Filter our data to get only items matching that category
  const items = allGuidelines.filter(item => item.category === category);

  return (
    <SafeAreaView style={styles.container}>
      {/* This makes the header title dynamic based on the category */}
      <Stack.Screen options={{ title: category }} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // 3. Link to the FINAL detail page, passing the item's ID
          <Link 
            href={{ pathname: '/(tabs)/guidelines/detail', params: { id: item.id } }} 
            asChild
          >
            <TouchableOpacity style={styles.listItem}>
              <Text style={styles.listText}>{item.condition}</Text>
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
    backgroundColor: '#f0f4f8', // Same light background
  },
  // New Sky Blue Style:
  listItem: {
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 10,
    backgroundColor: '#e0f7ff', // A light sky blue background
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b3e5fc',
  },
  listText: {
    fontSize: 16,
    color: '#01579b', // A darker blue for readability on the sky blue
  }
});