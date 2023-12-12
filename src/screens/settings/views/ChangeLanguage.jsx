import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import i18next from "../../../services/i18n";

//COMPONENTS & HELPER
import ScreenContainer from "../../../components/ScreenContainer";
import Header from "../../../components/Header";
import languages from "../../../locales/languages.json";

//STYLES
import { GRAY_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default ChangeLanguage = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <Header title={t("Settings.languages")} />

      {languages.map((item, index) => (
        <TouchableOpacity
          style={styles.languagesContainer}
          key={item.name}
          onPress={() => i18next.changeLanguage(item.abbreviation)}
        >
          <View style={styles.langagueCard}>
            <Text style={styles.langagueIcon}>{item.icon}</Text>
            <Text style={styles.langagueName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
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
