import { ScrollView, StyleSheet, Text, View } from "react-native";
import { accessGroupAntibiotics } from "./AccessData"; // Import the data
import { AWARE_GROUPS } from "./AwareCommon"; // Import group info

// --- Modern Card Component for the Antibiotic List ---
const AntibioticCard = ({ item }) => (
  <View style={styles.antibioticCard}>
    <Text style={styles.antibioticTitle}>{item.antibiotic}</Text>
    <Text style={styles.classText}>{item.class}</Text>
    <Text style={styles.effectsText}>{item.effects}</Text>
  </View>
);

export default function AccessScene() {
  const accessColor = AWARE_GROUPS.access.color; // Our theme's green

  return (
    <ScrollView style={styles.sceneContainer}>
      
      {/* --- Restyled Main Header Card --- */}
      <View style={[styles.headerCard, { borderColor: accessColor }]}>
        <Text style={[styles.headerCardTitle, { color: accessColor }]}>
          Access Group
        </Text>
        <Text style={styles.headerCardContent}>
          {AWARE_GROUPS.access.description}
        </Text>
      </View>

      {/* --- List of Antibiotic Cards --- */}
      <View style={styles.listContainer}>
        {accessGroupAntibiotics.map((item) => (
          <AntibioticCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

// --- Combined & Modernized Styles ---
const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9', // A very light, clean background
  },
  // --- Header Card Styles ---
  headerCard: {
    backgroundColor: "#ffffff", // Clean white background
    borderRadius: 12,
    padding: 16,
    margin: 16,
    borderWidth: 1.5, // Use the theme color for the border
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  headerCardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerCardContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  // --- List Styles ---
  listContainer: {
    paddingHorizontal: 16, // Align list with header card padding
    paddingBottom: 16,
  },
  antibioticCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  antibioticTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#004d00', // A darker, readable green
    marginBottom: 4,
  },
  classText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#555",
    marginBottom: 8,
    fontStyle: "italic",
  },
  effectsText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
  },
});