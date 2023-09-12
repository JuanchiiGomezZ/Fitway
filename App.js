import React from "react";
import { SafeAreaView, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />

      <StatusBar style="light" translucent={true} />
    </SafeAreaView>
  );
};

export default App;
