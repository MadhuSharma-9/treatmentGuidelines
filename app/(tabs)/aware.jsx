// app/(tabs)/aware.js

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Helper component for styling
const AwareCard = ({ title, description, color }) => (
  <View style={[styles.card, { borderLeftColor: color, borderLeftWidth: 5 }]}>
    <Text style={[styles.cardTitle, { color: color }]}>{title}</Text>
    <Text style={styles.cardContent}>{description}</Text>
  </View>
);

export default function AwareScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>
          The WHO AWaRe (Access, Watch, Reserve) classification is a tool to support antimicrobial stewardship.
        </Text>
        
        <AwareCard
          title="Access Group"
          color="#34a853" // Green
          description="First-line antibiotics, used as the primary choice for common infections. They have a narrow spectrum and lower resistance potential. These are prioritized in these guidelines."
        />
        
        <AwareCard
          title="Watch Group"
          color="#fbbc05" // Yellow/Orange
          description="Second-line antibiotics with a higher resistance potential. These are recommended only for specific, limited indications and should be used cautiously to preserve their effectiveness."
        />
        
        <AwareCard
          title="Reserve Group"
          color="#ea4335" // Red
          description="Last-resort antibiotics for treating severe infections caused by multidrug-resistant pathogens. Their use is highly restricted and based on specialist consultation to prevent the development of further resistance."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 10,
  },
  header: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    marginBottom: 10,
    lineHeight: 22,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});