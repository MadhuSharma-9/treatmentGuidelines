import { ScrollView, StyleSheet, Text, View } from "react-native";
import { accessGroupAntibiotics } from "./AccessData"; // Import the new data
import { AWARE_GROUPS, styles } from "./AwareCommon"; // We only need AWARE_GROUPS for the color

// --- New Card Component for the list ---
// This is slightly different from the 'AwareCard'
// because it shows 3 pieces of info.
const AntibioticCard = ({ item }) => (
  <View style={listStyles.card}>
    <Text style={listStyles.title}>{item.antibiotic}</Text>
    <Text style={listStyles.classText}>{item.class}</Text>
    <Text style={listStyles.effectsText}>{item.effects}</Text>
  </View>
);

export default function AccessScene() {
  return (
    <ScrollView style={styles.sceneContainer}>
      {/* You can still keep the main "Access Group" card at the top */}
      <View
        style={[
          styles.card,
          { borderLeftColor: AWARE_GROUPS.access.color, borderLeftWidth: 5 },
        ]}
      >
        <Text style={[styles.cardTitle, { color: AWARE_GROUPS.access.color }]}>
          Access Group
        </Text>
        <Text style={styles.cardContent}>
          {AWARE_GROUPS.access.description}
        </Text>
      </View>

      {/* This is the new part: */}
      {/* Map over the data and render a card for each antibiotic */}
      <View style={listStyles.listContainer}>
        {accessGroupAntibiotics.map((item) => (
          <AntibioticCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

// --- Add new styles for the list cards ---
const listStyles = StyleSheet.create({
  listContainer: {
    marginTop: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  classText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#666",
    marginBottom: 8,
    fontStyle: "italic",
  },
  effectsText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
  },
});
