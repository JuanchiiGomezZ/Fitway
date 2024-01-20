import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { PADDING_BOTTOM, PADDING_HORIZONTAL } from "../../../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

//COMPONENTS

export default WelcomeBackground = ({ image, children }) => {

  return (
    <ImageBackground source={require("../../../assets/images/welcome_1.jpg")} style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.5)",
          "transparent",
          "transparent",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.7)",
          "rgba(0, 0, 0, 1)",
        ]}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: PADDING_BOTTOM,
    paddingTop: "10%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
