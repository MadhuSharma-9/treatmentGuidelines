// app/(tabs)/guidelines/detail.js

import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../../guidelines.json';

// This is a helper component to make our layout cleaner
// It creates a styled "card" for each piece of info
const DetailCard = ({ title, content }) => {
  // Don't render a card if there's no content
  if (!content || content.length === 0) {
    return null;
  }
  
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
};

// This component is for rendering the small duration table
const DurationTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Duration</Text>
      {tableData.map((row, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCellType}>{row.type}</Text>
          <Text style={styles.tableCellDuration}>{row.duration}</Text>
          {row.risk ? <Text style={styles.tableCellRisk}>{row.risk}</Text> : null}
        </View>
      ))}
    </View>
  );
};


export default function GuidelineDetail() {
  // 1. Get the ID passed from the sublist screen
  const { id } = useLocalSearchParams();

  // 2. Find the correct guideline from our data
  const guideline = allGuidelines.find(item => item.id === id);

  // 3. Handle if (for some reason) no guideline is found
  if (!guideline) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Guideline not found.</Text>
      </SafeAreaView>
    );
  }

  // 4. Render the details
  return (
    <SafeAreaView style={styles.container}>
      {/* Set the header title to the condition name */}
      <Stack.Screen options={{ title: guideline.condition }} />
      
      <ScrollView>
        {/* We use our helper component for each piece of data */}
        <DetailCard title="Condition" content={guideline.condition} />
        <DetailCard title="Common Organisms" content={guideline.organisms} />
        <DetailCard title="Preferred Treatment" content={guideline.preferred} />
        <DetailCard title="Alternative Treatment" content={guideline.alternative} />
        <DetailCard title="Cautions/Special Consideration" content={guideline.cautions} />
        
        {/* Conditionally render the duration table */}
        <DurationTable tableData={guideline.duration_table} />
      </ScrollView>
    </SafeAreaView>
  );
}

// These styles create the "clean UI"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Light blue/gray background
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002366', // Dark blue title
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24, // Makes text more readable
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  // Duration Table Styles
  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tableCellType: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  tableCellDuration: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },
  tableCellRisk: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
    marginTop: 4,
  }
});