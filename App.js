import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import i18next from './src/services/i18n'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />

      <StatusBar style="light" translucent={true} />
    </SafeAreaView>
  );
};

export default App;
