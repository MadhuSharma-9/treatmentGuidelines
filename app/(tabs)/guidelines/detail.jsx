// app/(tabs)/guidelines/detail.js

import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { LayoutAnimation, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import allGuidelines from '../../../guidelines.json';

// --- This is required to make LayoutAnimation work on Android ---
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// --- NEW COLLAPSIBLE COMPONENT ---
const CollapsibleCard = ({ title, content, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  const toggleOpen = () => {
    // This line triggers the animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  // Don't render the card at all if there's no content
  if (!content) {
    return null;
  }

  return (
    <View style={styles.card}>
      {/* The clickable header */}
      <TouchableOpacity onPress={toggleOpen} style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Ionicons 
          name={isOpen ? "chevron-down-outline" : "chevron-forward-outline"} 
          size={22} 
          color="#002366" 
        />
      </TouchableOpacity>
      
      {/* The collapsible content */}
      {isOpen && (
        <View style={styles.cardBody}>
          <Text style={styles.cardContent}>{content}</Text>
        </View>
      )}
    </View>
  );
};

// --- NEW DURATION TABLE COMPONENT ---
// This is now separate, so it can be passed into a CollapsibleCard
const DurationTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return null;
  }
  return (
    <View style={styles.cardBody}>
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

// --- MAIN DETAIL PAGE ---
export default function GuidelineDetail() {
  const { id } = useLocalSearchParams();
  const guideline = allGuidelines.find(item => item.id === id);

  if (!guideline) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Guideline not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: guideline.condition.split(' - ')[0] }} />
      
      <ScrollView>
        {/* We make the first card "startOpen" for immediate info */}
        <CollapsibleCard 
          title="Preferred Treatment" 
          content={guideline.preferred}
          startOpen={true} // <-- STARTS OPEN
        />
        
        <CollapsibleCard 
          title="Alternative Treatment" 
          content={guideline.alternative} 
        />
        
        <CollapsibleCard 
          title="Cautions/Special Consideration" 
          content={guideline.cautions} 
        />

        <CollapsibleCard 
          title="Common Organisms" 
          content={guideline.organisms} 
        />
        
        {/* We wrap the DurationTable component in a CollapsibleCard */}
        {guideline.duration_table && (
          <View style={styles.card}>
            <CollapsibleCard 
              title="Duration"
              // Pass the component itself as a child
              content={<DurationTable tableData={guideline.duration_table} />}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- UPDATED STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden', // Important for the animation
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002366',
    flex: 1, // Allow title to wrap
    marginRight: 10,
  },
  cardBody: {
    padding: 16,
    paddingTop: 0, // Content is separate from header padding
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
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