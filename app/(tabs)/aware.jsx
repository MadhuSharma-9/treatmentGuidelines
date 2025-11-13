import { useState } from "react";
import { Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

// Import the shared styles and data
import { AWARE_GROUPS, styles } from "../../components/aware/AwareCommon";

// Import the new scene components
import AccessScene from "../../components/aware/AccessScene";
import ReserveScene from "../../components/aware/ReserveScene";
import WatchScene from "../../components/aware/WatchScene";

// --- SceneMap now uses the imported components ---
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
  ]); // Custom function to render the TabBar with colors

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: routes[props.navigationState.index].color,
          height: 3,
        }}
        style={{
          // backgroundColor: "#ffffff",
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
        renderLabel={({ route, focused }) => (
          <Text
            style={[styles.tabLabel, { color: focused ? route.color : "#888" }]}
          >
                        {route.title}         {" "}
          </Text>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
           {" "}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        pagerStyle={{ backgroundColor: "#f4f6f8" }}
      />
         {" "}
    </SafeAreaView>
  );
}
// Note: The 'styles' are now imported from AwareCommon.js
