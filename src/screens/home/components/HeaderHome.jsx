import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { grayLightColor } from "../../../styles/styles";
import TitleScreen from "../../../components/TitleScreen";
import { FontAwesome } from "@expo/vector-icons";
import { HomeButton } from "../../../components/Buttons";

export default HeaderHome = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.head}>
      <TitleScreen title={t("home.title")} />
      <Text style={styles.routineName}>Routine name</Text>
      <View style={styles.buttonsContainer}>
        <HomeButton text={t("home.new-workout")} icon={"clipboard-text"} />
        <HomeButton text={t("home.my-routines")} icon={"bookmark"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginVertical: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  routineName: {
    color: grayLightColor,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
