import { View, ActivityIndicator } from "react-native";
import React from "react";
import { ORANGE_COLOR, backgroundColor } from "../styles/styles";

const Loader = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: backgroundColor }}>
      <ActivityIndicator size="large" color={ORANGE_COLOR} />
    </View>
  );
};

export default Loader;
