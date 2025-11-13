// app/(tabs)/home.js

import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../guidelines.json'; // Go up one level to find the JSON

export default function Home() {
  const [search, setSearch] = useState('');
  
  // Search logic: filters the full list
  const filteredData = allGuidelines.filter((item) =>
    item.condition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Treatment Guidelines</Text>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search all guidelines..."
        value={search}
        onChangeText={setSearch}
      />
      
      {/* If searching, show results. If not, show the advice. */}
      {search.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            // This links *directly* to the detail page in the *other* tab.
            <Link 
              href={{ 
                pathname: '/(tabs)/guidelines/detail', 
                params: { id: item.id } 
              }} 
              asChild
            >
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listText}>{item.condition}</Text>
              </TouchableOpacity>
            </Link>
          )}
        />
      ) : (
        <View style={styles.adviceContainer}>
          <Text style={styles.adviceTitle}>A Note on Stewardship</Text>
          <Text style={styles.adviceText}>
            Restricted and rational antibiotics use... prevents the emergence and spread of MDROs.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  searchBar: {
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  adviceContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  adviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  adviceText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333'
  },
  listItem: {
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  listText: {
    fontSize: 16,
    color: '#007AFF', // Blue link color
  }
});