import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { CircularButtonSmall } from "../../../components/Buttons";
import { useDispatch, useSelector } from "react-redux";

export default ControlBar = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <CircularButtonSmall icon="angle-left" />
      <CircularButtonSmall icon="angle-right" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
