import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import i18next from "../../../services/i18n";

//COMPONENTS & HELPER
import Header from "../../../components/Header";
import languages from "../../../locales/languages.json";

//STYLES
import {
  backgroundColor,
  containerPaddingHorizontal,
  containerPaddingTop,
  grayLightColor,
  whiteColor,
} from "../../../styles/styles";

export default ChangeLanguage = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Header title={t("Settings.languages")} />

      {languages.map((item, index) => (
        <TouchableOpacity style={styles.languagesContainer} key={index} onPress={() => i18next.changeLanguage(item.abbreviation)}>
          <View style={styles.langagueCard}>
            <Text style={styles.langagueIcon}>{item.icon}</Text>
            <Text style={styles.langagueName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: containerPaddingHorizontal,
    paddingTop: containerPaddingTop,
  },
  langagueCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    borderColor: grayLightColor,
    borderBottomWidth: 0.5,
  },
  langagueName: {
    color: whiteColor,
    fontSize: 20,
  },
});
