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
  BACKGROUND_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
  GRAY_COLOR,
  WHITE_COLOR,
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
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
  langagueCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    borderColor: GRAY_COLOR,
    borderBottomWidth: 0.5,
  },
  langagueName: {
    color: WHITE_COLOR,
    fontSize: 20,
  },
});
