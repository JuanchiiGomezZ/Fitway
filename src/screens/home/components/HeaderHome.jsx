import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GRAY_COLOR, } from "../../../styles/styles";
import TitleScreen from "../../../components/TitleScreen";
import { TransparentButton } from "../../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default HeaderHome = ({ toggleNewWorkoutModal }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={styles.head}>
      <TitleScreen title={t("Home.title")} />
      <Text style={styles.routineName}>Routine name</Text>
      <View style={styles.buttonsContainer}>
        <TransparentButton text={t("Home.new-workout")} icon={"clipboard-text"} task={toggleNewWorkoutModal} />
        <TransparentButton text={t("Home.my-routines")} icon={"bookmark"} task={() => navigation.navigate("MyRoutines")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 170,
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  routineName: {
    color: GRAY_COLOR,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
