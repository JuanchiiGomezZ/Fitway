import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS & HELPERS
import { useTranslation } from "react-i18next";
import settingOptions from "./helpers/settingOption.json";

//COMPONENTS
import Header from "../../components/Header";
import SettingCard from "./components/SettingCard";

//STYLES
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop } from "../../styles/styles";

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
    backgroundColor: backgroundColor,
    paddingHorizontal: containerPaddingHorizontal,
    paddingTop: containerPaddingTop,
  },
});
