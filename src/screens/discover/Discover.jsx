import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import Countdown from "./components/Countdown";

export default DiscoverScreen = () => {
  const { t } = useTranslation();
  return <View style={styles.container}>
    <Countdown/>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
});
