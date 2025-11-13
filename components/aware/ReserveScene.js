import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AWARE_GROUPS, styles } from "./AwareCommon"; // Import shared data/styles
import { reserveGroupAntibiotics } from "./ReserveData"; // Import the new data

// --- Card Component for the list ---
// (This is also in AccessScene.js and WatchScene.js)
// (Consider moving this to AwareCommon.js)
const AntibioticCard = ({ item }) => (
  <View style={listStyles.card}>
    <Text style={listStyles.title}>{item.antibiotic}</Text>
    <Text style={listStyles.classText}>{item.class}</Text>
    <Text style={listStyles.effectsText}>{item.effects}</Text>
  </View>
);

export default function ReserveScene() {
  return (
    <ScrollView style={styles.sceneContainer}>
      {/* Main "Reserve Group" card at the top */}
      <View
        style={[
          styles.card,
          { borderLeftColor: AWARE_GROUPS.reserve.color, borderLeftWidth: 5 },
        ]}
      >
        <Text style={[styles.cardTitle, { color: AWARE_GROUPS.reserve.color }]}>
          Reserve Group
        </Text>
        <Text style={styles.cardContent}>
          {AWARE_GROUPS.reserve.description}
        </Text>
      </View>

      {/* Map over the new data and render a card for each antibiotic */}
      <View style={listStyles.listContainer}>
        {reserveGroupAntibiotics.map((item) => (
          <AntibioticCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

// --- Styles for the list cards ---
// (This is also in AccessScene.js and WatchScene.js)
// (Consider moving this to AwareCommon.js)
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
