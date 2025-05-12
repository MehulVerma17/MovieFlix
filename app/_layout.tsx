import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { StatusBar } from "react-native";
import "./globals.css";

export default function RootLayout() {
  SystemUI.setBackgroundColorAsync("black");
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
