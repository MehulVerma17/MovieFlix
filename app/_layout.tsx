import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { StatusBar, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { SavedMoviesProvider } from "./context/SavedMoviesContext";
import "./globals.css";

const toastConfig = {
  success: ({ text1 }: any) => (
    <View
      style={{
        backgroundColor: "#1E1E2E",
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 10,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{text1}</Text>
    </View>
  ),
};

export default function RootLayout() {
  SystemUI.setBackgroundColorAsync("black");
  return (
    <>
      <SavedMoviesProvider>
        <StatusBar hidden={true} />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
        </Stack>
        <Toast config={toastConfig} />
      </SavedMoviesProvider>
    </>
  );
}
