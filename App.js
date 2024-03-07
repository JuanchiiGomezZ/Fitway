import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import { ThemeContext } from "./src/context/ThemeContext";
import { welcomeStorage } from "./src/helpers/storage";

const App = () => {
  const [theme, setTheme] = useState({ mode: "dark" });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "light" ? "dark" : "light";
      newTheme = { mode };
    }
    setTheme(newTheme);
    welcomeStorage.set("theme", JSON.stringify(newTheme));
  };

  const checkStoredTheme = () => {
    const storedTheme = JSON.parse(welcomeStorage.getString("theme"));
    if (storedTheme) updateTheme(storedTheme);
  };

  useEffect(() => {
    checkStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
            <StatusBar style="light" translucent />
          </SafeAreaView>
        </GestureHandlerRootView>
      </Provider>
    </ThemeContext.Provider>
  );
};
// eas build -p android --profile development
// eas build:run -p android --latest
export default App;
