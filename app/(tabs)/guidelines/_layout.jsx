// app/(tabs)/guidelines/_layout.js

import { Stack } from 'expo-router';

export default function GuidelinesStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'All Guidelines', headerShown: false }} />
      <Stack.Screen name="sublist" options={{ title: 'Conditions' }} />
      <Stack.Screen name="variation" options={{ title: 'Select Variation' }} /> 
      <Stack.Screen name="detail" options={{ title: 'Guideline Details' }} />
    </Stack>
  );
}