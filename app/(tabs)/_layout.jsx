// app/(tabs)/_layout.js

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#002366', // Dark blue for active tab
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="guidelines"
        options={{
          title: 'Guidelines',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      {/* --- NEW TAB 1: AwaRe --- */}
      <Tabs.Screen
        name="aware" // This will be the file app/(tabs)/aware.js
        options={{
          title: 'AwaRe',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shield-checkmark-outline" size={size} color={color} />
          ),
          headerTitle: 'WHO AwaRe Classification', // Set a header title
        }}
      />
      {/* --- NEW TAB 2: About --- */}
      <Tabs.Screen
        name="about" // This will be the file app/(tabs)/about.js
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
          headerTitle: 'About These Guidelines', // Set a header title
        }}
      />
    </Tabs>
  );
}