import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AWARE_GROUPS, styles } from "./AwareCommon"; // Import shared data/styles
import { watchGroupAntibiotics } from "./WatchData"; // Import the new data

// --- New Card Component for the list ---
// (This can be moved to AwareCommon.js if you want to reuse it)
const AntibioticCard = ({ item }) => (
  <View style={listStyles.card}>
    <Text style={listStyles.title}>{item.antibiotic}</Text>
    <Text style={listStyles.classText}>{item.class}</Text>
    <Text style={listStyles.effectsText}>{item.effects}</Text>
  </View>
);

export default function WatchScene() {
  return (
    <ScrollView style={styles.sceneContainer}>
      {/* Main "Watch Group" card at the top */}
      <View
        style={[
          styles.card,
          { borderLeftColor: AWARE_GROUPS.watch.color, borderLeftWidth: 5 },
        ]}
      >
        <Text style={[styles.cardTitle, { color: AWARE_GROUPS.watch.color }]}>
          Watch Group
        </Text>
        <Text style={styles.cardContent}>{AWARE_GROUPS.watch.description}</Text>
      </View>

      {/* Map over the new data and render a card for each antibiotic */}
      <View style={listStyles.listContainer}>
        {watchGroupAntibiotics.map((item) => (
          <AntibioticCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

// --- Add new styles for the list cards ---
// (You can also move this to AwareCommon.js)
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
