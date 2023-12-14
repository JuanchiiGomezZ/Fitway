import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import CardContainer from "../../../components/CardContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GREEN_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default MeasuresCard = () => {
  const { t } = useTranslation();
  return (
    <CardContainer>
      <View style={styles.content}>
        <View style={styles.measureContainer}>
          <MaterialCommunityIcons name="scale-bathroom" size={22} color={GREEN_COLOR} />
          <Text style={styles.measureText}>65 kg</Text>
        </View>
        <View style={styles.measureContainer}>
          <MaterialCommunityIcons name="arm-flex" size={22} color="#1871ff" />
          <Text style={styles.measureText}>28.5 kg</Text>
        </View>
        <View style={styles.measureContainer}>
          <MaterialCommunityIcons name="hexagon-multiple" size={22} color="#ac632f" />
          <Text style={styles.measureText}>15.5%</Text>
        </View>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  measureContainer: {
    alignItems: "center",
  },
  measureText: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "500",
  },
});
