import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { store } from "./src/store/store";
import { Provider } from "react-redux";



const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
          <StatusBar style="light" translucent />
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
};
// eas build -p android --profile development
// eas build:run -p android --latest
export default App;
