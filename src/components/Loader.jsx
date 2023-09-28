import { View, ActivityIndicator } from "react-native";
import React from "react";
import { BACKGROUND_COLOR, ORANGE_COLOR } from "../styles/styles";

const Loader = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <ActivityIndicator size="large" color={ORANGE_COLOR} />
    </View>
  );
};

export default Loader;
