import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

// Import the shared styles and data
import { AWARE_GROUPS } from "../../components/aware/AwareCommon";

// Import the new scene components
import AccessScene from "../../components/aware/AccessScene";
import ReserveScene from "../../components/aware/ReserveScene";
import WatchScene from "../../components/aware/WatchScene";

// --- SceneMap ---
const renderScene = SceneMap({
  [AWARE_GROUPS.access.key]: AccessScene,
  [AWARE_GROUPS.watch.key]: WatchScene,
  [AWARE_GROUPS.reserve.key]: ReserveScene,
});

// --- Main Screen Component ---
export default function AwareScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    AWARE_GROUPS.access,
    AWARE_GROUPS.watch,
    AWARE_GROUPS.reserve,
  ]);

  // --- Updated TabBar Styling ---
  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        // This is the underline indicator
        indicatorStyle={{
          backgroundColor: routes[props.navigationState.index].color,
          height: 3, // Thinner underline
        }}
        style={{
          backgroundColor: "#5f585872", // Clean white background
          elevation: 1, // Flatter, more modern shadow
          shadowOpacity: 0.05,
          shadowRadius: 2,
          shadowOffset: { height: 1, width: 0 },
          borderBottomWidth: 0.1, // Faint line to separate from content
          borderBottomColor: '#000000ff',
          borderTopWidth: 1,
          borderTopColor: "#111111"
        }}
        renderLabel={({ route, focused }) => (
          <Text
            style={[
              styles.tabLabel,
              {
                color: route.color, // Always use the route's specific color
                fontWeight: focused ? "bold" : "600", // Bold vs. Semi-bold
                opacity: focused ? 1 : 0.7, // Inactive tabs are slightly faded
              },
            ]}
          >
            {route.title}
          </Text>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        pagerStyle={{ backgroundColor: "#f9f9f9" }}
      />
    </SafeAreaView>
  );
}

// --- Local Styles for this specific screen ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabLabel: {
    fontSize: 15, // Slightly smaller font
    textTransform: "capitalize",
    paddingVertical: 10, // Controls vertical height
    marginHorizontal: 0, // Removed horizontal margin to let tabs space evenly
    textAlign: 'center',
  },
});