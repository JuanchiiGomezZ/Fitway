import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import TitleScreen from "../../components/TitleScreen";
import { ButtonClassicLong } from "../../components/CustomButtons";
import { useNavigation } from "@react-navigation/native";

export default ActivitiesLog = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <ScreenContainer>
      <TitleScreen title="Activities Log" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
        <ButtonClassicLong text="Weight" />
        <ButtonClassicLong text="Trainings Log" action={() => navigate("TrainingsLog")} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
