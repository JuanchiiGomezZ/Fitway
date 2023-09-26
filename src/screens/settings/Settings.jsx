import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS & HELPERS
import { useTranslation } from "react-i18next";
import settingOptions from "./helpers/settingOption.json";

//COMPONENTS
import Header from "../../components/Header";
import SettingCard from "./components/SettingCard";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default Settings = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Header title={t("Profile.settings")} />
      <View style={styles.settingContainer}>
        {settingOptions.map((item) => (
          <SettingCard key={item.id} data={item} />
        ))}
      </View>
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
});
