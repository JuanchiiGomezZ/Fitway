import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { theme } from "./theme";
import { ThemeProvider } from "@shopify/restyle";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    FugazOne_400Regular,
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          {fontsLoaded && (
            <SafeAreaView style={{ flex: 1 }}>
              <Navigation />
              <StatusBar style="light" translucent />
            </SafeAreaView>
          )}
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
};
// eas build -p android --profile development
// eas build:run -p android --latest
export default App;
