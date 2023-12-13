import React from "react";
import { View } from "react-native";

//HOOKS & HELPERS
import { useTranslation } from "react-i18next";
import settingOptions from "./helpers/settingOption.json";

//COMPONENTS
import ScreenContainer from '../../components/ScreenContainer';
import Header from "../../components/Header";
import SettingCard from "./components/SettingCard";

export default Settings = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <Header title={t("Profile.settings")} />
      <View>
        {settingOptions.map((item) => (
          <SettingCard key={item.id} data={item} />
        ))}
      </View>
    </ScreenContainer>
  );
};

