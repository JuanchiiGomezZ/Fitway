import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GRAY_COLOR, WHITE_COLOR } from "../../../styles/styles";
import ageCalculator from "../helpers/ageCalculator";
import SeparatingLine from "../../../components/SeparatingLine";

export default InfoContainer = ({ weight, height, birthdate }) => {
  const { t } = useTranslation();
  const age = ageCalculator(birthdate);
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>{t("Profile.weight")}</Text>
        <Text style={styles.infoValue}>{weight}</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>{t("Profile.height")}</Text>
        <Text style={styles.infoValue}>{height}</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>{t("Profile.age")}</Text>
        <Text style={styles.infoValue}>{"-"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "rgba(146, 146,146, 0.33)",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 10,
  },
  infoItem: {
    alignItems: "center",
    flex: 1,
  },
  infoTitle: {
    color: GRAY_COLOR,
    fontWeight: "500",
  },
  infoValue: {
    color: WHITE_COLOR,
    fontWeight: "500",
  },
});
