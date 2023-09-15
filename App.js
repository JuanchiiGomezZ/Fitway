import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import i18next from "./src/services/i18n";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
        <StatusBar style="light" translucent={true} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
