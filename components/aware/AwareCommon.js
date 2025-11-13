import { StyleSheet, Text, View } from "react-native";

// --- Define colors and route info in one place ---
export const AWARE_GROUPS = {
  access: {
    key: "access",
    title: "Access",
    color: "#34a853", // Green
    description:
      "First-line antibiotics, used as the primary choice for common infections. They have a narrow spectrum and lower resistance potential. These are prioritized in these guidelines.",
  },
  watch: {
    key: "watch",
    title: "Watch",
    color: "#fbbc05", // Yellow/Orange
    description:
      "Second-line antibiotics with a higher resistance potential. These are recommended only for specific, limited indications and should be used cautiously to preserve their effectiveness.",
  },
  reserve: {
    key: "reserve",
    title: "Reserve",
    color: "#ea4335", // Red
    description:
      "Last-resort antibiotics for treating severe infections caused by multidrug-resistant pathogens. Their use is highly restricted and based on specialist consultation to prevent the development of further resistance.",
  },
};

// --- Helper component ---
export const AwareCard = ({ title, description, color }) => (
  <View style={[styles.card, { borderLeftColor: color, borderLeftWidth: 5 }]}>
        <Text style={[styles.cardTitle, { color: color }]}>{title}</Text>   {" "}
    <Text style={styles.cardContent}>{description}</Text> {" "}
  </View>
);

// --- Styles ---
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 20,
    // paddingTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: "#555",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  sceneContainer: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
